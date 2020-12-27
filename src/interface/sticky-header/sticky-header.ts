import './sticky-header.scss';
import { getHeight, translate } from '../../services/element/element.service';
import scrollEvents from '../../api/scroll-events/scroll-events';

export default function stickyHeader({
  el = document.querySelector('[data-ovo-hs="header"]'),
}: {
  el?: HTMLElement;
}): void {
  // function isFullyVisible(hided) {
  //   if (hided <= 0) return true;

  //   return false;
  // }

  // function isFullyHidden(hidden) {
  //   if (hidden > getHeight(el)) return true;

  //   return false;
  // }

  function handleDocumentScroll({ relativeScrollPosition: { y: position } }) {
    translate({ el, position });
  }

  function bindEvents() {
    if (!el) return;

    scrollEvents({
      onScroll: handleDocumentScroll,
      limit: {
        top: 0,
        bottom: getHeight(el),
        left: null,
        right: null,
      },
    });
  }

  bindEvents();
}
