import ElementService from './element.service';

describe('ElementService', () => {
  describe('getScrollingElement', () => {
    const { getScrollingElement } = ElementService;
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
});
