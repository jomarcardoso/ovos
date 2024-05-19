import { IS_NODE_JS } from '../../utilities/document';
import { pageProgress } from './page-progress';

export function htmxPageProgress() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');

  if (!flag) return;

  pageProgress({});
}
