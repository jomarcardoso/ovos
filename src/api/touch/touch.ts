// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { fromEvent, merge, Observable } from 'rxjs';
import { filter, map, switchMap, take, takeUntil } from 'rxjs/operators';
import {
  AXES,
  Axes,
  Direction,
  filterByAttributeAndGapOperator,
} from '../../utilities/axis';
import {
  putAxesBreakpointOperator,
  putDirectionOperator,
  putRelativeAxesOperator,
} from '../../utilities/axis/axis';
import { getLeft, getTop } from '../../utilities/element';
// import { putRelativeAxesOperator } from '../../utilities/axis/axis';
import { ScrollableElement } from '../../utilities/scroll';

type EventWithType = { event: TouchEvent | MouseEvent; type: TouchEventType };
type TouchEventWithType = { event: TouchEvent; type: TouchEventType };
type MouseEventWithType = { event: MouseEvent; type: TouchEventType };
export type Touch$Next = {
  type: TouchEventType;
  axes: Axes;
  relativeAxes: Axes;
  startAxes: Axes;
  relativeBreakpointAxes: Axes;
  direction: Direction;
};
type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

interface TouchObservableReturn {
  grab$: Observable<Touch$Next>;
  drop$: Observable<Touch$Next>;
  drag$: Observable<Touch$Next>;
}

export default function Touch$({
  el = document,
  gap = AXES,
  onlyDirections = [],
  takeLimit = 0,
}: {
  el?: ScrollableElement;
  gap?: Axes;
  onlyDirections?: Array<Direction>;
  takeLimit?: number;
}): TouchObservableReturn {
  const mouseDown$ = fromEvent(el, 'mousedown');
  const mouseMove$ = fromEvent(document, 'mousemove');
  const mouseUp$ = fromEvent(document, 'mouseup');
  const touchStart$ = fromEvent(el, 'touchstart');
  const touchEnd$ = fromEvent(document, 'touchend');
  const touchMove$ = fromEvent(el, 'touchmove');

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

  const mouseDragType$ = merge(
    mouseDownType$,
    mouseDownType$.pipe(
      switchMap(() =>
        merge(mouseUpType$, mouseMoveType$.pipe(takeUntil(mouseUpType$))),
      ),
    ),
  );

  const touchDragType$ = merge(
    touchStartType$,
    touchStartType$.pipe(
      switchMap(() =>
        merge(touchMoveType$, touchMoveType$.pipe(takeUntil(touchEndType$))),
      ),
    ),
  );

  function mouseAxesOperator() {
    return map<MouseEventWithType, Touch$Next>(({ event, ...args }) => {
      const top = getTop(el as HTMLElement);
      const left = getLeft(el as HTMLElement);

      const axes = {
        x: event.clientX - left,
        y: event.clientY - top,
      };

      return {
        ...args,
        axes,
        relativeAxes: AXES,
        relativeBreakpointAxes: AXES,
        startAxes: axes,
        direction: Direction.NONE,
      };
    });
  }

  function touchAxesOperator() {
    return map<TouchEventWithType, Touch$Next>(({ event, ...args }) => {
      const axes = {
        x: event.changedTouches[0].screenX,
        y: event.changedTouches[0].screenY,
      };

      return {
        ...args,
        axes,
        relativeAxes: AXES,
        relativeBreakpointAxes: AXES,
        startAxes: axes,
        direction: Direction.NONE,
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
      filterByAttributeAndGapOperator<Touch$Next>('axes', gap, {
        key: 'type',
        value: 'START',
      }),
    );
  }

  drag$ = drag$.pipe(
    putRelativeAxesOperator<Touch$Next>('axes', 'relativeAxes', 'startAxes', {
      key: 'type',
      value: 'START',
    }),
  );

  drag$ = drag$.pipe(
    putAxesBreakpointOperator<Touch$Next>(
      gap,
      'relativeAxes',
      'relativeBreakpointAxes',
    ),
  );

  drag$ = drag$.pipe(
    putDirectionOperator<Touch$Next>('axes', 'direction', {
      key: 'type',
      value: 'START',
    }),
  );

  if (onlyDirections.length) {
    drag$ = drag$.pipe(
      filter<Touch$Next>((item) => {
        const isTheSameDirection = onlyDirections.some(
          (direction) => direction === item.direction,
        );

        return isTheSameDirection;
      }),
    );
  }

  if (takeLimit) {
    drag$ = drag$.pipe(take(takeLimit));
  }

  return {
    grab$,
    drop$,
    drag$,
  };
}
