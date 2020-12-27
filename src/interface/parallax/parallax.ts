import './parallax.scss';
import ScrollEvents from '../../api/scroll-events/scroll-events';
import { Axis, OnScrollArgs } from '../../types/types';
import { ParallaxArgs } from './types/parallax.types';

export default function parallax({
  el = document.querySelector('[data-ovo-parallax]'),
  elContent: externalElContent,
  callback,
  distance = 1000,
  elRelative = document,
  gap = 0,
  axis = Axis.Y,
}: ParallaxArgs): void {
  let elContent = externalElContent;

  if (!elContent) {
    elContent =
      el.querySelector('[data-ovo-parallax="content"]') ??
      (el.firstElementChild as HTMLElement);
  }

  elContent.style.willChange = 'transform';

  function doParallax(translateY) {
    elContent.style.transform = `translate3d(0, ${translateY}px, 0)`;
    if (callback) callback(translateY);
  }

  function handleScroll({ scrollingElement }: OnScrollArgs): void {
    const position =
      axis === Axis.X
        ? scrollingElement.scrollLeft
        : scrollingElement.scrollTop;

    function calculateTranslateY(currentPosition) {
      const perspective = distance / 500 || 1;
      const start = currentPosition - gap > 0 ? currentPosition - gap : 0;

      return start / perspective;
    }

    function isElOnScreen({ translateY }) {
      const { bottom, top } = el.getBoundingClientRect();
      const visualBottom = bottom - translateY;
      const topOnScreen = top >= 0;
      const bottomOnScreen = visualBottom >= 0;
      const onScreen = topOnScreen || bottomOnScreen;

      return onScreen;
    }

    function getTranslateY() {
      if (position < gap) {
        return calculateTranslateY(0);
      }

      return calculateTranslateY(position);
    }

    // lastPosition = position;
    const translateY = getTranslateY();

    if (!isElOnScreen({ translateY })) return;

    doParallax(translateY);
  }

  function bindScroll() {
    ScrollEvents({
      el: elRelative,
      onScroll: handleScroll,
    });
  }

  bindScroll();
}
