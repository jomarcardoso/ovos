// eslint-disable-next-line import/no-unresolved
import { pipe, UnaryFunction, Observable } from 'rxjs';
import { filter, map, pairwise, scan } from 'rxjs/operators';
import {
  AXES,
  Axes,
  Direction,
  getDirection,
  isOnGap,
} from '../../utilities/axis';

interface FilterByAttributeAndGapOperatorArgs<T> {
  ignoreWhen: {
    key: keyof T;
    value: T[keyof T];
  };
  k: keyof T;
  gap: Axes;
}

export function filterByAttributeAndGapOperator<T>({
  ignoreWhen,
  k,
  gap = AXES,
}: FilterByAttributeAndGapOperatorArgs<T>): UnaryFunction<
  Observable<T>,
  Observable<T>
> {
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

interface PutAxesBreakpointOperatorArgs<T> {
  k: keyof T;
  relativeBreakpointK: keyof T;
  gap: Axes;
}

export function putAxesBreakpointOperator<T>({
  k,
  relativeBreakpointK,
  gap = AXES,
}: PutAxesBreakpointOperatorArgs<T>): UnaryFunction<
  Observable<T>,
  Observable<T>
> {
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
      let direction = last[directionK] || ('' as unknown as Direction);
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
