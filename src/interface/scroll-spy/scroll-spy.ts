import { scroll, Scroll$ } from '../../api/scroll';
import { Axes, Axis } from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';
import { CreateScrollSpyItem, Method, ScrollSpyItem } from './scroll-spy.types';

const isNodeJS = typeof window === 'undefined';
const ACTIVE_CLASS = 'is-active';

export const createScrollSpyItem: CreateScrollSpyItem = ({
  elMenu,
  elContent,
  callback,
}) => {
  function activate() {
    if (!elMenu || !elContent) return;

    elMenu.classList.add(ACTIVE_CLASS);
    elContent.classList.add(ACTIVE_CLASS);
    if (callback) callback({ active: true });
  }

  function deActivate() {
    if (!elMenu || !elContent) return;

    elMenu.classList.remove(ACTIVE_CLASS);
    elContent.classList.remove(ACTIVE_CLASS);
    if (callback) callback({ active: false });
  }

  return {
    activate,
    deActivate,
    content: elContent,
  };
};

interface ScrollSpyArgs {
  list: Array<ScrollSpyItem>;
  elRelative?: ScrollableElement;
  method?: Method;
  axis?: Axis;
  debounce?: number;
}

export function scrollSpy({
  list,
  elRelative = !isNodeJS ? document : undefined,
  method = 'CURRENT',
  axis = 'y',
  debounce = 0,
}: ScrollSpyArgs): void {
  if (!elRelative) return;

  let currentActive: ScrollSpyItem;
  let getTheActive: (
    postion: Axes,
    scrollingElement: HTMLElement,
  ) => ScrollSpyItem;

  function getTheCurrent(position: Axes): ScrollSpyItem {
    return list.reduce((previousValue, currentValue) => {
      const currentStart =
        axis === 'y'
          ? currentValue?.content?.offsetTop ?? 0
          : currentValue?.content?.offsetLeft ?? 0;

      if (Math.round(position[axis]) >= Math.round(currentStart)) {
        return currentValue;
      }

      return previousValue;
    });
  }

  function getTheClosest(
    position: Axes,
    scrollingElement: HTMLElement,
  ): ScrollSpyItem {
    return list.reduce((previousValue, currentValue) => {
      const previousStart =
        axis === 'y'
          ? previousValue?.content?.offsetTop ?? 0 - 1
          : previousValue?.content?.offsetLeft ?? 0 - 1;
      const previousEnd =
        axis === 'y'
          ? previousValue?.content?.offsetHeight ?? 0 + previousStart - 1
          : previousValue?.content?.offsetWidth ?? 0 + previousStart - 1;
      const currentStart =
        axis === 'y'
          ? currentValue?.content?.offsetTop ?? 0 + 1
          : currentValue?.content?.offsetLeft ?? 0 + 1;
      const currentEnd =
        axis === 'y'
          ? currentValue?.content?.offsetHeight ?? 0 + currentStart + 1
          : currentValue?.content?.offsetWidth ?? 0 + currentStart + 1;

      const middleScrolled = Math.abs(
        position[axis] + scrollingElement.offsetWidth / 2,
      );

      const previousProximityStart = Math.abs(middleScrolled - previousStart);
      const previousProximityEnd = Math.abs(middleScrolled - previousEnd);
      const currentProximityStart = Math.abs(middleScrolled - currentStart);
      const currentProximityEnd = Math.abs(middleScrolled - currentEnd);

      const previousStartNearThanCurrentStart =
        previousProximityStart < currentProximityStart;
      const previousStartNearThanCurrentEnd =
        previousProximityStart < currentProximityEnd;
      const previesStartNearThanCurrent =
        previousStartNearThanCurrentStart && previousStartNearThanCurrentEnd;

      const previousEndNearThanCurrentStart =
        previousProximityEnd < currentProximityEnd;
      const previousEndNearThanCurrentEnd =
        previousProximityEnd < currentProximityStart;
      const previesEndNearThanCurrent =
        previousEndNearThanCurrentStart && previousEndNearThanCurrentEnd;

      if (previesStartNearThanCurrent || previesEndNearThanCurrent) {
        return previousValue;
      }

      return currentValue;
    });
  }

  getTheActive = getTheCurrent;
  if (method === 'CLOSEST') {
    getTheActive = getTheClosest;
  }

  if (method === 'EXACT') {
    getTheActive = (position: Axes) => {
      const oi = list.reduce((previousValue, currentValue) => {
        const currentStart =
          axis === 'y'
            ? currentValue?.content?.offsetTop ?? 0
            : currentValue?.content?.offsetLeft ?? 0;

        if (Math.round(position[axis]) === Math.round(currentStart)) {
          return currentValue;
        }

        return previousValue;
      }, currentActive);

      return oi;
    };
  }

  function handleScroll({ axes, el: scrollingElement }: Scroll$) {
    const currentToActive = getTheActive(axes, scrollingElement);

    if (currentToActive !== currentActive) {
      if (currentToActive.activate) currentToActive.activate();
      if (currentActive && currentActive.deActivate) currentActive.deActivate();
    }

    currentActive = currentToActive;
  }

  const observable = scroll({
    el: elRelative,
    debounce,
  });

  observable.subscribe(handleScroll);
  elRelative.dispatchEvent(new Event('scroll'));
}

function autoStart() {
  if (typeof document === 'undefined') return;

  const el = document.querySelector('[data-ovo-scroll-spy][data-ovo-auto]');

  if (!el) return;

  const elMenus = Array.from(
    el.querySelectorAll('[data-ovo-scroll-spy-menu]'),
  ) as Array<HTMLElement>;
  const elContents = Array.from(
    el.querySelectorAll('[data-ovo-scroll-spy-content]'),
  ) as Array<HTMLElement>;

  const list = elContents.map((elContent, index) => {
    return createScrollSpyItem({
      elContent,
      elMenu: elMenus[index],
    });
  });

  const debounce = Number(el.getAttribute('data-ovo-scroll-spy-debounce')) || 0;

  const elRelative =
    (el.hasAttribute('data-ovo-scroll-spy-relative')
      ? (el as ScrollableElement)
      : (el.querySelector(
          '[data-ovo-scroll-spy-relative]',
        ) as ScrollableElement)) ?? undefined;

  const method =
    (el.getAttribute('data-ovo-scroll-spy-method') as Method) || undefined;

  scrollSpy({ list, elRelative, debounce, method });
}

autoStart();
