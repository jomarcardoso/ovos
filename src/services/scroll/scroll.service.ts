import { Axes, Position } from '../../types/types';

export function getMaxVerticalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}

export function getMaxHorizontalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
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

const ScrollService = {
  getMaxVerticalScroll,
  getMaxHorizontalScroll,
  getScrollPosition,
  isOnGap,
};

export default ScrollService;
