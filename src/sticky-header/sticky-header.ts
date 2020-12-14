import './sticky-header.scss';
import scrollEvents from '../scroll-events/scroll-events';

export function getHeight(el) {
  return el.offsetHeight;
}

export function hide({ el, position }) {
  // eslint-disable-next-line no-param-reassign
  el.style.transform = `translate3d(0, -${position}px, 0)`;
}

export default function stickyHeader({
  el = document.querySelector('[data-ovo-hs="header"]'),
} = {}) {
  // function isFullyVisible(hided) {
  //   if (hided <= 0) return true;

  //   return false;
  // }

  // function isFullyHidden(hidden) {
  //   if (hidden > getHeight(el)) return true;

  //   return false;
  // }

  function handleDocumentScroll({ relativeScrollPosition: { y: position } }) {
    hide({ el, position });
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
