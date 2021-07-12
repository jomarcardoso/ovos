// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { pipe, UnaryFunction, Observable } from 'rxjs';
import { filter, map, pairwise, scan } from 'rxjs/operators';
import intersection from 'lodash/intersection';
import { getViewportHeight } from '../view/view.utilities';
import { AXES, Axes, Direction } from './axis.types';

export function getDirection({
  lastAxes,
  axes,
}: {
  lastAxes: Axes;
  axes: Axes;
}): Direction {
  const onTheRight = lastAxes.x < axes.x;
  const onTheLeft = lastAxes.x > axes.x;
  const onDown = lastAxes.y < axes.y;
  const onUp = lastAxes.y > axes.y;

  if (onUp && onTheLeft) return Direction.UP_LEFT;

  if (onUp && onTheRight) return Direction.UP_RIGHT;

  if (onUp) return Direction.UP;

  if (onDown && onTheLeft) return Direction.DOWN_LEFT;

  if (onDown && onTheRight) return Direction.DOWN_RIGHT;

  if (onDown) return Direction.DOWN;

  if (onTheRight) return Direction.RIGHT;

  if (onTheLeft) return Direction.LEFT;

  return Direction.NONE;
}

interface IsOnTheSameDirectionArgs {
  lastDirection: Direction;
  direction: Direction;
}

type IsOnTheSameDirection = (args: IsOnTheSameDirectionArgs) => boolean;

export const isOnTheSameDirection: IsOnTheSameDirection = ({
  direction,
  lastDirection,
}) => {
  let lastDirections: Array<Direction> = [lastDirection];

  if (lastDirection === Direction.DOWN_LEFT) {
    lastDirections = [Direction.DOWN, Direction.LEFT];
  }

  if (lastDirection === Direction.DOWN_RIGHT) {
    lastDirections = [Direction.DOWN, Direction.RIGHT];
  }

  if (lastDirection === Direction.UP_LEFT) {
    lastDirections = [Direction.UP, Direction.LEFT];
  }

  if (lastDirection === Direction.UP_RIGHT) {
    lastDirections = [Direction.UP, Direction.RIGHT];
  }

  let directions: Array<Direction> = [direction];

  if (direction === Direction.DOWN_LEFT) {
    directions = [Direction.DOWN, Direction.LEFT];
  }

  if (direction === Direction.DOWN_RIGHT) {
    directions = [Direction.DOWN, Direction.RIGHT];
  }

  if (direction === Direction.UP_LEFT) {
    directions = [Direction.UP, Direction.LEFT];
  }

  if (direction === Direction.UP_RIGHT) {
    directions = [Direction.UP, Direction.RIGHT];
  }

  return Boolean(intersection(lastDirections, directions).length);
};

export function isOnGap({
  axes,
  lastAxes,
  gap,
}: {
  axes: Axes;
  lastAxes: Axes;
  gap: Partial<Axes>;
}): boolean {
  const beOnVerticalGap = gap.y
    ? Math.abs(axes.y - lastAxes.y) < (gap.y ?? 0)
    : false;
  const beOnHorizontalGap = gap.x
    ? Math.abs(axes.x - lastAxes.x) < (gap.x ?? 0)
    : false;

  if (beOnVerticalGap && beOnHorizontalGap) return true;

  return false;
}

export function isAboveTheScreen(position: number): boolean {
  return position < 0;
}

export function isBelowTheScreen(position: number): boolean {
  return position > getViewportHeight();
}

export function filterByAttributeAndGapOperator<T>(
  k: keyof T,
  gap = AXES,
  ignoreWhen: {
    key: keyof T;
    value: T[typeof k];
  },
): UnaryFunction<Observable<T>, Observable<T>> {
  interface TWithLast {
    last: T;
    current: T;
  }

  return pipe(
    map<T, TWithLast>((scrollObserver) => {
      return {
        current: scrollObserver,
        last: scrollObserver,
      };
    }),
    scan<TWithLast, TWithLast>((acc, curr) => {
      const axes = acc.current[k] as unknown as Axes;
      const lastAxes = acc.last[k] as unknown as Axes;

      const onGap = isOnGap({
        axes,
        gap,
        lastAxes,
      });

      return {
        current: curr.current,
        last: onGap ? acc.last : curr.current,
      };
    }),
    filter<TWithLast>(({ current, last }, index) => {
      const axes = current[k] as unknown as Axes;
      const lastAxes = last[k] as unknown as Axes;
      const firstEvent = !index;
      const isToIgnore = current[ignoreWhen.key] === ignoreWhen.value;

      if (firstEvent || isToIgnore) return true;

      return !isOnGap({
        axes,
        gap,
        lastAxes,
      });
    }),
    map<TWithLast, T>((scrollObserver) => {
      return scrollObserver.current;
    }),
  );
}

export function putRelativeAxesOperator<T>(
  k: keyof T,
  relativeK: keyof T,
  startK: keyof T,
  restartWhen: {
    key: keyof T;
    value: T[typeof k];
  },
): UnaryFunction<Observable<T>, Observable<T>> {
  return pipe(
    scan<T, T>((acc, curr, index) => {
      const firstRun = index === 1;
      const toRestart = curr[restartWhen.key] === restartWhen.value;
      let startAxes = acc[startK] as unknown as Axes;
      const currAxes = curr[k] as unknown as Axes;

      if (firstRun || toRestart) {
        startAxes = currAxes;
      }
      const relativeX = currAxes.x - startAxes.x;
      const relativeY = currAxes.y - startAxes.y;

      return {
        ...curr,
        [startK]: startAxes,
        [relativeK]: {
          x: relativeX,
          y: relativeY,
        },
      };
    }),
  );
}

export function putAxesBreakpointOperator<T>(
  gap = AXES,
  k: keyof T,
  relativeBreakpointK: keyof T,
): UnaryFunction<Observable<T>, Observable<T>> {
  return pipe(
    map<T, T>((value) => {
      const axes = value[k] as unknown as Axes;

      const x = Math.floor(axes.x / gap.x || 1) - 1;
      const y = Math.floor(axes.y / gap.y || 1) - 1;

      return {
        ...value,
        [relativeBreakpointK]: {
          x,
          y,
        },
      };
    }),
  );
}

export function putDirectionOperator<T>(
  k: keyof T,
  directionK: keyof T,
  ignoreWhen: {
    key: keyof T;
    value: T[typeof k];
  },
): UnaryFunction<Observable<T>, Observable<T>> {
  return pipe(
    pairwise(),
    map<T[], T>(([last, curr]) => {
      const lastAxes = last[k] as unknown as Axes;
      const currAxes = curr[k] as unknown as Axes;
      let direction =
        last[directionK] || (Direction.NONE as unknown as Direction);
      const isToIgnore = curr[ignoreWhen.key] === ignoreWhen.value;

      if (!isToIgnore) {
        direction = getDirection({
          axes: currAxes,
          lastAxes,
        });
      }

      return {
        ...curr,
        [directionK]: direction,
      };
    }),
  );
}
