// eslint-disable-next-line import/no-unresolved
import { isNumber } from 'lodash';
import { pipe, UnaryFunction, Observable } from 'rxjs';
import { filter, map, pairwise, scan } from 'rxjs/operators';
import { Touch$Next } from '../../ovos';
import {
  AXES,
  Axes,
  Direction,
  getDirection,
  isOnGap,
  Positions,
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

export function putRelativeAxesOperator({
  stopGrowingAt = 0,
}: {
  stopGrowingAt?: Positions | number;
}): UnaryFunction<Observable<Touch$Next>, Observable<Touch$Next>> {
  return pipe(
    scan<Touch$Next, Touch$Next>((acc, curr, index) => {
      const firstRun = index === 1;
      const stopGrowingAtAsPositions = stopGrowingAt as Positions;
      const toRestart = curr.type === 'START';
      let { startAxes } = acc;
      let relativeStartAxes = acc.relatives.startAxes;
      const currAxes = curr.axes;

      if (firstRun || toRestart) {
        startAxes = currAxes;
        relativeStartAxes = currAxes;
      }

      if (
        stopGrowingAtAsPositions.bottom &&
        stopGrowingAtAsPositions.left &&
        stopGrowingAtAsPositions.top &&
        stopGrowingAtAsPositions.right
      ) {
        if (currAxes.x < relativeStartAxes.x - stopGrowingAtAsPositions.left) {
          relativeStartAxes.x = currAxes.x + stopGrowingAtAsPositions.left;
        }

        if (currAxes.y < relativeStartAxes.y - stopGrowingAtAsPositions.top) {
          relativeStartAxes.y = currAxes.y + stopGrowingAtAsPositions.top;
        }

        if (currAxes.x > relativeStartAxes.x + stopGrowingAtAsPositions.right) {
          relativeStartAxes.x = currAxes.x - stopGrowingAtAsPositions.right;
        }

        if (
          currAxes.y >
          relativeStartAxes.y + stopGrowingAtAsPositions.bottom
        ) {
          relativeStartAxes.y = currAxes.y - stopGrowingAtAsPositions.bottom;
        }
      }

      let relativeX = currAxes.x - relativeStartAxes.x;
      let relativeY = currAxes.y - relativeStartAxes.y;

      const hypotenuse = Math.hypot(relativeX, relativeY);

      if (isNumber(stopGrowingAt)) {
        const isOutOfRadix = hypotenuse > stopGrowingAt;

        if (isOutOfRadix) {
          const sin = relativeY / hypotenuse;
          const cos = relativeX / hypotenuse;

          relativeStartAxes.x =
            cos * (hypotenuse - (stopGrowingAt as number)) +
            relativeStartAxes.x;
          relativeStartAxes.y =
            sin * (hypotenuse - (stopGrowingAt as number)) +
            relativeStartAxes.y;
          relativeX = cos * (stopGrowingAt as number);
          relativeY = sin * (stopGrowingAt as number);
        }
      }

      const angle =
        ((Math.atan2(-relativeY, relativeX) * 180) / Math.PI + 360) % 360;

      return {
        ...curr,
        startAxes,
        relatives: {
          ...curr.relatives,
          axes: {
            x: relativeX,
            y: relativeY,
          },
          startAxes: relativeStartAxes,
          angle,
        },
      };
    }),
  );
}

interface PutAxesBreakpointOperatorArgs {
  gap: Axes;
}

export function putAxesBreakpointOperator({
  gap = AXES,
}: PutAxesBreakpointOperatorArgs): UnaryFunction<
  Observable<Touch$Next>,
  Observable<Touch$Next>
> {
  return pipe(
    map<Touch$Next, Touch$Next>((value) => {
      const { axes } = value.relatives;

      const x = Math.floor(axes.x / gap.x || 1) - 1;
      const y = Math.floor(axes.y / gap.y || 1) - 1;

      return {
        ...value,
        relatives: {
          ...value.relatives,
          breakpointAxes: {
            x,
            y,
          },
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
