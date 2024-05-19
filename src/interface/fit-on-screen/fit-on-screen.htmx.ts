import { IS_NODE_JS } from '../../utilities/document';
import { fitOnScreen } from './fit-on-screen';

export function htmxFitOnScreen() {
  if (IS_NODE_JS) return;

  const flag = document.querySelector('[data-ovo-fs][data-ovo-auto]');

  if (!flag) return;

  fitOnScreen({});
}
