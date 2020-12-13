import './scrollable-sticky.scss';

/* eslint-disable */
import scrollEvents from '../scroll-events/scroll-events';
import { OnScrollArgs } from '../types/types';

interface ScrollableSticky {
  el?: HTMLElement;
  elWrapper?: HTMLElement;
  elContainer?: HTMLElement;
  onUnpin?(event: UIEvent): void;
  onPin?(event: UIEvent): void;
  onUnfix?(event: UIEvent): void;
  onFix?(event: UIEvent): void;
}

function getViewportHeight() {
  return window.innerHeight;
}

function getElTop(el) {
  return el.offsetTop;
}

function isTopOfElementAboveOfViewport({ el, scrollPosition }) {
  return getElTop(el) <= scrollPosition;
}

function isBottomOfElementBelowOfViewport({ el, scrollPosition }) {
  const elHeight = el.offsetHeight;
  const bottomViewport = getViewportHeight() + scrollPosition;
  const bottomOfFilter = elHeight + getElTop(el);

  return bottomOfFilter >= bottomViewport;
}

function isOnViewport({ el, scrollPosition }) {
  return (
    isTopOfElementAboveOfViewport({ el, scrollPosition }) &&
    isBottomOfElementBelowOfViewport({ el, scrollPosition })
  );
}

export default function scrollableSticky({
  el = document.querySelector('[data-ovo_ss="content"]'),
  elWrapper = document.querySelector('[data-ovo_ss="wrapper"]'),
  elContainer = document.querySelector('[data-ovo_ss="container"]'),
}: // onUnpin,
// onPin,
// onUnfix,
// onFix,
ScrollableSticky) {
  let fixed = false;
  let pinnedOnBottom = false;

  function pinAndFix({ scrollPosition }) {
    function pinOnBottom() {
      if (pinnedOnBottom) return;

      // onPin();
      elContainer.dataset['ovo_ss_pinned'] = 'bottom';
      pinnedOnBottom = true;
    }

    function unpinOnBottom() {
      if (!pinnedOnBottom) return;

      // onUnpin();
      elContainer.dataset['ovo_ss_pinned'] = '';
      pinnedOnBottom = false;
    }

    function fix() {
      if (fixed) return;

      fixed = true;
      elContainer.dataset['ovo_ss_fixed'] = 'true';
      el.style.width = String(elContainer.offsetWidth);
      // onFix();
    }

    function unfix() {
      if (!fixed) return;

      fixed = false;
      elContainer.dataset['ovo_ss_fixed'] = 'false';
      el.style.transform = `translateY(0)`;
      // onUnfix();
    }

    if (isOnViewport({ el: elWrapper, scrollPosition })) {
      fix();
      unpinOnBottom();
      return;
    }

    unfix();

    if (!isBottomOfElementBelowOfViewport({ el: elWrapper, scrollPosition })) {
      pinOnBottom();
      return;
    }

    unpinOnBottom();
  }

  const handleScroll = ((): ((args: OnScrollArgs) => void) => {
    let toScroll = 0;
    let lastPositionScroll = 0;

    return ({ scrollPosition: { y: scrollPosition } }) => {
      pinAndFix({ scrollPosition });

      if (!fixed) return;

      const minToScroll = 0;
      const maxToScroll = el.offsetHeight - getViewportHeight();
      const positionScroll = scrollPosition - elWrapper.offsetTop;
      const difference = positionScroll - lastPositionScroll;
      lastPositionScroll = positionScroll;

      toScroll += difference;
      if (toScroll > maxToScroll) {
        toScroll = maxToScroll;
      }

      if (toScroll < minToScroll) {
        toScroll = minToScroll;
      }

      el.style.transform = `translateY(-${toScroll}px)`;
    };
  })();

  function bindEvents() {
    scrollEvents({
      onScroll: handleScroll,
    });
  }

  bindEvents();
  // handleScroll();
}
