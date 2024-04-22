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
