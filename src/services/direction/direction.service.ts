import { Axes, Direction } from '../../types/types';

interface GetDirectionArgs {
  lastPosition: Axes;
  position: Axes;
}

type GetDirection = (args: GetDirectionArgs) => Direction;

export const getDirection: GetDirection = ({ lastPosition, position }) => {
  if (lastPosition.x < position.x) {
    return Direction.RIGHT;
  }

  if (lastPosition.x > position.x) {
    return Direction.LEFT;
  }

  if (lastPosition.y < position.y) {
    return Direction.DOWN;
  }

  if (lastPosition.y > position.y) {
    return Direction.UP;
  }

  return Direction.NONE;
};

const DirectionService = {
  getDirection,
};

export default DirectionService;
