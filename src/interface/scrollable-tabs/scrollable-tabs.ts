import type { ScrollableElement } from '../../utilities/scroll';
import './scrollable-tabs.scss';

export function ScrollableTabs({
  el = document,
}: {
  el?: ScrollableElement;
}): void {
  const items = Array.from(el.children);

  items.forEach((item) => {
    item.setAttribute('tabindex', '0');

    item.addEventListener('focus', () => {
      item.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
      });
    });
  });
}

function autoStart() {
  if (typeof document === 'undefined') return;

  const el = document.querySelector(
    '[data-ovo-scrollable-tabs][data-ovo-auto]',
  ) as HTMLElement;

  if (!el) return;

  ScrollableTabs({ el });
}

autoStart();
