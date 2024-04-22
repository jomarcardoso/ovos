import { IS_NODE_JS } from '../../utilities/document';
import { StickyHeader } from './sticky-header';

export function htmxStickyHeader() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector(
    '[data-ovo-sticky-header][data-ovo-auto]',
  );

  if (!flag) return;

  StickyHeader({});
}
