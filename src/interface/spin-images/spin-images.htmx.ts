import { IS_NODE_JS } from '../../utilities/document';
import { spinImages } from './spin-images';

export function htmxSpinImages() {
  if (IS_NODE_JS) return;

  const el = document.querySelector('[data-ovo-spin-images][data-ovo-auto]');

  if (el) {
    spinImages({});
  }
}
