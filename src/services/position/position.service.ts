import isNumber from 'lodash/isNumber';
import { Position, Axes } from '../../types/types';

export const POSITION_DEFAULT: Position = {
  bottom: null,
  left: null,
  right: null,
  top: null,
};

interface IsOnTheRegionArgs {
  region: Position;
  position: Axes;
}

type IsOnTheRegion = (args: IsOnTheRegionArgs) => boolean;

export const isOnTheRegion: IsOnTheRegion = ({ region, position }) => {
  const onBelowTheTop = position.y >= region.top;
  const onAboveTheBottom = position.y <= region.bottom;

  return onBelowTheTop && onAboveTheBottom;
};

interface IsOutOfLimitArgs {
  limit: Position;
  relativeScrollPosition: Axes;
}

export function isOutOfLimit({
  relativeScrollPosition,
  limit = POSITION_DEFAULT,
}: IsOutOfLimitArgs): boolean {
  if (isNumber(limit.top)) {
    const outOfTopLimit = relativeScrollPosition.y <= limit.top;

    if (outOfTopLimit) return true;
  }

  if (isNumber(limit.bottom)) {
    if (limit.bottom === 0) return false;

    const outOfBottomLimit = relativeScrollPosition.y >= limit.bottom;

    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = relativeScrollPosition.x <= limit.left;

    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    if (limit.right === 0) return false;

    const outOfRightLimit = relativeScrollPosition.x >= limit.right;

    if (outOfRightLimit) return true;
  }

  return false;
}

interface GetRelativeScrollPositionArgs {
  position: Axes;
  lastRelativePosition?: Axes;
  lastPosition?: Axes;
  limit?: Partial<Position>;
}

type GetRelativePosition = (args: GetRelativeScrollPositionArgs) => Axes;

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

const PositionService = {
  POSITION_DEFAULT,
  isOnTheRegion,
  isOutOfLimit,
  getRelativePosition,
};

export default PositionService;
