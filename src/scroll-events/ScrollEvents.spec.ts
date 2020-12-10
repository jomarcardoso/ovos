import {
  getMaxVerticalScroll,
  getMaxHorizontalScroll,
  getScrollingElement,
  getScrollPosition,
} from './scroll-events';

describe('ScrollEvents', () => {
  describe('getMaxVerticalScroll', () => {
    it('scrollHeight = 1000; clientHeight: 200', () => {
      const element = { ...document.createElement('div') };

      element.scrollHeight = 1000;
      element.clientHeight = 200;

      const scrollTopMax = getMaxVerticalScroll(element);

      expect(scrollTopMax).toBe(800);
    });
  });

  describe('getMaxHorizontalScroll', () => {
    it('scrollHeight = 1000; clientHeight: 200', () => {
      const element = { ...document.createElement('div') };

      element.scrollWidth = 1000;
      element.clientWidth = 200;

      const scrollTopMax = getMaxHorizontalScroll(element);

      expect(scrollTopMax).toBe(800);
    });
  });

  describe('getScrollingElement', () => {
    it('document', () => {
      const copyDocument = {
        ...document,
        scrollingElement: document.documentElement,
      };
      const scrollingElement = getScrollingElement(copyDocument);

      expect(scrollingElement.tagName).toBe('HTML');
    });

    it('el', () => {
      const el = document.createElement('div');
      const scrollingElement = getScrollingElement(el);

      expect(scrollingElement).toBe(el);
    });
  });

  describe('getScrollPosition', () => {
    it('scrollingElement: { scrollLeft: 30, scrollTop: 50 }', () => {
      const scrollingElement = { ...document.createElement('div') };

      scrollingElement.scrollLeft = 30;
      scrollingElement.scrollTop = 50;

      const scrollPosition = getScrollPosition({
        scrollingElement,
      });

      expect(scrollPosition).toEqual({ x: 30, y: 50 });
    });

    it(`
      scrollingElement: { scrollLeft: 30, scrollTop: 50 },
      relativeStart: { x: 0, y: 0 }
    `, () => {
      const scrollingElement = { ...document.createElement('div') };

      scrollingElement.scrollLeft = 30;
      scrollingElement.scrollTop = 50;

      const scrollPosition = getScrollPosition({
        scrollingElement,
        delay: {
          x: 0,
          y: 0,
        },
      });

      expect(scrollPosition).toEqual({ x: 30, y: 50 });
    });

    it(`
      scrollingElement: { scrollLeft: 30, scrollTop: 50 },
      relativeStart: { x: 10, y: 20 } be 20 30
    `, () => {
      const scrollingElement = { ...document.createElement('div') };

      scrollingElement.scrollLeft = 30;
      scrollingElement.scrollTop = 50;

      const scrollPosition = getScrollPosition({
        scrollingElement,
        delay: {
          x: 10,
          y: 20,
        },
      });

      expect(scrollPosition).toEqual({ x: 20, y: 30 });
    });

    it(`
      scrollingElement: { scrollLeft: 30, scrollTop: 50 },
      relativeStart: { x: 40, y: 70 } be zero
    `, () => {
      const scrollingElement = { ...document.createElement('div') };

      scrollingElement.scrollLeft = 30;
      scrollingElement.scrollTop = 50;

      const scrollPosition = getScrollPosition({
        scrollingElement,
        delay: {
          x: 40,
          y: 70,
        },
      });

      expect(scrollPosition).toEqual({ x: 0, y: 0 });
    });
  });
});
