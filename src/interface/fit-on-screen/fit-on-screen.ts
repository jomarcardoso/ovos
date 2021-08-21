import { Axis, POSITIONS } from '../../utilities/axis';
import { getLeft, getTop } from '../../utilities/element';
import { Scroll$, Scroll$Next } from '../../api/scroll';
import { scrollTo } from '../../utilities/scroll';
import { FitOnScreenArgs, IsNearOfElement } from './fit-on-screen.types';

function getOffsetByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === 'y') return getTop(el);

  return getLeft(el);
}

function getScrolledByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === 'y') return el.scrollTop;

  return el.scrollLeft;
}

export default function fitOnScreen({
  elRelative = (document.querySelector('[data-ovo-fs="el"]') as HTMLElement) ||
    document,
  elsToFit = Array.from(document.querySelectorAll('[data-ovo-fs="content"]')),
  proximityToFit = 240,
  axis = 'y',
  debounce = 1000,
  limit = POSITIONS,
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

  function handleScroll({ el }: Scroll$Next) {
    const nearElement = getNearElement({
      scrolledPosition: getScrolledByAxis({ el, axis }),
    });

    if (!nearElement) return;

    scrollTo({
      top: getOffsetByAxis({ axis, el: nearElement }),
      left: getOffsetByAxis({ axis, el: nearElement }),
      scrollingElement: el,
    });
  }

  function bindEvents() {
    const observable = Scroll$({
      el: elRelative,
      debounce,
      limit,
    });

    observable.subscribe(handleScroll);
  }

  bindEvents();
}

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector('[data-ovo-fs][data-ovo-auto]');

  if (!flag) return;

  fitOnScreen({});
}

autoStart();
