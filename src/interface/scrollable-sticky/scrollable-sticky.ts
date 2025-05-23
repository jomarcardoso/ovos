import isFunction from 'lodash/isFunction';
import './scrollable-sticky.scss';
import { scroll, Scroll$ } from '../../api/scroll';
import { ScrollableStickyArgs } from './scrollable-sticky.types';
import { getViewportHeight } from '../../utilities/view/view';
import {
  isBottomOfElementBelowOfViewport,
  isAboveAndBelowScreen,
  getHeight,
} from '../../utilities/element';

export function scrollableSticky({
  el = document.querySelector('[ovo-scrollable-sticky_content]') as HTMLElement,
  elContainer = document.querySelector(
    '[ovo-scrollable-sticky]',
  ) as HTMLElement,
  onUnpin,
  onPin,
  onUnfix,
  onFix,
}: ScrollableStickyArgs): void {
  let fixed = false;
  let pinnedOnBottom = false;

  function applyMinHeightToScrollableElement() {
    const parentEl = elContainer.parentNode as HTMLElement;

    // parentEl.setAttribute('data-ovo_ss', 'wrapper');
    parentEl.style.minHeight = String(getHeight(elContainer));
  }

  applyMinHeightToScrollableElement();

  function pinAndFix() {
    function pinOnBottom() {
      if (pinnedOnBottom) return;

      elContainer.dataset.ovo_scrollable_sticky_pinned = 'bottom';
      pinnedOnBottom = true;
      if (isFunction(onPin)) onPin();
    }

    function unpinOnBottom() {
      if (!pinnedOnBottom) return;

      elContainer.dataset.ovo_scrollable_sticky_pinned = '';
      pinnedOnBottom = false;
      if (isFunction(onUnpin)) onUnpin();
    }

    function fix() {
      if (fixed) return;

      fixed = true;
      elContainer.dataset.ovo_scrollable_sticky_fixed = 'true';
      el.style.width = String(elContainer.offsetWidth);
      if (isFunction(onFix)) onFix();
    }

    function unfix() {
      if (!fixed) return;

      fixed = false;
      elContainer.dataset.ovo_scrollable_sticky_fixed = 'false';
      el.style.transform = 'translateY(0)';
      if (isFunction(onUnfix)) onUnfix();
    }

    if (isAboveAndBelowScreen(elContainer)) {
      fix();
      unpinOnBottom();

      return;
    }

    unfix();

    if (!isBottomOfElementBelowOfViewport(elContainer)) {
      pinOnBottom();

      return;
    }

    unpinOnBottom();
  }

  const handleScroll = ((): ((args: Scroll$) => void) => {
    let toScroll = 0;
    let lastPositionScroll = 0;

    return ({ axes: { y: scrollPosition } }) => {
      pinAndFix();

      if (!fixed) return;

      const minToScroll = 0;
      const maxToScroll = el.offsetHeight - getViewportHeight();
      const positionScroll = scrollPosition - elContainer.offsetTop;
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

  const observable = scroll({});

  observable.subscribe(handleScroll);
}
