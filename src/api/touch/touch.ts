// eslint-disable-next-line import/no-unresolved
import { fromEvent, merge } from 'rxjs';
import {
  filter,
  map,
  pairwise,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';
import {
  filterByAttributeAndGapOperator,
  putAxesBreakpointOperator,
  putDirectionOperator,
  putRelativeAxesOperator,
} from '../../operators/axis';
import { AXES, Direction } from '../../utilities/axis';
import { isOnTheSameDirection } from '../../utilities/axis/axis';
import { getLeft, getTop } from '../../utilities/element';
import type {
  EventWithType,
  MouseEventWithType,
  Touch$Next,
  TouchEventWithType,
  TouchObservableReturn,
  TouchEventType,
  TouchArgs,
} from './touch.types';

export default function Touch$({
  el = document,
  gap = AXES,
  onlyDirections = [],
  takeLimit = 0,
  onlyOnChangeDirection = false,
  onlyAxis,
}: TouchArgs): TouchObservableReturn {
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
        x: onlyAxis === 'y' ? 0 : event.clientX - left,
        y: onlyAxis === 'x' ? 0 : event.clientY - top,
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
        x: onlyAxis === 'y' ? 0 : event.changedTouches[0].screenX,
        y: onlyAxis === 'x' ? 0 : event.changedTouches[0].screenY,
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

  if (onlyOnChangeDirection) {
    drag$ = drag$.pipe(
      pairwise<Touch$Next>(),
      filter(([last, current]) => {
        return isOnTheSameDirection({
          direction: current.direction,
          lastDirection: last.direction,
        });
      }),
      map<Touch$Next[], Touch$Next>(([, current]) => current),
    );
  }

  return {
    grab$,
    drop$,
    drag$,
  };
}
