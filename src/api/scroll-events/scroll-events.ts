import { ScrollEvents } from './types/scroll-events.types';
import { getScrollPosition } from '../../utilities/scroll/scroll.service';
import { getScrollingEl } from '../../utilities/element/element.utilities';
import {
  getDirection,
  isOnTheSameDirection,
} from '../../utilities/direction/direction.service';
import {
  POSITION_DEFAULT,
  isOnTheRegion,
  isOutOfLimit,
  getRelativePosition,
  isSafe,
  isOnGap,
} from '../../utilities/position/position.service';
import { getScrollViewPosition } from '../../utilities/view/view.service';

const scrollEvents: ScrollEvents = ({
  el = document,
  onScroll,
  onlyOnChangedDirection = false,
  onlyOnDirection = null,
  onlyOnWhenInOrOutTheRegion = {
    bottom: null,
    left: null,
    right: null,
    top: null,
  },
  delay = {
    x: 0,
    y: 0,
  },
  gap = POSITION_DEFAULT,
  debounce = {
    x: 0,
    y: 0,
  },
  limit = POSITION_DEFAULT,
  lazyTime = 0,
}) => {
  const scrollingElement = getScrollingEl(el as HTMLElement & HTMLDocument);
  let lastRelativeScrollPosition = { x: 0, y: 0 };
  let lastScrolledPosition = getScrollPosition({ scrollingElement, delay });
  let lastScrollPosition = lastScrolledPosition;
  let lastTimeout = 0;
  let lastDirection = null;
  let lastOnTheRegion = false;

  function handleScroll(event) {
    function isToScroll({ changedDirection, scrollPosition, direction }) {
      if (onlyOnChangedDirection && !changedDirection) return false;
      if (isOnGap({ position: scrollPosition, gap, el: scrollingElement }))
        return false;
      if (
        isSafe({
          position: scrollPosition,
          lastPosition: lastScrolledPosition,
          debounce,
        })
      ) {
        return false;
      }
      if (onlyOnDirection && onlyOnDirection !== direction) return false;

      if (onlyOnWhenInOrOutTheRegion) {
        const onTheRegion = isOnTheRegion({
          position: scrollPosition,
          region: onlyOnWhenInOrOutTheRegion,
        });

        if (onTheRegion && lastOnTheRegion) return false;
        if (onTheRegion && !lastOnTheRegion) return false;

        lastOnTheRegion = onTheRegion;
      }

      const outOfLimit = isOutOfLimit({
        position: lastRelativeScrollPosition,
        limit,
      });

      if (limit && outOfLimit) {
        return false;
      }

      return true;
    }

    const scrollPosition = getScrollPosition({ scrollingElement, delay });
    const relativeScrollPosition = getRelativePosition({
      lastRelativePosition: lastRelativeScrollPosition,
      lastPosition: lastScrollPosition,
      position: scrollPosition,
      limit,
    });
    const direction = getDirection({
      lastPosition: lastScrollPosition,
      position: scrollPosition,
    });
    const changedDirection = !isOnTheSameDirection({
      direction,
      lastDirection,
    });
    const toScroll = isToScroll({
      changedDirection,
      scrollPosition,
      direction,
    });
    const scrollViewPosition = getScrollViewPosition(scrollPosition);

    const timeout = window.setTimeout(() => {
      if (onScroll && toScroll) {
        onScroll({
          event,
          scrollingElement,
          scrollPosition,
          direction,
          changedDirection,
          relativeScrollPosition,
          scrollViewPosition,
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
    scrollingElement,
  };
};

export default scrollEvents;
