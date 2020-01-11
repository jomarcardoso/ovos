import { isNumber } from 'jo-validate';

export function getScrollTopMax(scrollingElement) {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}

export function getScrollLeftMax(scrollingElement) {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
}

export function getScrollingElement(target) {
  if (target.scrollingElement) return target.scrollingElement;

  return target;
}

export function getScrollPosition({ scrollingElement, relativeStart = { x: 0, y: 0 } }) {
  const x = scrollingElement.scrollLeft - relativeStart.x;
  const y = scrollingElement.scrollTop - relativeStart.y;

  return {
    x,
    y
  };
}

export function getRelativeScrollPosition({ lastRelativeScrollPosition, scrollPosition, lastScrollPosition, limit }) {
  let x = lastRelativeScrollPosition.x + scrollPosition.x - lastScrollPosition.x;
  let y = lastRelativeScrollPosition.y + scrollPosition.y - lastScrollPosition.y;

  if (limit) {
    if (y < limit.top) y = limit.top;
    if (y > limit.bottom) y = limit.bottom;
    if (x < limit.left) x = limit.left;
    if (x > limit.right) x = limit.right;
  }

  return {
    x,
    y
  };
}

export function getDirection({ lastScrollPosition, scrollPosition }) {
  if (lastScrollPosition.x < scrollPosition.x) {
    return 'right';
  }

  if (lastScrollPosition.x > scrollPosition.x) {
    return 'left';
  }

  if (lastScrollPosition.y < scrollPosition.y) {
    return 'down';
  }

  if (lastScrollPosition.y > scrollPosition.y) {
    return 'up';
  }

  return null;
}

export function isSafe({ scrollPosition, lastScrolledPosition, debounce }) {
  const beOnVerticalSafe = Math.abs(scrollPosition.y - lastScrolledPosition.y) < debounce.y;
  const beOnHorizontalSafe = Math.abs(scrollPosition.x - lastScrolledPosition.x) < debounce.x;

  if (beOnVerticalSafe && beOnHorizontalSafe) return true;

  return false;
}

export function isOnGap({ scrollPosition, gap, scrollingElement }) {
  const beOnTopGap = scrollPosition.y < gap.top;
  if (gap.top !== null && beOnTopGap) return true;

  const beOnBottomGap = scrollPosition.y > (getScrollTopMax(scrollingElement) - gap.bottom);
  if (gap.bottom !== null && beOnBottomGap) return true;

  const beOnLeftGap = scrollPosition.x < gap.left;
  if (gap.left !== null && beOnLeftGap) return true;

  const beOnRightGap = scrollPosition.x > (getScrollLeftMax(scrollingElement) - gap.right);
  if (gap.right !== null && beOnRightGap) return true;

  return false;
}

export function isOutOfLimit({ relativeScrollPosition, limit = {} }) {
  // console.log(limit.top, isNumber(limit.top));

  if (isNumber(limit.top)) {
    const outOfTopLimit = relativeScrollPosition.y <= limit.top;
    if (outOfTopLimit) return true;
  }

  if (isNumber(limit.bottom)) {
    const outOfBottomLimit = relativeScrollPosition.y >= limit.bottom;
    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = relativeScrollPosition.x <= limit.left;
    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    const outOfRightLimit = relativeScrollPosition.x >= limit.right;
    if (outOfRightLimit) return true;
  }

  return false;
}

export default function ScrollEvents({
  el = document,
  onScroll,
  onlyOnChangedDirection,
  onlyOnDirection,
  gap = {
    top: null,
    bottom: null,
    left: null,
    right: null
  },
  debounce = {
    x: 0,
    y: 0
  },
  limit = null,
  lazyTime = 0
} = {}) {
  const scrollingElement = getScrollingElement(el);
  let lastRelativeScrollPosition = { x: 0, y: 0 };
  let lastScrolledPosition = getScrollPosition({ scrollingElement });
  let lastScrollPosition = lastScrolledPosition;
  let lastTimeout = 0;
  let lastDirection = null;

  function handleScroll(event) {
    function isToScroll({
      changedDirection,
      scrollPosition,
      direction
    }) {
      if (onlyOnChangedDirection && !changedDirection) return false;
      if (isOnGap({ scrollPosition, gap, scrollingElement })) return false;
      if (isSafe({ scrollPosition, lastScrolledPosition, debounce })) return false;
      if (onlyOnDirection && onlyOnDirection !== direction) return false;
      if (limit && isOutOfLimit({ relativeScrollPosition: lastRelativeScrollPosition, limit })) return false;

      return true;
    }

    const scrollPosition = getScrollPosition({ scrollingElement });
    const relativeScrollPosition = getRelativeScrollPosition({ lastRelativeScrollPosition, lastScrollPosition, scrollPosition, limit });
    const direction = getDirection({ lastScrollPosition, scrollPosition });
    const changedDirection = lastDirection !== direction;
    const toScroll = isToScroll({
      changedDirection,
      scrollPosition,
      direction,
      relativeScrollPosition
    });

    const timeout = window.setTimeout(() => {
      if (onScroll && toScroll) {
        onScroll({
          event,
          scrollingElement,
          scrollPosition,
          direction,
          changedDirection,
          relativeScrollPosition
        });
      }
    }, lazyTime);

    lastDirection = direction;
    lastScrollPosition = scrollPosition;
    lastRelativeScrollPosition = relativeScrollPosition;

    if (toScroll) {
      clearTimeout(lastTimeout);
      lastTimeout = timeout;
      lastScrolledPosition = scrollPosition;
    }
  }

  function bindEvents() {
    el.addEventListener('scroll', handleScroll);
  }

  bindEvents();

  return {
    el,
    onScroll,
    onlyOnChangedDirection,
    onlyOnDirection,
    gap,
    debounce,
    lazyTime,
    lastScrolledPosition,
    scrollingElement
  };
}
