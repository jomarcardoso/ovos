import isNumber from 'lodash/isNumber';
import {
  Axes,
  Direction,
  Element,
  Position,
  OnScrollArgs,
} from '../types/types';

const POSITION_DEFAULT: Position = {
  bottom: null,
  left: null,
  right: null,
  top: null,
};

export function getMaxVerticalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}

export function getMaxHorizontalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
}

export function getScrollingElement(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

interface GetScrollPositionArgs {
  scrollingElement: HTMLElement;
  delay?: Axes;
}

export function getScrollPosition({
  scrollingElement,
  delay = { x: 0, y: 0 },
}: GetScrollPositionArgs): Axes {
  const x = Math.max(0, scrollingElement.scrollLeft - delay.x);
  const y = Math.max(0, scrollingElement.scrollTop - delay.y);

  return {
    x,
    y,
  };
}

interface GetRelativeScrollPositionArgs {
  lastRelativeScrollPosition: Axes;
  scrollPosition: Axes;
  lastScrollPosition: Axes;
  limit: Position;
}

export function getRelativeScrollPosition({
  lastRelativeScrollPosition,
  scrollPosition,
  lastScrollPosition,
  limit,
}: GetRelativeScrollPositionArgs): Axes {
  let x =
    lastRelativeScrollPosition.x + scrollPosition.x - lastScrollPosition.x;

  let y =
    lastRelativeScrollPosition.y + scrollPosition.y - lastScrollPosition.y;

  if (limit) {
    if (y < limit.top) y = limit.top;
    if (y > limit.bottom) y = limit.bottom;
    if (x < limit.left) x = limit.left;
    if (x > limit.right) x = limit.right;
  }

  return {
    x,
    y,
  };
}

export function getDirection({
  lastScrollPosition,
  scrollPosition,
}: {
  lastScrollPosition: Axes;
  scrollPosition: Axes;
}): Direction {
  if (lastScrollPosition.x < scrollPosition.x) {
    return Direction.RIGHT;
  }

  if (lastScrollPosition.x > scrollPosition.x) {
    return Direction.LEFT;
  }

  if (lastScrollPosition.y < scrollPosition.y) {
    return Direction.DOWN;
  }

  if (lastScrollPosition.y > scrollPosition.y) {
    return Direction.UP;
  }

  return Direction.NONE;
}

interface IsSafeArgs {
  scrollPosition: Axes;
  lastScrolledPosition: Axes;
  debounce: Axes;
}

export function isSafe({
  scrollPosition,
  lastScrolledPosition,
  debounce,
}: IsSafeArgs): boolean {
  const beOnVerticalSafe =
    Math.abs(scrollPosition.y - lastScrolledPosition.y) < debounce.y;
  const beOnHorizontalSafe =
    Math.abs(scrollPosition.x - lastScrolledPosition.x) < debounce.x;

  if (beOnVerticalSafe && beOnHorizontalSafe) return true;

  return false;
}

interface IsOnGapArgs {
  scrollPosition: Axes;
  gap: Position;
  scrollingElement: HTMLElement;
}

export function isOnGap({
  scrollPosition,
  gap,
  scrollingElement,
}: IsOnGapArgs): boolean {
  const beOnTopGap = scrollPosition.y < gap.top;

  if (gap.top !== null && beOnTopGap) return true;

  const beOnBottomGap =
    scrollPosition.y > getMaxVerticalScroll(scrollingElement) - gap.bottom;

  if (gap.bottom !== null && beOnBottomGap) return true;

  const beOnLeftGap = scrollPosition.x < gap.left;

  if (gap.left !== null && beOnLeftGap) return true;

  const beOnRightGap =
    scrollPosition.x > getMaxHorizontalScroll(scrollingElement) - gap.right;

  if (gap.right !== null && beOnRightGap) return true;

  return false;
}

interface IsOutOfLimitArgs {
  limit: Position;
  relativeScrollPosition: Axes;
}

export function isOutOfLimit({
  relativeScrollPosition,
  limit = POSITION_DEFAULT,
}: IsOutOfLimitArgs): boolean {
  if (isNumber(limit.top)) {
    const outOfTopLimit = relativeScrollPosition.y <= limit.top;

    if (outOfTopLimit) return true;
  }

  if (isNumber(limit.bottom)) {
    if (limit.bottom === 0) return false;

    const outOfBottomLimit = relativeScrollPosition.y >= limit.bottom;

    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = relativeScrollPosition.x <= limit.left;

    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    if (limit.right === 0) return false;

    const outOfRightLimit = relativeScrollPosition.x >= limit.right;

    if (outOfRightLimit) return true;
  }

  return false;
}

function getScrollViewPosition(position: Axes): Axes {
  return {
    x: position.x + window.innerWidth,
    y: position.y + window.innerHeight,
  };
}

interface IsOnTheRegionArgs {
  region: Position;
  position: Axes;
}

type IsOnTheRegion = (args: IsOnTheRegionArgs) => boolean;

const isOnTheRegion: IsOnTheRegion = ({ region, position }) => {
  const onBelowTheTop = position.y > region.top;
  const onAboveTheBottom = position.y < region.bottom;

  return onBelowTheTop && onAboveTheBottom;
};

interface ScrollEventArgs {
  el?: Element;
  onScroll(onScrollArgs: OnScrollArgs): void;
  onlyOnChangedDirection?: boolean;
  onlyOnDirection?: boolean;
  onlyOnWhenInOrOutTheRegion?: Position;
  gap?: Position;
  debounce?: Axes;
  limit?: Position;
  lazyTime?: number;
  delay?: Axes;
}

interface ScrollEvents extends Partial<ScrollEventArgs> {
  lastScrolledPosition: Axes;
  scrollingElement: Element;
}

export default function scrollEvents({
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
}: ScrollEventArgs): ScrollEvents {
  const scrollingElement = getScrollingElement(
    el as HTMLElement & HTMLDocument,
  );
  let lastRelativeScrollPosition = { x: 0, y: 0 };
  let lastScrolledPosition = getScrollPosition({ scrollingElement, delay });
  let lastScrollPosition = lastScrolledPosition;
  let lastTimeout = 0;
  let lastDirection = null;
  let lastOnTheRegion = false;

  function handleScroll(event) {
    function isToScroll({ changedDirection, scrollPosition, direction }) {
      if (onlyOnChangedDirection && !changedDirection) return false;
      if (isOnGap({ scrollPosition, gap, scrollingElement })) return false;
      if (isSafe({ scrollPosition, lastScrolledPosition, debounce })) {
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
        relativeScrollPosition: lastRelativeScrollPosition,
        limit,
      });

      if (limit && outOfLimit) {
        return false;
      }

      return true;
    }

    const scrollPosition = getScrollPosition({ scrollingElement, delay });
    const relativeScrollPosition = getRelativeScrollPosition({
      lastRelativeScrollPosition,
      lastScrollPosition,
      scrollPosition,
      limit,
    });
    const direction = getDirection({ lastScrollPosition, scrollPosition });
    const changedDirection = lastDirection !== direction;
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
}
