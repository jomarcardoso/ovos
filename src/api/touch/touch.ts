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
import { AXES } from '../../utilities/axis';
import { isOnTheSameDirection } from '../../utilities/axis/axis';
import { getLeft, getTop } from '../../utilities/element';
import type {
  EventWithType,
  MouseEventWithType,
  Touch$,
  TouchEventWithType,
  TouchObservableReturn,
  TouchEventType,
  TouchArgs,
} from './touch.types';

export function touch({
  el: externalEl,
  gap = AXES,
  onlyDirections = [],
  takeLimit,
  onlyOnChangeDirection = false,
  onlyAxis,
  stopGrowingAt,
}: TouchArgs): TouchObservableReturn {
  const el = externalEl || document;
  const mouseDown$ = fromEvent(el, 'mousedown');
  const mouseMove$ = fromEvent(document, 'mousemove');
  const mouseUp$ = fromEvent(document, 'mouseup');
  const touchStart$ = fromEvent(el, 'touchstart');
  const touchEnd$ = fromEvent(document, 'touchend');
  const touchMove$ = fromEvent(el, 'touchmove');

  (el as HTMLElement).setAttribute('draggable', 'false');

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
    return map<MouseEventWithType, Touch$>(({ event, ...args }) => {
      const top = getTop(el as HTMLElement);
      const left = getLeft(el as HTMLElement);

      const axes = {
        x: onlyAxis === 'y' ? 0 : event.clientX - left,
        y: onlyAxis === 'x' ? 0 : event.clientY - top,
      };

      return {
        ...args,
        axes,
        direction: '',
        relatives: {
          angle: 0,
          axes: AXES,
          breakpointAxes: AXES,
          startAxes: AXES,
        },
        startAxes: axes,
      };
    });
  }

  function touchAxesOperator() {
    return map<TouchEventWithType, Touch$>(({ event, ...args }) => {
      const axes = {
        x: onlyAxis === 'y' ? 0 : event.changedTouches[0].screenX,
        y: onlyAxis === 'x' ? 0 : event.changedTouches[0].screenY,
      };

      return {
        ...args,
        axes,
        relatives: {
          angle: 0,
          axes: AXES,
          breakpointAxes: AXES,
          startAxes: AXES,
        },
        direction: '',
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
      filterByAttributeAndGapOperator({
        gap,
      }),
    );
  }

  drag$ = drag$.pipe(
    putRelativeAxesOperator({
      stopGrowingAt,
    }),
  );

  drag$ = drag$.pipe(
    putAxesBreakpointOperator({
      gap,
    }),
  );

  drag$ = drag$.pipe(
    putDirectionOperator<Touch$>('axes', 'direction', {
      key: 'type',
      value: 'START',
    }),
  );

  if (onlyDirections.length) {
    drag$ = drag$.pipe(
      filter<Touch$>((item) => {
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
      pairwise<Touch$>(),
      filter(([last, current]) => {
        return isOnTheSameDirection({
          direction: current.direction,
          lastDirection: last.direction,
        });
      }),
      map<Touch$[], Touch$>(([, current]) => current),
    );
  }

  return {
    grab$,
    drop$,
    drag$,
  };
}
