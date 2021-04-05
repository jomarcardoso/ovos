import './main.scss';
import ScrollSpy, { createScrollSpyItem } from '../scroll-spy';
import { Method } from '../types/scroll-spy.type';
import { Axis } from '../../../types/types';

ScrollSpy({
  list: [
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-1') as HTMLElement,
      elContent: document.querySelector('#slide-1') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-2') as HTMLElement,
      elContent: document.querySelector('#slide-2') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-3') as HTMLElement,
      elContent: document.querySelector('#slide-3') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-4') as HTMLElement,
      elContent: document.querySelector('#slide-4') as HTMLElement,
    }),
  ],
  elRelative: (document.querySelector(
    '#carousel ul',
  ) as HTMLElement) as HTMLElement,
  axis: Axis.X,
  method: Method.closest,
});

ScrollSpy({
  list: [
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-1') as HTMLElement,
      elContent: document.querySelector('#article-1') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-2') as HTMLElement,
      elContent: document.querySelector('#article-2') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-3') as HTMLElement,
      elContent: document.querySelector('#article-3') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-4') as HTMLElement,
      elContent: document.querySelector('#article-4') as HTMLElement,
    }),
  ],
});
