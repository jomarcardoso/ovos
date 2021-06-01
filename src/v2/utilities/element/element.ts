import { Axes } from '../axis';

export function getScrollingEl(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

interface GetScrollPositionArgs {
  el: HTMLElement;
  variation?: Axes;
}

type GetScrollPosition = (args: GetScrollPositionArgs) => Axes;

export const getScrollPosition: GetScrollPosition = ({
  el,
  variation = { x: 0, y: 0 },
}) => {
  const x = Math.max(0, el.scrollLeft - variation.x);
  const y = Math.max(0, el.scrollTop - variation.y);

  return {
    x,
    y,
  };
};

export function getLeft(el: HTMLElement): number {
  return el.offsetLeft;
}

export function getTop(el: HTMLElement): number {
  return el.offsetTop;
}
