import { getTop } from '../element';

export function scrollTo({
  scrollingElement = window,
  top = 0,
  left = 0,
}: {
  scrollingElement?: HTMLElement | Window;
  top?: number;
  left?: number;
}): void {
  if (typeof window === 'undefined') return;

  const el = scrollingElement instanceof Document ? window : scrollingElement;

  el.scrollTo({
    left,
    top,
    behavior: 'smooth',
  });
}

export function documentScrollToElement(element: HTMLElement): void {
  const valueToScroll = getTop(element);

  scrollTo({ top: valueToScroll });
}
