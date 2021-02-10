import { GetScrollPosition } from './types/scroll.utilities';
import { getTop } from '../element/element.utilities';

export const getScrollPosition: GetScrollPosition = ({
  scrollingEl: scrollingElement,
  delay = { x: 0, y: 0 },
}) => {
  const x = Math.max(0, scrollingElement.scrollLeft - delay.x);
  const y = Math.max(0, scrollingElement.scrollTop - delay.y);

  return {
    x,
    y,
  };
};

export function scrollTo({
  scrollingElement = window,
  top = 0,
}: {
  scrollingElement?: HTMLElement | Window;
  top?: number;
}): void {
  scrollingElement.scrollTo({
    top,
    behavior: 'smooth',
  });
}

export function documentScrollToElement(element: HTMLElement): void {
  const valueToScroll = getTop(element);

  scrollTo({ top: valueToScroll });
}
