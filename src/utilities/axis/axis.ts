import intersection from 'lodash/intersection';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import { getViewportHeight } from '../view/view';
import { Axes, Direction, Positions, POSITIONS } from './axis.types';
import { getMaxHorizontalScroll, getMaxVerticalScroll } from '../element';

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

  if (onUp && onTheLeft) return 'up-left';

  if (onUp && onTheRight) return 'up-right';

  if (onUp) return 'up';

  if (onDown && onTheLeft) return 'down-left';

  if (onDown && onTheRight) return 'down-right';

  if (onDown) return 'down';

  if (onTheRight) return 'right';

  if (onTheLeft) return 'left';

  return '';
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

  if (lastDirection === 'down-left') {
    lastDirections = ['down', 'left'];
  }

  if (lastDirection === 'down-right') {
    lastDirections = ['down', 'right'];
  }

  if (lastDirection === 'up-left') {
    lastDirections = ['up', 'left'];
  }

  if (lastDirection === 'up-right') {
    lastDirections = ['up', 'right'];
  }

  let directions: Array<Direction> = [direction];

  if (direction === 'down-left') {
    directions = ['down', 'left'];
  }

  if (direction === 'down-right') {
    directions = ['down', 'right'];
  }

  if (direction === 'up-left') {
    directions = ['up', 'left'];
  }

  if (direction === 'up-right') {
    directions = ['up', 'right'];
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

export interface GetRelativeScrollPositionArgs {
  position: Axes;
  lastRelativePosition?: Axes;
  lastPosition?: Axes;
  limit?: Partial<Positions>;
}

export type GetRelativePosition = (args: GetRelativeScrollPositionArgs) => Axes;

export const getRelativePosition: GetRelativePosition = ({
  position,
  lastRelativePosition = { x: 0, y: 0 },
  lastPosition = { x: 0, y: 0 },
  limit,
}) => {
  let x = lastRelativePosition.x + position.x - lastPosition.x;
  let y = lastRelativePosition.y + position.y - lastPosition.y;

  if (limit) {
    if (isNumber(limit.top)) y = Math.max(y, limit.top);
    if (isNumber(limit.bottom)) y = Math.min(y, limit.bottom);
    if (isNumber(limit.left)) x = Math.max(x, limit.left);
    if (isNumber(limit.right)) x = Math.min(x, limit.right);
  }

  return {
    x,
    y,
  };
};

export interface IsOnTheRegionArgs {
  region: Positions;
  position: Axes;
}

export type IsOnTheRegion = (args: IsOnTheRegionArgs) => boolean;

export const isOnTheRegion: IsOnTheRegion = ({ region, position }) => {
  const onBelowTheTop = position.y >= region.top;
  const onAboveTheBottom = position.y <= region.bottom;

  return onBelowTheTop && onAboveTheBottom;
};

export interface IsOutOfLimitArgs {
  limit?: Partial<Positions>;
  position: Axes;
}

export type IsOutOfLimit = (args: IsOutOfLimitArgs) => boolean;

export const isOutOfLimit: IsOutOfLimit = ({ position, limit = POSITIONS }) => {
  if (limit.top) {
    const outOfTopLimit = position.y < limit.top;

    if (outOfTopLimit) return true;
  }

  if (limit.bottom) {
    const outOfBottomLimit = position.y > limit.bottom;

    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = position.x < limit.left;

    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    const outOfRightLimit = position.x > limit.right;

    if (outOfRightLimit) return true;
  }

  return false;
};

interface IsSafeArgs {
  position: Axes;
  lastPosition: Axes;
  debounce: Partial<Axes>;
}

export type IsSafe = (args: IsSafeArgs) => boolean;

export const isSafe: IsSafe = ({ position, lastPosition, debounce }) => {
  const beOnVerticalSafe =
    Math.abs(position.y - lastPosition.y) < (debounce.y ?? 0);
  const beOnHorizontalSafe =
    Math.abs(position.x - lastPosition.x) < (debounce.x ?? 0);

  if (beOnVerticalSafe && beOnHorizontalSafe) return true;

  return false;
};

interface IsOnGapArgs {
  position: Axes;
  gap: Partial<Positions>;
  el: HTMLElement;
}

export type IsOnGap = (args: IsOnGapArgs) => boolean;

export const isOnGapOfEl: IsOnGap = ({ position, gap, el }) => {
  const beOnTopGap = position.y < (gap.top ?? 0);

  if (!isNil(gap.top) && beOnTopGap) return true;

  const beOnBottomGap =
    position.y > getMaxVerticalScroll(el) - (gap.bottom ?? 0);

  if (!isNil(gap.bottom) && beOnBottomGap) return true;

  const beOnLeftGap = position.x < (gap.left ?? 0);

  if (!isNil(gap.left) && beOnLeftGap) return true;

  const beOnRightGap =
    position.x > getMaxHorizontalScroll(el) - (gap.right ?? 0);

  if (!isNil(gap.right) && beOnRightGap) return true;

  return false;
};
