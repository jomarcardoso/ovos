import { ScrollableElement } from '../../ovos';
import { ready } from '../../utilities/document';
import { createScrollSpyItem, scrollSpy } from './scroll-spy';
import { Method } from './scroll-spy.types';

function start(el: HTMLElement) {
  const elMenus = Array.from(
    el.querySelectorAll('[ovo-scrollspy-menu]'),
  ) as Array<HTMLElement>;

  const elContents = Array.from(
    el.querySelectorAll('[ovo-scrollspy-content]'),
  ) as Array<HTMLElement>;

  if (!elMenus) {
    console.warn('declare the scroll spy menus');

    return;
  }

  if (!elContents) {
    console.warn('declare the scroll spy contents');

    return;
  }

  const list = elContents.map((elContent, index) => {
    return createScrollSpyItem({
      elContent,
      elMenu: elMenus[index],
    });
  });

  const debounce = Number(el.getAttribute('ovo-scrollspy-debounce')) || 0;

  const elRelative =
    (el.hasAttribute('ovo-scrollspy-relative')
      ? (el as ScrollableElement)
      : (el.querySelector('[ovo-scrollspy-relative]') as ScrollableElement)) ??
    undefined;

  const method =
    (el.getAttribute('ovo-scrollspy-method') as Method) || undefined;

  scrollSpy({ list, elRelative, debounce, method });
}

function autoStart() {
  const els = Array.from(document.querySelectorAll('[ovo-scrollspy]'));

  els.forEach(start);
}

ready(autoStart);
