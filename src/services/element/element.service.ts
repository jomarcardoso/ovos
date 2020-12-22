export function getScrollingElement(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

export function getMaxVerticalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}

export function getMaxHorizontalScroll(scrollingElement: HTMLElement): number {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
}

export function getHeight(el: HTMLElement): number {
  return el.offsetHeight;
}

export function translate({
  el,
  position,
}: {
  el: HTMLElement;
  position: number;
}): void {
  // eslint-disable-next-line no-param-reassign
  el.style.transform = `translate3d(0, -${position}px, 0)`;
}

const ElementService = {
  getScrollingElement,
  getMaxVerticalScroll,
  getMaxHorizontalScroll,
  getHeight,
};

export default ElementService;
