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
  });
});
