import isNumber from 'lodash/isNumber';

export type Element = HTMLElement | HTMLDocument;

interface Axes {
  x: number;
  y: number;
}

enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  NONE = '',
}

interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface OnScrollArgs {
  event: UIEvent;
  scrollingElement: HTMLElement;
  scrollPosition: Axes;
  direction: Direction;
  changedDirection: boolean,
  relativeScrollPosition: Axes,
}

const POSITION_DEFAULT: Position = {
  bottom: null,
  left: null,
  right: null,
  top: null,
}

export function getScrollTopMax(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}

export function getScrollLeftMax(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
}

export function getScrollingElement(
  target: HTMLElement & HTMLDocument
): HTMLElement {
  if (target.scrollingElement) return target.scrollingElement as HTMLElement;

  return target;
}

interface GetScrollPositionArgs {
  scrollingElement: HTMLElement;
  relativeStart?: Axes;
}

export function getScrollPosition({
  scrollingElement,
  relativeStart = { x: 0, y: 0 },
}: GetScrollPositionArgs): Axes {
  const x = scrollingElement.scrollLeft - relativeStart.x;
  const y = scrollingElement.scrollTop - relativeStart.y;

  return {
    x,
    y,
  };
}

interface GetRelativeScrollPositionArgs {
  lastRelativeScrollPosition: Axes,
  scrollPosition: Axes,
  lastScrollPosition: Axes,
  limit: Position,
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
  lastScrollPosition, scrollPosition
}: { lastScrollPosition: Axes; scrollPosition: Axes
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
  debounce
}: IsSafeArgs): boolean {
  const beOnVerticalSafe =
    Math.abs(scrollPosition.y - lastScrolledPosition.y) < debounce.y;
  const beOnHorizontalSafe =
    Math.abs(scrollPosition.x - lastScrolledPosition.x) < debounce.x;

  if (beOnVerticalSafe && beOnHorizontalSafe) return true;

  return false;
}

interface IsOnGapArgs {
  scrollPosition: Axes,
  gap: Position,
  scrollingElement: HTMLElement;
}

export function isOnGap({
  scrollPosition,
  gap,
  scrollingElement
}: IsOnGapArgs): boolean {
  const beOnTopGap = scrollPosition.y < gap.top;

  if (gap.top !== null && beOnTopGap) return true;

  const beOnBottomGap =
    scrollPosition.y > getScrollTopMax(scrollingElement) - gap.bottom;

  if (gap.bottom !== null && beOnBottomGap) return true;

  const beOnLeftGap = scrollPosition.x < gap.left;

  if (gap.left !== null && beOnLeftGap) return true;

  const beOnRightGap =
    scrollPosition.x > getScrollLeftMax(scrollingElement) - gap.right;

  if (gap.right !== null && beOnRightGap) return true;

  return false;
}

interface IsOutOfLimitArgs {
  limit: Position;
  relativeScrollPosition: Axes;
}

export function isOutOfLimit({
  relativeScrollPosition,
  limit = POSITION_DEFAULT
}: IsOutOfLimitArgs
): boolean {
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

interface ScrollEventArgs {
  el?: Element;
  onScroll(onScrollArgs: OnScrollArgs): void;
  onlyOnChangedDirection?: boolean;
  onlyOnDirection?: boolean;
  gap?: Position;
  debounce?: Axes;
  limit?: Position;
  lazyTime?: number;
}

interface ScrollEvents extends Partial<ScrollEventArgs> {
  lastScrolledPosition: Axes,
  scrollingElement: Element,
}

export default function scrollEvents({
  el = document,
  onScroll,
  onlyOnChangedDirection = false,
  onlyOnDirection = null,
  gap = POSITION_DEFAULT,
  debounce = {
    x: 0,
    y: 0,
  },
  limit = POSITION_DEFAULT,
  lazyTime = 0,
}: ScrollEventArgs): ScrollEvents {
  const scrollingElement =
    getScrollingElement(el as HTMLElement & HTMLDocument);
  let lastRelativeScrollPosition = { x: 0, y: 0 };
  let lastScrolledPosition = getScrollPosition({ scrollingElement });
  let lastScrollPosition = lastScrolledPosition;
  let lastTimeout = 0;
  let lastDirection = null;

  function handleScroll(event) {
    function isToScroll({ changedDirection, scrollPosition, direction }) {
      if (onlyOnChangedDirection && !changedDirection) return false;
      if (isOnGap({ scrollPosition, gap, scrollingElement })) return false;
      if (isSafe({ scrollPosition, lastScrolledPosition, debounce })) {
        return false;
      }
      if (onlyOnDirection && onlyOnDirection !== direction) return false;

      const outOfLimit = isOutOfLimit({
        relativeScrollPosition: lastRelativeScrollPosition,
        limit,
      });

      if (limit && outOfLimit) {
        return false;
      }

      return true;
    }

    const scrollPosition = getScrollPosition({ scrollingElement });
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

    const timeout = window.setTimeout(() => {
      if (onScroll && toScroll) {
        onScroll({
          event,
          scrollingElement,
          scrollPosition,
          direction,
          changedDirection,
          relativeScrollPosition,
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
