// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { fromEvent, merge, Observable } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { AXES, Axes } from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';

type EventWithType = { event: TouchEvent | MouseEvent; type: TouchEventType };
type TouchEventWithType = { event: TouchEvent; type: TouchEventType };
type MouseEventWithType = { event: MouseEvent; type: TouchEventType };
type AxesWithType = { type: TouchEventType; axes: Axes };

type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

interface TouchObservableReturn {
  grab$: Observable<AxesWithType>;
  drop$: Observable<AxesWithType>;
  drag$: Observable<AxesWithType>;
}

export default function TouchObservable({
  el = document,
  gap = AXES,
}: {
  el?: ScrollableElement;
  gap?: Axes;
}): TouchObservableReturn {
  const mouseDown$ = fromEvent(el, 'mousedown');
  const mouseMove$ = fromEvent(document, 'mousemove');
  const mouseUp$ = fromEvent(document, 'mouseup');
  const touchStart$ = fromEvent(el, 'touchstart');
  const touchEnd$ = fromEvent(document, 'touchend');
  const touchMove$ = fromEvent(el, 'touchmove');

  console.log(gap);

  const mouseDrag$ = mouseDown$.pipe(
    switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$))),
  );

  function typeOperator(type: TouchEventType) {
    return map<TouchEvent | MouseEvent, EventWithType>((event) => ({
      event,
      type,
    }));
  }

  const mouseDownType$ = mouseDown$.pipe(typeOperator('START'));
  const touchStartType$ = touchStart$.pipe(typeOperator('START'));
  const mouseUpType$ = mouseUp$.pipe(typeOperator('END'));
  const touchEndType$ = touchEnd$.pipe(typeOperator('END'));
  const mouseDragType$ = mouseDrag$.pipe(typeOperator('MOVE'));
  const touchMoveType$ = touchMove$.pipe(typeOperator('MOVE'));

  function mouseAxesOperator() {
    return map<MouseEventWithType, AxesWithType>(({ event, ...args }) => {
      return {
        ...args,
        axes: {
          x: event.screenX,
          y: event.screenY,
        },
      };
    });
  }

  function touchAxesOperator() {
    return map<TouchEventWithType, AxesWithType>(({ event, ...args }) => {
      return {
        ...args,
        axes: {
          x: event.changedTouches[0].screenX,
          y: event.changedTouches[0].screenY,
        },
      };
    });
  }

  const mouseDownAxes$ = mouseDownType$.pipe(mouseAxesOperator());
  const touchStartAxes$ = touchStartType$.pipe(touchAxesOperator());
  const mouseUpAxes$ = mouseUpType$.pipe(mouseAxesOperator());
  const touchEndAxes$ = touchEndType$.pipe(touchAxesOperator());
  const mouseDragAxes$ = mouseDragType$.pipe(mouseAxesOperator());
  const touchMoveAxes$ = touchMoveType$.pipe(touchAxesOperator());

  const grab$ = merge(mouseDownAxes$, touchStartAxes$);
  const drop$ = merge(mouseUpAxes$, touchEndAxes$);
  const drag$ = merge(mouseDragAxes$, touchMoveAxes$);

  return {
    grab$,
    drop$,
    drag$,
  };
}
