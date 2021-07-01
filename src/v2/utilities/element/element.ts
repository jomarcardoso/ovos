import { Axes, Positions } from '../axis';
import { getViewportHeight } from '../view/view.utilities';

export function getScrollingEl(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

export function getScrollPosition({
  el,
  variation = { x: 0, y: 0 },
}: {
  el: HTMLElement;
  variation?: Axes;
}): Axes {
  const x = Math.max(0, el.scrollLeft - variation.x);
  const y = Math.max(0, el.scrollTop - variation.y);

  return {
    x,
    y,
  };
}

export function getLeft(el: HTMLElement): number {
  return el.offsetLeft;
}

export function getTop(el: HTMLElement): number {
  return el.offsetTop;
}

export function getMaxHorizontalScroll(el: HTMLElement): number {
  return el.scrollWidth - el.clientWidth;
}

export function getMaxVerticalScroll(el: HTMLElement): number {
  return el.scrollHeight - el.clientHeight;
}

export function isOutOfLimit({
  axes,
  limit,
  el,
}: {
  axes: Axes;
  limit: Partial<Positions>;
  el: HTMLElement;
}): boolean {
  if (limit.top) {
    const beOutOfTopLimit = axes.y < limit.top;

    if (beOutOfTopLimit) return true;
  }

  if (limit.bottom) {
    const beOutOfBottomLimit = axes.y > getMaxVerticalScroll(el) - limit.bottom;

    if (beOutOfBottomLimit) return true;
  }

  if (limit.right) {
    const beOutOfRightLimit = axes.y > getMaxHorizontalScroll(el) - limit.right;

    if (beOutOfRightLimit) return true;
  }

  if (limit.left) {
    const beOutOfLeftLimit = axes.x < limit.left;

    if (beOutOfLeftLimit) return true;
  }

  return false;
}

export function getPositionRelativeScreen(el: HTMLElement): Positions {
  const { bottom, left, top, right } = el.getBoundingClientRect();

  return {
    bottom,
    left,
    top,
    right,
  };
}

export function isTopOfElementAboveOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).top < 0;
}

export function isBottomOfElementBelowOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).bottom > getViewportHeight();
}

export function isAboveAndBelowScreen(el: HTMLElement): boolean {
  return (
    isTopOfElementAboveOfViewport(el) && isBottomOfElementBelowOfViewport(el)
  );
}
