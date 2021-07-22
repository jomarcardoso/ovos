import { Axes, Direction } from './axis.types';
import {
  getDirection,
  isOnGap,
  isAboveTheScreen,
  isBelowTheScreen,
  isOnTheSameDirection,
  isOnTheRegion,
  getRelativePosition,
  isSafe,
  isOnGapOfEl,
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

  describe('isOnTheSameDirection', () => {
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

  describe('isOnGap', () => {
    it('no gap to be false', () => {
      const safe = isOnGap({
        gap: { x: 0, y: 0 },
        lastAxes: { x: 0, y: 0 },
        axes: { x: 1, y: 1 },
      });

      expect(safe).toBe(false);
    });

    it('gap 10 and moved 20 from 0 to be false', () => {
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

    it('debounce 10 and moved 20 from -10 to be false', () => {
      const safe = isOnGap({
        gap: { x: 10, y: 10 },
        lastAxes: { x: 10, y: 10 },
        axes: { x: -10, y: -10 },
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

  describe('isOnTheRegion', () => {
    it('above the region: false', () => {
      const result = isOnTheRegion({
        position: { x: 0, y: 5 },
        region: {
          bottom: 15,
          left: 0,
          right: 0,
          top: 10,
        },
      });

      expect(result).toBe(false);
    });

    it('below the region: false', () => {
      const result = isOnTheRegion({
        position: { x: 0, y: 20 },
        region: {
          bottom: 15,
          left: 0,
          right: 0,
          top: 10,
        },
      });

      expect(result).toBe(false);
    });

    it('on top of the region: true', () => {
      const result = isOnTheRegion({
        position: { x: 0, y: 10 },
        region: {
          bottom: 15,
          left: 0,
          right: 0,
          top: 10,
        },
      });

      expect(result).toBe(true);
    });

    it('on bottom of the region: true', () => {
      const result = isOnTheRegion({
        position: { x: 0, y: 15 },
        region: {
          bottom: 15,
          left: 0,
          right: 0,
          top: 10,
        },
      });

      expect(result).toBe(true);
    });

    it('on middle of the region: true', () => {
      const result = isOnTheRegion({
        position: { x: 0, y: 10 },
        region: {
          bottom: 15,
          left: 0,
          right: 0,
          top: 5,
        },
      });

      expect(result).toBe(true);
    });
  });

  describe('getRelativePosition', () => {
    it('stay on zero', () => {
      const relativePosition = getRelativePosition({
        position: { x: 0, y: 0 },
      });

      const expected: Axes = { x: 0, y: 0 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it('out of zero to {2,2}', () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
      });

      const expected: Axes = { x: 2, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it('last {2,2} to {7,10}: {5,8}', () => {
      const relativePosition = getRelativePosition({
        position: { x: 7, y: 10 },
        lastPosition: { x: 2, y: 2 },
      });

      const expected: Axes = { x: 5, y: 8 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it('last {7,10} to {2,2}: {-5,-8}', () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
      });

      const expected: Axes = { x: -5, y: -8 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it('relative to {10,10} last {7,10} to {2,2}: {5,2}', () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
      });

      const expected: Axes = { x: 5, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit right 2: {2,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { right: 2 },
      });

      const expected: Axes = { x: 2, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit right 2, bottom 2: {2,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { right: 2, bottom: 2 },
      });

      const expected: Axes = { x: 2, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit right 2, bottom 1: {2,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { right: 2, bottom: 1 },
      });

      const expected: Axes = { x: 2, y: 1 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit right 8, bottom 8: {5,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { right: 8, bottom: 8 },
      });

      const expected: Axes = { x: 5, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit right 0, bottom 0: {0,0}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { right: 0, bottom: 0 },
      });

      const expected: Axes = { x: 0, y: 0 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit left 10, bottom 0: {10,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { left: 10, bottom: 10 },
      });

      const expected: Axes = { x: 10, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit left 10, top 1: {10,2}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { left: 10, top: 1 },
      });

      const expected: Axes = { x: 10, y: 2 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit left 10, top 8: {10,8}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { left: 10, top: 8 },
      });

      const expected: Axes = { x: 10, y: 8 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit bottom 10, top 8: {5,8}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { bottom: 10, top: 8 },
      });

      const expected: Axes = { x: 5, y: 8 };

      expect(relativePosition).toStrictEqual(expected);
    });

    it(`
      relative to {10,10} last {7,10} to {2,2}
      with limit bottom 1, top 0: {5,1}
    `, () => {
      const relativePosition = getRelativePosition({
        position: { x: 2, y: 2 },
        lastPosition: { x: 7, y: 10 },
        lastRelativePosition: { x: 10, y: 10 },
        limit: { bottom: 1, top: 0 },
      });

      const expected: Axes = { x: 5, y: 1 };

      expect(relativePosition).toStrictEqual(expected);
    });
  });

  describe('isSafe', () => {
    it('no debounce to be false', () => {
      const safe = isSafe({
        debounce: { x: 0, y: 0 },
        lastPosition: { x: 0, y: 0 },
        position: { x: 1, y: 1 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 20 from 0 to be false', () => {
      const safe = isSafe({
        debounce: { x: 10, y: 10 },
        lastPosition: { x: 0, y: 0 },
        position: { x: 20, y: 20 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 22 from 10 to be false', () => {
      const safe = isSafe({
        debounce: { x: 10, y: 10 },
        lastPosition: { x: 10, y: 10 },
        position: { x: 22, y: 22 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 10 and moved 20 from 10 to be false', () => {
      const safe = isSafe({
        debounce: { x: 10, y: 10 },
        lastPosition: { x: 10, y: 10 },
        position: { x: 20, y: 20 },
      });

      expect(safe).toBe(false);
    });

    it('debounce 11 and moved 20 from 10 to be true', () => {
      const safe = isSafe({
        debounce: { x: 11, y: 11 },
        lastPosition: { x: 10, y: 10 },
        position: { x: 20, y: 20 },
      });

      expect(safe).toBe(true);
    });
  });

  describe('isOnGapOfEl el 1000px and sreen 200px', () => {
    const el = { ...document.createElement('div') };

    el.scrollHeight = 1000;
    el.clientHeight = 200;
    el.scrollWidth = 1000;
    el.clientWidth = 200;

    it('gap 0 and positon 0 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        position: { x: 0, y: 0 },
      });

      expect(onGap).toBe(false);
    });

    it('no gap and positon 0 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        position: { x: 0, y: 0 },
      });

      expect(onGap).toBe(false);
    });

    it('no gap and positon 100 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        position: { x: 100, y: 100 },
      });

      expect(onGap).toBe(false);
    });

    it('gap 0 and positon 100 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        position: { x: 100, y: 100 },
      });

      expect(onGap).toBe(false);
    });

    it('gap 10 and positon 100 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 10,
          left: 10,
          right: 10,
          top: 10,
        },
        position: { x: 100, y: 100 },
      });

      expect(onGap).toBe(false);
    });

    it('gap bottom 200 of 1000 and positon y 900 to be true', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 200,
          left: 10,
          right: 10,
          top: 10,
        },
        position: { x: 100, y: 900 },
      });

      expect(onGap).toBe(true);
    });

    it('gap bottom 200 of 1000 and positon y 100 to be true', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 200,
          left: 10,
          right: 10,
          top: 200,
        },
        position: { x: 100, y: 100 },
      });

      expect(onGap).toBe(true);
    });

    it('gap left 200 of 1000 and positon x 100 to be true', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 200,
          right: 10,
          top: 0,
        },
        position: { x: 100, y: 100 },
      });

      expect(onGap).toBe(true);
    });

    it('gap left 200 of 1000 and positon x 210 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 200,
          right: 10,
          top: 0,
        },
        position: { x: 210, y: 100 },
      });

      expect(onGap).toBe(false);
    });

    it('gap right 200 of 1000 and positon x 600 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 200,
          top: 0,
        },
        position: { x: 600, y: 100 },
      });

      expect(onGap).toBe(false);
    });

    it('gap right 200 of 1000 and positon x 900 to be true', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: 0,
          left: 0,
          right: 200,
          top: 0,
        },
        position: { x: 900, y: 100 },
      });

      expect(onGap).toBe(true);
    });
  });
});
