import { Axes, Direction } from '../../types/types';

export function getDirection({
  lastScrollPosition,
  scrollPosition,
}: {
  lastScrollPosition: Axes;
  scrollPosition: Axes;
}): Direction {
  if (lastScrollPosition.x < scrollPosition.x) {
    return Direction.RIGHT;
  }

  if (lastScrollPosition.x > scrollPosition.x) {
    return Direction.LEFT;
  }

  if (lastScrollPosition.y < scrollPosition.y) {
    return Direction.DOWN;
  }

  if (lastScrollPosition.y > scrollPosition.y) {
    return Direction.UP;
  }

  return Direction.NONE;
}

const DirectionService = {
  getDirection,
};

export default DirectionService;
