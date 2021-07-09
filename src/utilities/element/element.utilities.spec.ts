// import { Position } from '../../types/types';
// import {
//   getScrollingEl,
//   getMaxHorizontalScroll,
//   getMaxVerticalScroll,
//   getPositionRelativeOfTheDocument,
// } from './element.utilities';

// describe('ElementUtilities', () => {
//   describe('getMaxVerticalScroll', () => {
//     it('scrollHeight = 1000; clientHeight: 200', () => {
//       const element = { ...document.createElement('div') };

//       element.scrollHeight = 1000;
//       element.clientHeight = 200;

//       const scrollTopMax = getMaxVerticalScroll(element);

//       expect(scrollTopMax).toBe(800);
//     });
//   });

//   describe('getMaxHorizontalScroll', () => {
//     it('scrollHeight = 1000; clientHeight: 200', () => {
//       const element = { ...document.createElement('div') };

//       element.scrollWidth = 1000;
//       element.clientWidth = 200;

//       const scrollTopMax = getMaxHorizontalScroll(element);

//       expect(scrollTopMax).toBe(800);
//     });
//   });

//   describe('getScrollingElement', () => {
//     it('document', () => {
//       const copyDocument = {
//         ...document,
//         scrollingElement: document.documentElement,
//       };
//       const scrollingElement = getScrollingEl(copyDocument);

//       expect(scrollingElement.tagName).toBe('HTML');
//     });

//     it('el', () => {
//       const el = document.createElement('div');
//       const scrollingElement = getScrollingEl(el);

//       expect(scrollingElement).toBe(el);
//     });

//     it('html', () => {
//       const el = document.createElement('html');
//       const scrollingElement = getScrollingEl(el);

//       expect(scrollingElement).toBe(el);
//     });
//   });

//   describe('getPositionRelativeOfTheDocument', () => {
//     const el = { ...document.createElement('div') };

//     el.offsetTop = 100;
//     el.offsetLeft = 50;
//     el.offsetHeight = 100;
//     el.offsetWidth = 100;

//     el.getBoundingClientRect = jest.fn(() => ({
//       toJSON: jest.fn(),
//       bottom: 200,
//       height: 100,
//       left: 50,
//       right: 150,
//       top: 100,
//       width: 100,
//       x: 50,
//       y: 100,
//     }));

//     global.innerHeight = 600;
//     global.innerWidth = 600;

//     it('middle of the document', () => {
//       const position = getPositionRelativeOfTheDocument(el);
//       const expected: Position = {
//         bottom: 200,
//         left: 50,
//         right: 150,
//         top: 100,
//       };

//       expect(position).toStrictEqual(expected);
//     });
//   });
// });
