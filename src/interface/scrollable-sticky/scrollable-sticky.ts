import isFunction from 'lodash/isFunction';
import './scrollable-sticky.scss';
import scrollEvents from '../../api/scroll-events/scroll-events';
import { OnScrollArgs } from '../../types/types';
import { ScrollableStickyArgs } from './types/scrollable-sticky.types';

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
  onUnpin,
  onPin,
  onUnfix,
  onFix,
}: ScrollableStickyArgs): void {
  let fixed = false;
  let pinnedOnBottom = false;

  function pinAndFix({ scrollPosition }) {
    function pinOnBottom() {
      if (pinnedOnBottom) return;

      // eslint-disable-next-line no-param-reassign
      elContainer.dataset.ovo_ss_pinned = 'bottom';
      pinnedOnBottom = true;
      if (isFunction(onPin)) onPin();
    }

    function unpinOnBottom() {
      if (!pinnedOnBottom) return;

      // eslint-disable-next-line no-param-reassign
      elContainer.dataset.ovo_ss_pinned = '';
      pinnedOnBottom = false;
      if (isFunction(onUnpin)) onUnpin();
    }

    function fix() {
      if (fixed) return;

      fixed = true;
      // eslint-disable-next-line no-param-reassign
      elContainer.dataset.ovo_ss_fixed = 'true';
      // eslint-disable-next-line no-param-reassign
      el.style.width = String(elContainer.offsetWidth);
      if (isFunction(onFix)) onFix();
    }

    function unfix() {
      if (!fixed) return;

      fixed = false;
      // eslint-disable-next-line no-param-reassign
      elContainer.dataset.ovo_ss_fixed = 'false';
      // eslint-disable-next-line no-param-reassign
      el.style.transform = `translateY(0)`;
      if (isFunction(onUnfix)) onUnfix();
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

      // eslint-disable-next-line no-param-reassign
      el.style.transform = `translateY(-${toScroll}px)`;
    };
  })();

  function bindEvents() {
    scrollEvents({
      onScroll: handleScroll,
    });
  }

  bindEvents();
}
