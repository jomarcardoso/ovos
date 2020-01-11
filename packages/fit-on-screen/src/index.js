import { ScrollEvents } from 'jo-scrollevents';

export function FitOnScreen({
  elRelative = document,
  elsToFit = Array.from(document.querySelectorAll('[data-js="fit-on-screen"]')),
  proximityToFit = 240
} = {}) {
  function scrollTo({ scrollingElement, top }) {
    scrollingElement.scrollTo({
      top,
      behavior: 'smooth'
    });
  }

  function isNearOfElement({ elToFit, scrolledPosition }) {
    const topElToFit = elToFit.offsetTop;
    const highTopElToFit = topElToFit - proximityToFit;
    const lowTopElToFit = topElToFit + proximityToFit;
    const betweenLowHigh = scrolledPosition > highTopElToFit && scrolledPosition < lowTopElToFit;

    return betweenLowHigh;
  }

  function getNearElement({ scrolledPosition }) {
    return elsToFit.find((elToFit) => isNearOfElement({ elToFit, scrolledPosition }));
  }

  function handleScroll(e, { scrollingElement }) {
    const nearElement = getNearElement({ scrolledPosition: scrollingElement.scrollTop });

    if (!nearElement) return;


    scrollTo({
      top: nearElement.offsetTop,
      scrollingElement
    });
  }

  function bindEvents() {
    ScrollEvents({
      el: elRelative,
      onScroll: handleScroll,
      lazyTime: 1000,
      gap: {
        top: 100,
        bottom: 100
      }
    });
  }

  bindEvents();
}
