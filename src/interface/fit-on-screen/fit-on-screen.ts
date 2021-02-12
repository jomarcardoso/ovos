import { Axis } from '../../types/types';
import { getLeft, getTop } from '../../utilities/element/element.utilities';
import scrollEvents from '../../api/scroll-events/scroll-events';
import {
  scrollTopTo,
  scrollLeftTo,
} from '../../utilities/scroll/scroll.utilities';
import { FitOnScreenArgs, IsNearOfElement } from './types/fit-on-screen.types';

function getOffsetByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === Axis.Y) return getTop(el);

  return getLeft(el);
}

function getScrolledByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === Axis.Y) return el.scrollTop;

  return el.scrollLeft;
}

export default function fitOnScreen({
  elRelative = document,
  elsToFit = Array.from(document.querySelectorAll('[data-ovo-fs="content"]')),
  proximityToFit = 240,
  axis = Axis.Y,
  lazyTime = 1000,
  gap,
}: FitOnScreenArgs): void {
  const isNearOfElement: IsNearOfElement = ({ elToFit, scrolledPosition }) => {
    const offsetElToFit = getOffsetByAxis({ axis, el: elToFit });
    const highOffsetElToFit = offsetElToFit - proximityToFit;
    const lowOffsetElToFit = offsetElToFit + proximityToFit;
    const betweenLowHigh =
      scrolledPosition > highOffsetElToFit &&
      scrolledPosition < lowOffsetElToFit;

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
      scrolledPosition: getScrolledByAxis({ el: scrollingElement, axis }),
    });

    console.log('ei');

    if (!nearElement) return;

    if (axis === Axis.Y) {
      scrollTopTo({
        top: getOffsetByAxis({ axis, el: nearElement }),
        scrollingElement,
      });

      return;
    }

    console.log('scrollLeftTo');

    scrollLeftTo({
      left: getOffsetByAxis({ axis, el: nearElement }),
      scrollingElement,
    });
  }

  function bindEvents() {
    scrollEvents({
      el: elRelative,
      onScroll: handleScroll,
      lazyTime,
      gap,
    });
  }

  bindEvents();
}
