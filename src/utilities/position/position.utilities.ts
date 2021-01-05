import isNumber from 'lodash/isNumber';
import { Position } from '../../types/types';
import {
  getMaxHorizontalScroll,
  getMaxVerticalScroll,
} from '../element/element.utilities';
import { getViewportHeight } from '../view/view.utilities';
import {
  IsOnTheRegion,
  IsOutOfLimit,
  GetRelativePosition,
  IsSafe,
  IsOnGap,
} from './types/position.utilities';

export const POSITION_DEFAULT: Position = {
  bottom: null,
  left: null,
  right: null,
  top: null,
};

export const isOnTheRegion: IsOnTheRegion = ({ region, position }) => {
  const onBelowTheTop = position.y >= region.top;
  const onAboveTheBottom = position.y <= region.bottom;

  return onBelowTheTop && onAboveTheBottom;
};

export const isOutOfLimit: IsOutOfLimit = ({
  position,
  limit = POSITION_DEFAULT,
}) => {
  if (isNumber(limit.top)) {
    const outOfTopLimit = position.y < limit.top;

    if (outOfTopLimit) return true;
  }

  if (isNumber(limit.bottom)) {
    if (limit.bottom === 0) return false;

    const outOfBottomLimit = position.y > limit.bottom;

    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = position.x < limit.left;

    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    if (limit.right === 0) return false;

    const outOfRightLimit = position.x > limit.right;

    if (outOfRightLimit) return true;
  }

  return false;
};

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

export const isSafe: IsSafe = ({ position, lastPosition, debounce }) => {
  const beOnVerticalSafe = Math.abs(position.y - lastPosition.y) < debounce.y;
  const beOnHorizontalSafe = Math.abs(position.x - lastPosition.x) < debounce.x;

  if (beOnVerticalSafe && beOnHorizontalSafe) return true;

  return false;
};

export const isOnGap: IsOnGap = ({ position, gap, el }) => {
  const beOnTopGap = position.y < gap.top;

  if (gap.top !== null && beOnTopGap) return true;

  const beOnBottomGap = position.y > getMaxVerticalScroll(el) - gap.bottom;

  if (gap.bottom !== null && beOnBottomGap) return true;

  const beOnLeftGap = position.x < gap.left;

  if (gap.left !== null && beOnLeftGap) return true;

  const beOnRightGap = position.x > getMaxHorizontalScroll(el) - gap.right;

  if (gap.right !== null && beOnRightGap) return true;

  return false;
};

export function isAboveTheScreen(position: number): boolean {
  return position < 0;
}

export function isBelowTheScreen(position: number): boolean {
  return position > getViewportHeight();
}

const PositionService = {
  POSITION_DEFAULT,
  isAboveTheScreen,
  isOnTheRegion,
  isOutOfLimit,
  getRelativePosition,
  isOnGap,
};

export default PositionService;
