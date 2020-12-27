import {
  getScrollingElement,
  getMaxHorizontalScroll,
  getMaxVerticalScroll,
} from './element.service';

describe('ElementService', () => {
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

    it('html', () => {
      const el = document.createElement('html');
      const scrollingElement = getScrollingElement(el);

      expect(scrollingElement).toBe(el);
    });
  });
});
