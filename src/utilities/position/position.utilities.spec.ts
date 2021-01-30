import { Axes } from '../../types/types';
import {
  isOnTheRegion,
  getRelativePosition,
  isOutOfLimit,
  isAboveTheScreen,
  isBelowTheScreen,
  isOnGapOfEl,
} from './position.utilities';

describe('PositionService', () => {
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

  describe('isOutOfLimit', () => {
    it('with no limit {0,0}: false', () => {
      const result = isOutOfLimit({ position: { x: 0, y: 0 } });

      expect(result).toBe(false);
    });

    it('with no limit {2,10}: false', () => {
      const result = isOutOfLimit({ position: { x: 2, y: 10 } });

      expect(result).toBe(false);
    });

    it('with no limit {-2,-7}: false', () => {
      const result = isOutOfLimit({ position: { x: -2, y: -7 } });

      expect(result).toBe(false);
    });

    it('position {2,2} limit {top:0}: false', () => {
      const result = isOutOfLimit({
        position: { x: 2, y: 2 },
        limit: {
          top: 0,
        },
      });

      expect(result).toBe(false);
    });

    it('position {2,2} limit {top:2}: false', () => {
      const result = isOutOfLimit({
        position: { x: 2, y: 2 },
        limit: {
          top: 2,
        },
      });

      expect(result).toBe(false);
    });

    it('position {2,2} limit {top:3}: true', () => {
      const result = isOutOfLimit({
        position: { x: 2, y: 2 },
        limit: {
          top: 3,
        },
      });

      expect(result).toBe(true);
    });

    it('position {2,2} limit {top:2, bottom:2}: false', () => {
      const result = isOutOfLimit({
        position: { x: 2, y: 2 },
        limit: {
          top: 2,
          bottom: 2,
        },
      });

      expect(result).toBe(false);
    });

    it('position {2,3} limit {top:2, bottom:2}: true', () => {
      const result = isOutOfLimit({
        position: { x: 2, y: 3 },
        limit: {
          top: 2,
          bottom: 2,
        },
      });

      expect(result).toBe(true);
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
          bottom: null,
          left: null,
          right: null,
          top: null,
        },
        position: { x: 0, y: 0 },
      });

      expect(onGap).toBe(false);
    });

    it('no gap and positon 100 to be false', () => {
      const onGap = isOnGapOfEl({
        el,
        gap: {
          bottom: null,
          left: null,
          right: null,
          top: null,
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
  });
});
