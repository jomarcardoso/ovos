import { getTop } from '../element';

export function scrollTopTo({
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

export function scrollLeftTo({
  scrollingElement = window,
  left = 0,
}: {
  scrollingElement?: HTMLElement | Window;
  left?: number;
}): void {
  scrollingElement.scrollTo({
    left,
    behavior: 'smooth',
  });
}

export function documentScrollToElement(element: HTMLElement): void {
  const valueToScroll = getTop(element);

  scrollTopTo({ top: valueToScroll });
}
