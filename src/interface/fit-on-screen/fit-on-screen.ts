import scrollEvents from '../../api/scroll-events/scroll-events';
import { scrollTo } from '../../utilities/scroll/scroll.utilities';
import { FitOnScreenArgs, IsNearOfElement } from './types/fit-on-screen.types';

export default function fitOnScreen({
  elRelative = document,
  elsToFit = Array.from(document.querySelectorAll('[data-ovo-fs="content"]')),
  proximityToFit = 240,
}: FitOnScreenArgs): void {
  const isNearOfElement: IsNearOfElement = ({ elToFit, scrolledPosition }) => {
    const topElToFit = elToFit.offsetTop;
    const highTopElToFit = topElToFit - proximityToFit;
    const lowTopElToFit = topElToFit + proximityToFit;
    const betweenLowHigh =
      scrolledPosition > highTopElToFit && scrolledPosition < lowTopElToFit;

    return betweenLowHigh;
  };

  function getNearElement({ scrolledPosition = 0 }) {
    return elsToFit.find((elToFit) =>
      isNearOfElement({ elToFit, scrolledPosition }),
    );
  }

  function handleScroll({
    scrollingElement,
  }: {
    scrollingElement: HTMLElement;
  }) {
    const nearElement = getNearElement({
      scrolledPosition: scrollingElement.scrollTop,
    });

    if (!nearElement) return;

    scrollTo({
      top: nearElement.offsetTop,
      scrollingElement,
    });
  }

  function bindEvents() {
    scrollEvents({
      el: elRelative,
      onScroll: handleScroll,
      lazyTime: 1000,
      gap: {
        bottom: 100,
        left: 0,
        right: 0,
        top: 100,
      },
    });
  }

  bindEvents();
}
