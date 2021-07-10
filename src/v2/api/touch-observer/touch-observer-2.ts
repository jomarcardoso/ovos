/* eslint-disable */

// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { fromEvent, merge, Observable, of, Subject } from 'rxjs';
import { map, scan, switchMap, takeUntil } from 'rxjs/operators';
import {
  AXES,
  Axes,
  filterByAttributeAndGapOperator,
} from '../../utilities/axis';
import { putRelativeAxesOperator } from '../../utilities/axis/axis';
// import { putRelativeAxesOperator } from '../../utilities/axis/axis';
import { ScrollableElement } from '../../utilities/scroll';

type EventWithType = { event: TouchEvent | MouseEvent; type: TouchEventType };
type TouchEventWithType = { event: TouchEvent; type: TouchEventType };
type MouseEventWithType = { event: MouseEvent; type: TouchEventType };
type DragObserver = { type: TouchEventType; axes: Axes; relativeAxes: Axes; startAxes: Axes };
type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

interface TouchObservableReturn {
  grab$: Observable<DragObserver>;
  drop$: Observable<DragObserver>;
  drag$: Observable<DragObserver>;
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

  const mouse$ = merge(mouseDown$, mouseMove$, mouseUp$);

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
  const mouseMoveType$ = mouseMove$.pipe(typeOperator('MOVE'));
  const touchMoveType$ = touchMove$.pipe(typeOperator('MOVE'));

  const mouseDragType$ = mouseDownType$.pipe(
    switchMap(() => mouseMoveType$.pipe(takeUntil(mouseUpType$))),
  );

  const touchDragType$ = touchStartType$.pipe(
    switchMap(() => touchMoveType$.pipe(takeUntil(touchEndType$))),
  );

  function mouseAxesOperator() {
    return map<MouseEventWithType, DragObserver>(({ event, ...args }) => {
      const axes = {
        x: event.screenX,
        y: event.screenY,
      };

      return {
        ...args,
        axes,
        relativeAxes: AXES,
        startAxes: axes,
      };
    });
  }

  function touchAxesOperator() {
    return map<TouchEventWithType, DragObserver>(({ event, ...args }) => {
      const axes = {
        x: event.changedTouches[0].screenX,
        y: event.changedTouches[0].screenY,
      };

      return {
        ...args,
        axes,
        relativeAxes: AXES,
        startAxes: axes,
      };
    });
  }

  const mouseDownAxes$ = mouseDownType$.pipe(mouseAxesOperator());
  const touchStartAxes$ = touchStartType$.pipe(touchAxesOperator());
  const mouseUpAxes$ = mouseUpType$.pipe(mouseAxesOperator());
  const touchEndAxes$ = touchEndType$.pipe(touchAxesOperator());
  const mouseDragAxes$ = mouseDragType$.pipe(mouseAxesOperator());
  const touchMoveAxes$ = touchDragType$.pipe(touchAxesOperator());

  const grab$ = merge(mouseDownAxes$, touchStartAxes$);
  const drop$ = merge(mouseUpAxes$, touchEndAxes$);
  let drag$ = merge(mouseDragAxes$, touchMoveAxes$);

  if (gap.x || gap.y) {
    drag$ = drag$.pipe(
      filterByAttributeAndGapOperator<DragObserver>('axes', gap),
    );
  }

  drag$ = drag$.pipe(putRelativeAxesOperator<DragObserver>('axes', 'relativeAxes', 'startAxes'))

  return {
    grab$,
    drop$,
    drag$,
  };
}
