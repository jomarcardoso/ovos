import scrollEvents, {
  getScrollingElement,
} from '../scroll-events/scroll-events';

const ACTIVE_CLASS = 'is-active';

interface ScrollSpyItemArgs {
  elMenu?: HTMLElement;
  elContent?: HTMLElement;
  callback?({ active: boolean }): void;
}

export function ScrollSpyItem({
  elMenu,
  elContent,
  callback,
}: ScrollSpyItemArgs = {}) {
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

export default function (
  list,
  { elRelative = document, method = 'current', axis = 'y' } = {},
) {
  let currentActive;
  let getTheActive;
  const elHtml = document.querySelector('html');
  const scrollingElement = getScrollingElement(elRelative);

  function getTheCurrent(position) {
    return list.reduce((previousValue, currentValue) => {
      const currentStart =
        axis === 'y'
          ? currentValue.content.offsetTop
          : currentValue.content.offsetLeft;

      if (position >= currentStart - 1) {
        return currentValue;
      }

      return previousValue;
    });
  }

  function getTheClosest(position) {
    return list.reduce((previousValue, currentValue) => {
      const previousStart =
        axis === 'y'
          ? previousValue.content.offsetTop - 1
          : previousValue.content.offsetLeft - 1;
      const previousEnd =
        axis === 'y'
          ? previousStart + previousValue.content.offsetHeight - 1
          : previousStart + previousValue.content.offsetWidth - 1;
      const currentStart =
        axis === 'y'
          ? currentValue.content.offsetTop + 1
          : currentValue.content.offsetLeft + 1;
      const currentEnd =
        axis === 'y'
          ? currentStart + currentValue.content.offsetHeight + 1
          : currentStart + currentValue.content.offsetWidth + 1;

      const middleScrolled = Math.abs(
        position + scrollingElement.offsetWidth / 2,
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
  if (method === 'closest') {
    getTheActive = getTheClosest;
  }

  function handleScroll() {
    function getPositions() {
      if (axis === 'y') {
        return scrollingElement.scrollTop + elHtml.scrollTop;
      }

      return scrollingElement.scrollLeft + elHtml.scrollLeft;
    }

    const position = getPositions();

    const currentToActive = getTheActive(position, list);

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
