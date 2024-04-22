import { IS_NODE_JS } from '../../utilities/document';
import { carousel } from './carousel';

export function htmxCarousel() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector(
    '[data-carousel="carousel"][data-ovo-auto]',
  );

  if (!flag) return;

  carousel({});
}
