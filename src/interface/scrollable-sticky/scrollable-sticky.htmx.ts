import { scrollableSticky } from './scrollable-sticky';

export function htmxScrollableSticky() {
  if (typeof document === 'undefined') return;

  const elContainer = document.querySelector(
    '[ovo-scrollable-sticky]',
  ) as HTMLElement;

  if (elContainer) {
    scrollableSticky({ elContainer });
  }
}
