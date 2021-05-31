import { Axes, Direction } from './axis.types';

interface GetDirectionArgs {
  lastAxes: Axes;
  axes: Axes;
}

type GetDirection = (args: GetDirectionArgs) => Direction;

export const getDirection: GetDirection = ({ lastAxes, axes }) => {
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
};

interface IsOnGapArgs {
  axes: Axes;
  lastAxes: Axes;
  gap: Partial<Axes>;
}

type IsOnGap = (args: IsOnGapArgs) => boolean;

export const isOnGap: IsOnGap = ({ axes, lastAxes, gap }) => {
  const beOnVerticalGap = gap.y
    ? Math.abs(axes.y - lastAxes.y) < (gap.y ?? 0)
    : false;
  const beOnHorizontalGap = gap.x
    ? Math.abs(axes.x - lastAxes.x) < (gap.x ?? 0)
    : false;

  if (beOnVerticalGap || beOnHorizontalGap) return true;

  return false;
};
