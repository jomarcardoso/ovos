import './sticky-header.scss';
import {
  getHeight,
  translate,
} from '../../utilities/element/element.utilities';
import scrollEvents from '../../api/scroll-events/scroll-events';

export default function stickyHeader({
  el = document.querySelector('[data-ovo-hs="header"]'),
}: {
  el?: Element | null;
}): void {
  if (!el) return;

  const htmlEl = el as HTMLElement;

  function handleDocumentScroll({
    relativeScrollPosition: { y: position = 0 },
  }) {
    translate({ el: htmlEl, position });
  }

  function bindEvents() {
    if (!el) return;

    scrollEvents({
      onScroll: handleDocumentScroll,
      limit: {
        top: 0,
        bottom: getHeight(htmlEl),
        left: 0,
        right: 0,
      },
    });
  }

  bindEvents();
}
