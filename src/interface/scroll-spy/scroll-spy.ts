import scrollEvents from '../../api/scroll-events/scroll-events';
import { getScrollingElement } from '../../services/element/element.service';
import { Axes, Axis, Element, OnScrollArgs } from '../../types/types';

const ACTIVE_CLASS = 'is-active';

interface ScrollSpyItemArgs {
  elMenu?: HTMLElement;
  elContent?: HTMLElement;
  callback?({ active: boolean }): void;
}

export interface ScrollSpyItem {
  activate(): void;
  deActivate(): void;
  content: HTMLElement;
}

export function createScrollSpyItem({
  elMenu,
  elContent,
  callback,
}: ScrollSpyItemArgs = {}): ScrollSpyItem {
  function activate() {
    elMenu.classList.add(ACTIVE_CLASS);
    elContent.classList.add(ACTIVE_CLASS);
    if (callback) callback({ active: true });
  }

  function deActivate() {
    elMenu.classList.remove(ACTIVE_CLASS);
    elContent.classList.remove(ACTIVE_CLASS);
    if (callback) callback({ active: false });
  }

  return {
    activate,
    deActivate,
    content: elContent,
  };
}

export enum Method {
  current,
  closest,
}

interface ScrollSpyArgs {
  list: Array<ScrollSpyItem>;
  elRelative?: Element;
  method?: Method;
  axis?: Axis;
}

export default function scrollSpy({
  list,
  elRelative = document,
  method = Method.current,
  axis = Axis.Y,
}: ScrollSpyArgs): void {
  let currentActive;
  let getTheActive;
  const scrollingElement = getScrollingElement(elRelative);

  function getTheCurrent(position: Axes) {
    return list.reduce((previousValue, currentValue) => {
      const currentStart =
        axis === Axis.Y
          ? currentValue.content.offsetTop
          : currentValue.content.offsetLeft;

      if (position[axis] >= currentStart - 1) {
        return currentValue;
      }

      return previousValue;
    });
  }

  function getTheClosest(position: Axes) {
    return list.reduce((previousValue, currentValue) => {
      const previousStart =
        axis === Axis.Y
          ? previousValue.content.offsetTop - 1
          : previousValue.content.offsetLeft - 1;
      const previousEnd =
        axis === Axis.Y
          ? previousStart + previousValue.content.offsetHeight - 1
          : previousStart + previousValue.content.offsetWidth - 1;
      const currentStart =
        axis === Axis.Y
          ? currentValue.content.offsetTop + 1
          : currentValue.content.offsetLeft + 1;
      const currentEnd =
        axis === Axis.Y
          ? currentStart + currentValue.content.offsetHeight + 1
          : currentStart + currentValue.content.offsetWidth + 1;

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
  if (method === Method.closest) {
    getTheActive = getTheClosest;
  }

  function handleScroll({ scrollPosition }: OnScrollArgs) {
    const currentToActive = getTheActive(scrollPosition, list);

    if (currentToActive !== currentActive) {
      if (currentToActive.activate) currentToActive.activate();
      if (currentActive && currentActive.deActivate) currentActive.deActivate();
    }

    currentActive = currentToActive;
  }

  scrollEvents({
    el: elRelative,
    onScroll: handleScroll,
  });
}
