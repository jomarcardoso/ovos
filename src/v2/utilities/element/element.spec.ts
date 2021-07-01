import {
  getScrollingEl,
  getScrollPosition,
  getMaxHorizontalScroll,
  getMaxVerticalScroll,
  // isOutOfLimit,
} from './element';

describe('element utilities', () => {
  describe('getScrollingElement', () => {
    it('document', () => {
      const copyDocument = {
        ...document,
        scrollingElement: document.documentElement,
      };
      const scrollingElement = getScrollingEl(copyDocument);

      expect(scrollingElement.tagName).toBe('HTML');
    });

    it('el', () => {
      const el = document.createElement('div');
      const scrollingElement = getScrollingEl(el);

      expect(scrollingElement).toBe(el);
    });

    it('html', () => {
      const el = document.createElement('html');
      const scrollingElement = getScrollingEl(el);

      expect(scrollingElement).toBe(el);
    });
  });

  describe('getScrollPosition', () => {
    it('scrollingElement: { scrollLeft: 30, scrollTop: 50 }', () => {
      const scrollingElement = { ...document.createElement('div') };

      scrollingElement.scrollLeft = 30;
      scrollingElement.scrollTop = 50;

      const scrollPosition = getScrollPosition({
        el: scrollingElement,
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
        el: scrollingElement,
        variation: {
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
        el: scrollingElement,
        variation: {
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
        el: scrollingElement,
        variation: {
          x: 40,
          y: 70,
        },
      });

      expect(scrollPosition).toEqual({ x: 0, y: 0 });
    });
  });

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

  describe('isOutOfLimit', () => {
    // it('position {2,2} limit {top:0}: false', () => {
    //   const result = isOutOfLimit({
    //     axes: { x: 2, y: 2 },
    //     limit: {
    //       top: 0,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {2,2} limit {top:2}: false', () => {
    //   const result = isOutOfLimit({
    //     axes: { x: 2, y: 2 },
    //     limit: {
    //       top: 2,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {2,2} limit {top:3}: true', () => {
    //   const result = isOutOfLimit({
    //     axes: { x: 2, y: 2 },
    //     limit: {
    //       top: 3,
    //     },
    //   });
    //   expect(result).toBe(true);
    // });
    // it('position {2,2} limit {top:2, bottom:2}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 2, y: 2 },
    //     limit: {
    //       top: 2,
    //       bottom: 2,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {2,3} limit {top:2, bottom:2}: true', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 2, y: 3 },
    //     limit: {
    //       top: 2,
    //       bottom: 2,
    //     },
    //   });
    //   expect(result).toBe(true);
    // });
    // it('position {2,3} limit {left:2, bottom:10}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 2, y: 3 },
    //     limit: {
    //       left: 2,
    //       bottom: 10,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {2,3} limit {left:3, bottom:10}: true', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 2, y: 3 },
    //     limit: {
    //       left: 3,
    //       bottom: 10,
    //     },
    //   });
    //   expect(result).toBe(true);
    // });
    // it('position {8,3} limit {left:3, right:10}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 8, y: 3 },
    //     limit: {
    //       left: 3,
    //       right: 10,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {18,3} limit {left:3, right:10}: true', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 18, y: 3 },
    //     limit: {
    //       left: 3,
    //       right: 10,
    //     },
    //   });
    //   expect(result).toBe(true);
    // });
    // it('position {18,20} limit {bottom: 10}: true', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 18, y: 20 },
    //     limit: {
    //       bottom: 10,
    //     },
    //   });
    //   expect(result).toBe(true);
    // });
    // it('position {18,10} limit {bottom: 20}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 18, y: 10 },
    //     limit: {
    //       bottom: 20,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {18,10} limit {bottom: 0}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 18, y: 10 },
    //     limit: {
    //       bottom: 0,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
    // it('position {18,10} limit {right: 0}: false', () => {
    //   const result = isOutOfLimit({
    //     position: { x: 18, y: 10 },
    //     limit: {
    //       right: 0,
    //     },
    //   });
    //   expect(result).toBe(false);
    // });
  });
});
