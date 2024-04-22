import { IS_NODE_JS } from '../../utilities/document';
import { ScrollableTabs } from './scrollable-tabs';

export function htmxScrollableTabs() {
  if (IS_NODE_JS) return;

  const el = document.querySelector(
    '[data-ovo-scrollable-tabs][data-ovo-auto]',
  ) as HTMLElement;

  if (!el) return;

  ScrollableTabs({ el });
}
