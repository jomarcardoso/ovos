import ScrollEvents from '@ovo/scroll-events';

export function getHeight(el) {
  return el.offsetHeight;
}

export function hide({ el, position }) {
  el.style.transform = `translate3d(0, -${position}px, 0)`; // eslint-disable-line no-param-reassign
}

export default function StickyHeader({
  el = document.querySelector('[data-header="sticky"]'),
} = {}) {
  function isFullyVisible(hided) {
    if (hided <= 0) return true;

    return false;
  }

  function isFullyHidden(hidden) {
    if (hidden > getHeight(el)) return true;

    return false;
  }

  function handleDocumentScroll({
    relativeScrollPosition: {
      y: position,
    },
  }) {
    hide({ el, position });
  }

  function bindEvents() {
    if (!el) return;

    ScrollEvents({
      onScroll: handleDocumentScroll,
      limit: {
        top: 0,
        bottom: getHeight(el),
      },
    });
  }

  bindEvents();
}
