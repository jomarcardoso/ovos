import { IS_NODE_JS } from '../../utilities/document';
import { anchor } from './anchor';

export function htmxAnchor() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector(
    '[data-ovo-anchor="to-anchor"][data-ovo-auto]',
  );

  if (!flag) return;

  anchor({});
}
