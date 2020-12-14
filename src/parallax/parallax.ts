import ScrollEvents from '../scroll-events/scroll-events';
import { Axis, Element, OnScrollArgs } from '../types/types';

type Callback = (translateY: number) => void;

interface ParallaxItem {
  el: HTMLElement;
  doParallax: Callback;
}

interface ParallaxItemArgs {
  el: HTMLElement;
  callback: Callback;
}

export function parallaxItem({ el, callback }: ParallaxItemArgs): ParallaxItem {
  function doParallax(translateY) {
    // eslint-disable-next-line no-param-reassign
    el.style.transform = `translate3d(0, ${translateY}px, 0)`;
    if (callback) callback(translateY);
  }

  el.style.willChange = 'transform'; // eslint-disable-line no-param-reassign

  return {
    el,
    doParallax,
  };
}

interface ParallaxArgs {
  el: HTMLElement;
  callback?: Callback;
  distance?: number;
  elRelative?: Element;
  gap?: number;
  axis?: Axis;
}

export default function parallax({
  el,
  callback,
  distance = 1000,
  elRelative = document,
  gap = 0,
  axis = Axis.Y,
}: ParallaxArgs): void {
  const item = parallaxItem({ el, callback });

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
      const { bottom, top } = item.el.getBoundingClientRect();
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

    item.doParallax(translateY);
  }

  function bindScroll() {
    ScrollEvents({
      el: elRelative,
      onScroll: handleScroll,
    });
  }

  bindScroll();
}
