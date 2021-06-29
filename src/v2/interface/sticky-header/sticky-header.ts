import './sticky-header.scss';
import {
  getHeight,
  translate,
} from '../../../utilities/element/element.utilities';
import { Scroll$, Scroll$Next } from '../../api/scroll-observer';

export default function stickyHeader({
  el = document.querySelector('[data-ovo-hs="header"]'),
}: {
  el?: Element | null;
}): void {
  if (!el) return;

  const htmlEl = el as HTMLElement;

  function handleDocumentScroll({
    relativeAxes: { y: position = 0 },
  }: Scroll$Next) {
    translate({ el: htmlEl, position });
  }

  function bindEvents() {
    if (!el) return;

    Scroll$({
      maxRelative: {
        top: 0,
        bottom: getHeight(htmlEl),
        left: 0,
        right: 0,
      },
    }).subscribe(handleDocumentScroll);
  }

  bindEvents();
}
