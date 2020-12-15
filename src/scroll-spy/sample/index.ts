import './main.scss';
import ScrollSpy, { createScrollSpyItem, Method } from '../scroll-spy';
import { Axis } from '../../types/types';

ScrollSpy({
  list: [
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-1'),
      elContent: document.querySelector('#slide-1'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-2'),
      elContent: document.querySelector('#slide-2'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-3'),
      elContent: document.querySelector('#slide-3'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-slide-4'),
      elContent: document.querySelector('#slide-4'),
    }),
  ],
  elRelative: document.querySelector('#carousel ul') as HTMLElement,
  axis: Axis.X,
  method: Method.closest,
});

ScrollSpy({
  list: [
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-1'),
      elContent: document.querySelector('#article-1'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-2'),
      elContent: document.querySelector('#article-2'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-3'),
      elContent: document.querySelector('#article-3'),
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-4'),
      elContent: document.querySelector('#article-4'),
    }),
  ],
});
