const ACTIVE_CLASS = 'is-active';

interface ScrollSpyItemArgs {
  menu?: string;
  content?: string;
  callback?: string;
}

export function ScrollSpyItem({
  menu,
  content,
  callback,
}: ScrollSpyItemArgs = {}) {
  function activate() {
    menu.classList.add(ACTIVE_CLASS);
    content.classList.add(ACTIVE_CLASS);
    if (callback) callback({ active: true });
  }

  function deActivate() {
    menu.classList.remove(ACTIVE_CLASS);
    content.classList.remove(ACTIVE_CLASS);
    if (callback) callback({ active: false });
  }

  return {
    activate,
    deActivate,
    content,
  };
}

/**
 * @param {Array<>} list
 */
export default function (
  list,
  { elRelative = document.body, method = 'current', axis = 'y' } = {},
) {
  let currentActive;
  let getTheActive;
  const elHtml = document.querySelector('html');

  function isDocumentScrolling() {
    return elRelative.tagName === 'BODY' || elRelative.tagName === 'HTML';
  }

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

      const middleScrolled = Math.abs(position + elRelative.offsetWidth / 2);

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

  function onScroll() {
    function getPositions() {
      if (isDocumentScrolling()) {
        if (axis === 'y') {
          return elRelative.scrollTop + elHtml.scrollTop;
        }

        return elRelative.scrollLeft + elHtml.scrollLeft;
      }

      if (axis === 'y') {
        return elRelative.scrollTop;
      }

      return elRelative.scrollLeft;
    }
    const position = getPositions();

    const currentToActive = getTheActive(position, list);

    if (currentToActive !== currentActive) {
      if (currentToActive.activate) currentToActive.activate();
      if (currentActive && currentActive.deActivate) currentActive.deActivate();
    }

    currentActive = currentToActive;
  }

  function getScrolledElement() {
    let scrolledElement: HTMLElement = elRelative;

    if (isDocumentScrolling()) scrolledElement = window.body;

    return scrolledElement;
  }

  function bindScroll() {
    getScrolledElement().addEventListener('scroll', onScroll);
  }

  function destroy() {
    getScrolledElement().removeEventListener('scroll', onScroll);
  }

  onScroll();
  bindScroll();

  return {
    destroy,
  };
}
