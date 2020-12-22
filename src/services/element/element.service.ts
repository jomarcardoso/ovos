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

const ElementService = {
  getScrollingElement,
  getMaxVerticalScroll,
  getMaxHorizontalScroll,
};

export default ElementService;
