import { scroll, Scroll$ } from '../../api/scroll';
import { getScrollParent } from '../../utilities/element';
import { Axes, Axis } from '../../utilities/axis';
import { IS_NODE_JS } from '../../utilities/document';
import { ScrollableElement } from '../../utilities/scroll';
import {
  CreateScrollSpyItem,
  Method,
  ScrollSpyItem,
  ScrollSpyItemArgs,
} from './scrollspy.types';

const ACTIVE_CLASS = 'ovo-active';

export const createScrollspyItem: CreateScrollSpyItem = ({
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

interface ScrollspyArgs {
  list: Array<ScrollSpyItem> | Array<ScrollSpyItemArgs>;
  elRelative?: ScrollableElement;
  method?: Method;
  axis?: Axis;
  debounce?: number;
}

export function scrollspy({
  list: rawList,
  elRelative = !IS_NODE_JS ? document : undefined,
  method = 'CURRENT',
  axis = 'y',
  debounce = 0,
}: ScrollspyArgs): void {
  if (!elRelative || !rawList.length) return;

  let scrollingElement = elRelative;
  const list = rawList.map<ScrollSpyItem>((item) =>
    typeof item !== 'function'
      ? createScrollspyItem(item as ScrollSpyItemArgs)
      : (item as unknown as ScrollSpyItem),
  );

  if (elRelative instanceof Document && list[0].content) {
    scrollingElement = getScrollParent(list[0].content) || document;
  }

  let currentActive: ScrollSpyItem;
  let getTheActive: (
    postion: Axes,
    scrollingElement: HTMLElement,
  ) => ScrollSpyItem;

  function getTheCurrent(position: Axes): ScrollSpyItem {
    return list.reduce((previousValue, currentValue) => {
      const currentStart =
        axis === 'y'
          ? (currentValue?.content?.offsetTop ?? 0)
          : (currentValue?.content?.offsetLeft ?? 0);

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
          ? (previousValue?.content?.offsetTop ?? 0 - 1)
          : (previousValue?.content?.offsetLeft ?? 0 - 1);
      const previousEnd =
        axis === 'y'
          ? (previousValue?.content?.offsetHeight ?? 0 + previousStart - 1)
          : (previousValue?.content?.offsetWidth ?? 0 + previousStart - 1);
      const currentStart =
        axis === 'y'
          ? (currentValue?.content?.offsetTop ?? 0 + 1)
          : (currentValue?.content?.offsetLeft ?? 0 + 1);
      const currentEnd =
        axis === 'y'
          ? (currentValue?.content?.offsetHeight ?? 0 + currentStart + 1)
          : (currentValue?.content?.offsetWidth ?? 0 + currentStart + 1);

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
            ? (currentValue?.content?.offsetTop ?? 0)
            : (currentValue?.content?.offsetLeft ?? 0);

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
    el: scrollingElement,
    debounce,
  });

  observable.subscribe(handleScroll);
  scrollingElement.dispatchEvent(new Event('scroll'));
}

/** @deprecated use ScrollspyArgs instead. */
export type ScrollSpyArgs = ScrollspyArgs;

/** @deprecated use createScrollspyItem instead. */
export const createScrollSpyItem = createScrollspyItem;

/** @deprecated use scrollspy instead. */
export const scrollSpy = scrollspy;
