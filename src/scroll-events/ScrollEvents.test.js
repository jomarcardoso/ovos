import {
  getScrollTopMax,
  getScrollLeftMax,
  getScrollingElement,
  getScrollPosition,
} from './scroll-events';

describe('ScrollEvents', () => {
  describe('getScrollTopMax', () => {
    it('scrollHeight = 1000; clientHeight: 200', () => {
      const scrollTopMax = getScrollTopMax({
        scrollHeight: 1000,
        clientHeight: 200,
      });

      expect(scrollTopMax).toBe(800);
    });
  });

  describe('getScrollLeftMax', () => {
    it('scrollHeight = 1000; clientHeight: 200', () => {
      const scrollTopMax = getScrollLeftMax({
        scrollWidth: 1000,
        clientWidth: 200,
      });

      expect(scrollTopMax).toBe(800);
    });
  });

  describe('getScrollingElement', () => {
    it('document', () => {
      const scrollingElement = getScrollingElement({
        scrollingElement: 'body',
      });

      expect(scrollingElement).toBe('body');
    });

    it('el', () => {
      const el = {};
      const scrollingElement = getScrollingElement(el);

      expect(scrollingElement).toBe(el);
    });
  });

  describe('getScrollPosition', () => {
    it('scrollingElement: { scrollLeft: 30, scrollTop: 50 }', () => {
      const scrollPosition = getScrollPosition({
        scrollingElement: {
          scrollLeft: 30,
          scrollTop: 50,
        },
      });

      expect(scrollPosition).toEqual({ x: 30, y: 50 });
    });

    it('scrollingElement: { scrollLeft: 30, scrollTop: 50 }, relativeStart: { x: 0, y: 0 }', () => {
      const scrollPosition = getScrollPosition({
        scrollingElement: {
          scrollLeft: 30,
          scrollTop: 50,
        },
        relativeStart: {
          x: 0,
          y: 0,
        },
      });

      expect(scrollPosition).toEqual({ x: 30, y: 50 });
    });

    it('scrollingElement: { scrollLeft: 30, scrollTop: 50 }, relativeStart: { x: 20, y: 30 }', () => {
      const scrollPosition = getScrollPosition({
        scrollingElement: {
          scrollLeft: 30,
          scrollTop: 50,
        },
        relativeStart: {
          x: 10,
          y: 20,
        },
      });

      expect(scrollPosition).toEqual({ x: 20, y: 30 });
    });
  });
});
