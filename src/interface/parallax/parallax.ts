import './parallax.scss';
import { Scroll$, Scroll$Next } from '../../api/scroll';
import { ParallaxArgs } from './parallax.types';
import { ScrollableElement } from '../../utilities/scroll';

export default function parallax({
  el = document.querySelector('[data-ovo-parallax]') as HTMLElement,
  elContent: externalElContent,
  callback,
  distance: externalDistance = 0,
  elRelative: externalElRelative,
  gap: externalGap = 0,
  axis: externalAxis,
}: ParallaxArgs): void {
  const axis = el.dataset.ovoParallaxAxis || externalAxis || 'y';

  const distance =
    externalDistance || Number(el.dataset.ovoParallaxDistance) || 1000;
  const gap = externalGap || Number(el.dataset.ovoParallaxGap) || 0;

  const elRelative =
    externalElRelative ??
    (el.dataset.ovoParallaxElRelative &&
      (document.querySelector(
        el.dataset.ovoParallaxElRelative ?? '',
      ) as ScrollableElement)) ??
    document;

  const elContent =
    externalElContent ??
    (el.querySelector('[data-ovo-parallax="content"]') as HTMLElement) ??
    (el.firstElementChild as HTMLElement);

  if (!elContent) return;

  elContent.style.willChange = 'transform';

  function doParallax(translate = 0) {
    if (!elContent) return;

    if (axis === 'y') {
      elContent.style.transform = `translate3d(0, ${translate}px, 0)`;
    } else {
      elContent.style.transform = `translate3d(${translate}px, 0, 0)`;
    }
    if (callback) callback(translate);
  }

  function handleScroll({ axes, el: elScrolled }: Scroll$Next): void {
    const position = axis === 'x' ? axes.x : axes.y;

    function calculateTranslate(currentPosition = 0) {
      const perspective = distance / 500 || 1;
      const start = currentPosition - gap > 0 ? currentPosition - gap : 0;

      return start / perspective;
    }

    function isElOnScreen({ translate = 0 }) {
      const { bottom, top } = elScrolled.getBoundingClientRect();
      const visualBottom = bottom - translate;
      const topOnScreen = top >= 0;
      const bottomOnScreen = visualBottom >= 0;
      const onScreen = topOnScreen || bottomOnScreen;

      return onScreen;
    }

    function getTranslate() {
      if (position < gap) {
        return calculateTranslate(0);
      }

      return calculateTranslate(position);
    }

    const translate = getTranslate();

    if (!isElOnScreen({ translate })) return;

    doParallax(translate);
  }

  function bindScroll() {
    const observable = Scroll$({
      el: elRelative as ScrollableElement,
    });

    observable.subscribe(handleScroll);
  }

  bindScroll();
}

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector('[data-ovo-parallax][data-ovo-auto]');

  if (!flag) return;

  parallax({});
}

autoStart();
