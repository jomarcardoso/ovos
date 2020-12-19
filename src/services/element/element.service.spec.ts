import { getScrollingElement } from './element.service';

describe('ElementService', () => {
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
