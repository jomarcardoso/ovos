import { isOnTheRegion } from './position.service';

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
});
