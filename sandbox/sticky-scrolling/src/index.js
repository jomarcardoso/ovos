import { ScrollEvents } from '@ovo/scrolle-vents';

export default function ScrollingSticky(el, {
  elRelative, onUnpin, onPin, onUnfix, onFix,
}) {
  let fixed = false;
  let pinnedOnBottom = false;

  function getViewportHeight() {
    return window.innerHeight;
  }

  function getElTop(el) {
    return el.offsetTop;
  }

  function isBottomOfElementBelowOfViewport({ el, scrollPosition }) {
    const elHeight = el.offsetHeight;
    const bottomViewport = getViewportHeight() + scrollPosition;
    const bottomOfFilter = elHeight + getElTop(el);

    return bottomOfFilter >= bottomViewport;
  }

  function pinAndFix({ scrollPosition }) {
    function isOnViewport(el) {
      function isTopOfElementAboveOfViewport(el) {
        return getElTop(el) <= scrollPosition;
      }

      return isTopOfElementAboveOfViewport(el) && isBottomOfElementBelowOfViewport({ el, scrollPosition });
    }

    function pinOnBottom() {
      if (pinnedOnBottom) return;

      onPin();
      pinnedOnBottom = true;
    }

    function unpinOnBottom() {
      if (!pinnedOnBottom) return;

      onUnpin();
      pinnedOnBottom = false;
    }

    function fix() {
      if (fixed) return;

      fixed = true;
      onFix();
    }

    function unfix() {
      if (!fixed) return;

      fixed = false;
      onUnfix();
    }

    if (isOnViewport(elRelative)) {
      fix();
      unpinOnBottom();
      return;
    }

    unfix();

    if (!isBottomOfElementBelowOfViewport({ el: elRelative, scrollPosition })) {
      pinOnBottom();
      return;
    }

    unpinOnBottom();
  }

  const handleScroll = (() => {
    let toScroll = 0;
    let lastPositionScroll = 0;

    return (e, { scrollPosition: { y: scrollPosition } } = {}) => {
      pinAndFix({ scrollPosition });

      if (!fixed) return;

      const minToScroll = 0;
      const maxToScroll = el.offsetHeight - getViewportHeight();
      const positionScroll = scrollPosition - elRelative.offsetTop;
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
    ScrollEvents({
      onScroll: handleScroll,
    });
  }

  bindEvents();
  // handleScroll();
}
