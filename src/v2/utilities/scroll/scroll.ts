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
