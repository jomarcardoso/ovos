import { Axes } from '../../types/types';
import { isOnTheRegion, getRelativePosition } from './position.service';

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
  });
});
