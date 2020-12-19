import { Axes, Direction } from '../../types/types';
import DirectionService from './direction.service';

describe('DirectionService', () => {
  describe('getDirection', () => {
    const { getDirection } = DirectionService;

    it('same position {4,6}: none', () => {
      const position: Axes = { x: 4, y: 6 };
      const direction = getDirection({ lastPosition: position, position });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('same position{0,0}: none', () => {
      const position: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastPosition: position, position });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('same position{1,1}: none', () => {
      const position: Axes = { x: 1, y: 1 };
      const direction = getDirection({ lastPosition: position, position });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('last {1,1} current {2,1}: right', () => {
      const lastPosition: Axes = { x: 1, y: 1 };
      const position: Axes = { x: 2, y: 1 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {3,1} current {6,1}: right', () => {
      const lastPosition: Axes = { x: 3, y: 1 };
      const position: Axes = { x: 6, y: 1 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {0,0} current {6,0}: right', () => {
      const lastPosition: Axes = { x: 0, y: 0 };
      const position: Axes = { x: 6, y: 0 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {-4,0} current {0,0}: right', () => {
      const lastPosition: Axes = { x: -4, y: 0 };
      const position: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {1,0} current {0,0}: left', () => {
      const lastPosition: Axes = { x: 1, y: 0 };
      const position: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.LEFT;

      expect(direction).toBe(expected);
    });

    it('last {4,0} current {1,0}: left', () => {
      const lastPosition: Axes = { x: 4, y: 0 };
      const position: Axes = { x: 1, y: 0 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.LEFT;

      expect(direction).toBe(expected);
    });

    it('last {0,2} current {0,10}: down', () => {
      const lastPosition: Axes = { x: 0, y: 2 };
      const position: Axes = { x: 0, y: 10 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.DOWN;

      expect(direction).toBe(expected);
    });

    it('last {8,2} current {8,10}: down', () => {
      const lastPosition: Axes = { x: 8, y: 2 };
      const position: Axes = { x: 8, y: 10 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.DOWN;

      expect(direction).toBe(expected);
    });

    it('last {8,2} current {8,-10}: up', () => {
      const lastPosition: Axes = { x: 8, y: 2 };
      const position: Axes = { x: 8, y: -10 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.UP;

      expect(direction).toBe(expected);
    });

    it('last {0,0} current {2,2}: down-right', () => {
      const lastPosition: Axes = { x: 0, y: 0 };
      const position: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.DOWN_RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {5,5} current {2,2}: up-left', () => {
      const lastPosition: Axes = { x: 5, y: 5 };
      const position: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.UP_LEFT;

      expect(direction).toBe(expected);
    });

    it('last {0,5} current {2,2}: up-right', () => {
      const lastPosition: Axes = { x: 0, y: 5 };
      const position: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.UP_RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {-2,12} current {-7,13}: down-left', () => {
      const lastPosition: Axes = { x: -2, y: 12 };
      const position: Axes = { x: -7, y: 13 };
      const direction = getDirection({ lastPosition, position });
      const expected: Direction = Direction.DOWN_LEFT;

      expect(direction).toBe(expected);
    });
  });

  describe('isOnTheSameDirection', () => {
    const { isOnTheSameDirection } = DirectionService;

    it('both down: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.DOWN,
        lastDirection: Direction.DOWN,
      });

      expect(sameDirection).toBe(true);
    });

    it('both up: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP,
        lastDirection: Direction.UP,
      });

      expect(sameDirection).toBe(true);
    });

    it('both left: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.LEFT,
        lastDirection: Direction.LEFT,
      });

      expect(sameDirection).toBe(true);
    });

    it('both right: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.RIGHT,
        lastDirection: Direction.RIGHT,
      });

      expect(sameDirection).toBe(true);
    });

    it('right left: false', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.RIGHT,
        lastDirection: Direction.LEFT,
      });

      expect(sameDirection).toBe(false);
    });

    it('up down: false', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP,
        lastDirection: Direction.DOWN,
      });

      expect(sameDirection).toBe(false);
    });

    it('up left: false', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP,
        lastDirection: Direction.LEFT,
      });

      expect(sameDirection).toBe(false);
    });

    it('up right: false', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP,
        lastDirection: Direction.RIGHT,
      });

      expect(sameDirection).toBe(false);
    });

    it('down-right right: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.DOWN_RIGHT,
        lastDirection: Direction.RIGHT,
      });

      expect(sameDirection).toBe(true);
    });

    it('up-right right: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP_RIGHT,
        lastDirection: Direction.RIGHT,
      });

      expect(sameDirection).toBe(true);
    });

    it('up-left right: false', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP_LEFT,
        lastDirection: Direction.RIGHT,
      });

      expect(sameDirection).toBe(false);
    });

    it('up-left up-left: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP_LEFT,
        lastDirection: Direction.UP_LEFT,
      });

      expect(sameDirection).toBe(true);
    });

    it('up up-left: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.UP,
        lastDirection: Direction.UP_LEFT,
      });

      expect(sameDirection).toBe(true);
    });

    it('left down-left: true', () => {
      const sameDirection = isOnTheSameDirection({
        direction: Direction.LEFT,
        lastDirection: Direction.DOWN_LEFT,
      });

      expect(sameDirection).toBe(true);
    });
  });
});
