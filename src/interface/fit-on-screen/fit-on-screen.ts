import { Axis } from '../../utilities/axis';
import {
  getLeft,
  getTop,
  isTopOfElementAboveOfViewport,
} from '../../utilities/element';
import { scroll, Scroll$ } from '../../api/scroll';
import { scrollTo } from '../../utilities/scroll';
import { FitOnScreenArgs, IsNearOfElement } from './fit-on-screen.types';
import { IS_NODE_JS } from '../../utilities/document';
import { Subject, takeUntil } from 'rxjs';

function getOffsetByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === 'y') return getTop(el);

  return getLeft(el);
}

function getScrolledByAxis({ el, axis }: { el: HTMLElement; axis: Axis }) {
  if (axis === 'y') return el.scrollTop;

  return el.scrollLeft;
}

export function fitOnScreen({
  elRelative = !IS_NODE_JS
    ? (document.querySelector('[data-ovo-fs="el"]') as HTMLElement) || document
    : undefined,
  elsToFit: externalElsToFit,
  proximityToFit = 240,
  axis = 'y',
  debounce = 1000,
  limit,
  doNotFitIfAbove = true,
  doNotFitIfBellow = true,
}: FitOnScreenArgs): {
  destroy(): void;
} {
  const destroy$ = new Subject();

  function destroy() {
    destroy$.next(true);
    destroy$.complete();
  }

  if (!elRelative) {
    destroy;
  }

  const elsToFit =
    externalElsToFit ||
    Array.from(document.querySelectorAll('[data-ovo-fs="content"]'));

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

  function handleScroll({ el }: Scroll$) {
    if (doNotFitIfAbove && !isTopOfElementAboveOfViewport(elsToFit[0])) {
      return;
    }

    if (
      doNotFitIfBellow &&
      isTopOfElementAboveOfViewport(elsToFit[elsToFit.length - 1])
    ) {
      return;
    }

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
    const observable = scroll({
      el: elRelative,
      debounce,
      limit,
    }).pipe(takeUntil(destroy$));

    observable.subscribe(handleScroll);
  }

  bindEvents();

  return {
    destroy,
  };
}
