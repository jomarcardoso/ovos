import { IS_NODE_JS } from '../../utilities/document';
import { parallax } from './parallax';

export function htmxParallax() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector('[data-ovo-parallax][data-ovo-auto]');

  if (!flag) return;

  parallax({});
}
