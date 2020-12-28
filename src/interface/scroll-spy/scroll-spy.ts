import scrollEvents from '../../api/scroll-events/scroll-events';
import { getScrollingEl } from '../../utilities/element/element.utilities';
import { Axes, Axis, Element, OnScrollArgs } from '../../types/types';
import {
  CreateScrollSpyItem,
  Method,
  ScrollSpyItem,
} from './types/scroll-spy.type';

const ACTIVE_CLASS = 'is-active';

export const createScrollSpyItem: CreateScrollSpyItem = ({
  elMenu,
  elContent,
  callback,
}) => {
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
};

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
  const scrollingElement = getScrollingEl(elRelative);

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
