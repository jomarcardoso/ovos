import { Axes, Direction } from './axis.types';
import {
  getDirection,
  isOnGap,
  isAboveTheScreen,
  isBelowTheScreen,
} from './axis';

describe('DirectionService', () => {
  describe('getDirection', () => {
    it('same position {4,6}: none', () => {
      const axes: Axes = { x: 4, y: 6 };
      const direction = getDirection({ lastAxes: axes, axes });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('same position{0,0}: none', () => {
      const axes: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastAxes: axes, axes });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('same position{1,1}: none', () => {
      const axes: Axes = { x: 1, y: 1 };
      const direction = getDirection({ lastAxes: axes, axes });
      const expected: Direction = Direction.NONE;

      expect(direction).toBe(expected);
    });

    it('last {1,1} current {2,1}: right', () => {
      const lastAxes: Axes = { x: 1, y: 1 };
      const axes: Axes = { x: 2, y: 1 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {3,1} current {6,1}: right', () => {
      const lastAxes: Axes = { x: 3, y: 1 };
      const axes: Axes = { x: 6, y: 1 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {0,0} current {6,0}: right', () => {
      const lastAxes: Axes = { x: 0, y: 0 };
      const axes: Axes = { x: 6, y: 0 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {-4,0} current {0,0}: right', () => {
      const lastAxes: Axes = { x: -4, y: 0 };
      const axes: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {1,0} current {0,0}: left', () => {
      const lastAxes: Axes = { x: 1, y: 0 };
      const axes: Axes = { x: 0, y: 0 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.LEFT;

      expect(direction).toBe(expected);
    });

    it('last {4,0} current {1,0}: left', () => {
      const lastAxes: Axes = { x: 4, y: 0 };
      const axes: Axes = { x: 1, y: 0 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.LEFT;

      expect(direction).toBe(expected);
    });

    it('last {0,2} current {0,10}: down', () => {
      const lastAxes: Axes = { x: 0, y: 2 };
      const axes: Axes = { x: 0, y: 10 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.DOWN;

      expect(direction).toBe(expected);
    });

    it('last {8,2} current {8,10}: down', () => {
      const lastAxes: Axes = { x: 8, y: 2 };
      const axes: Axes = { x: 8, y: 10 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.DOWN;

      expect(direction).toBe(expected);
    });

    it('last {8,2} current {8,-10}: up', () => {
      const lastAxes: Axes = { x: 8, y: 2 };
      const axes: Axes = { x: 8, y: -10 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.UP;

      expect(direction).toBe(expected);
    });

    it('last {0,0} current {2,2}: down-right', () => {
      const lastAxes: Axes = { x: 0, y: 0 };
      const axes: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.DOWN_RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {5,5} current {2,2}: up-left', () => {
      const lastAxes: Axes = { x: 5, y: 5 };
      const axes: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.UP_LEFT;

      expect(direction).toBe(expected);
    });

    it('last {0,5} current {2,2}: up-right', () => {
      const lastAxes: Axes = { x: 0, y: 5 };
      const axes: Axes = { x: 2, y: 2 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.UP_RIGHT;

      expect(direction).toBe(expected);
    });

    it('last {-2,12} current {-7,13}: down-left', () => {
      const lastAxes: Axes = { x: -2, y: 12 };
      const axes: Axes = { x: -7, y: 13 };
      const direction = getDirection({ lastAxes, axes });
      const expected: Direction = Direction.DOWN_LEFT;

      expect(direction).toBe(expected);
    });
  });

  describe('isOnGap', () => {
    it('no debounce to be false', () => {
      const safe = isOnGap({
        gap: { x: 0, y: 0 },
        lastAxes: { x: 0, y: 0 },
        axes: { x: 1, y: 1 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 20 from 0 to be false', () => {
      const safe = isOnGap({
        gap: { x: 10, y: 10 },
        lastAxes: { x: 0, y: 0 },
        axes: { x: 20, y: 20 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 22 from 10 to be false', () => {
      const safe = isOnGap({
        gap: { x: 10, y: 10 },
        lastAxes: { x: 10, y: 10 },
        axes: { x: 22, y: 22 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 20 from 10 to be false', () => {
      const safe = isOnGap({
        gap: { x: 10, y: 10 },
        lastAxes: { x: 10, y: 10 },
        axes: { x: 20, y: 20 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 11 and moved 20 from 10 to be true', () => {
      const safe = isOnGap({
        gap: { x: 11, y: 11 },
        lastAxes: { x: 10, y: 10 },
        axes: { x: 20, y: 20 },
      });

      expect(safe).toBe(true);
    });
  });

  describe('isAboveTheScreen', () => {
    it('position -5 is true', () => {
      expect(isAboveTheScreen(-5)).toBe(true);
    });

    it('position 0 is false', () => {
      expect(isAboveTheScreen(0)).toBe(false);
    });

    it('position 2 is false', () => {
      expect(isAboveTheScreen(2)).toBe(false);
    });
  });

  describe('isBelowTheScreen', () => {
    global.innerHeight = 768;

    it('position 0 is not below the screen 768px', () => {
      expect(isBelowTheScreen(0)).toBe(false);
    });

    it('position -10 is not below the screen 768px', () => {
      expect(isBelowTheScreen(-10)).toBe(false);
    });

    it('position 400 is not below the screen 768px', () => {
      expect(isBelowTheScreen(400)).toBe(false);
    });

    it('position 768 is not below the screen 768px', () => {
      expect(isBelowTheScreen(768)).toBe(false);
    });

    it('position 769 is below the screen 768px', () => {
      expect(isBelowTheScreen(769)).toBe(true);
    });

    it('position 1000 is below the screen 768px', () => {
      expect(isBelowTheScreen(1000)).toBe(true);
    });
  });
});
