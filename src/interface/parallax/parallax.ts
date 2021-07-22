import './parallax.scss';
import { Scroll$, Scroll$Next } from '../../api/scroll';
import { ParallaxArgs } from './parallax.types';

export default function parallax({
  el = document.querySelector('[data-ovo-parallax]') as HTMLElement,
  elContent: externalElContent,
  callback,
  distance: externalDistance = 0,
  elRelative = document,
  gap: externalGap = 0,
  axis = 'y',
}: ParallaxArgs): void {
  let elContent = externalElContent;

  const distance =
    externalDistance || Number(el.dataset.ovoParallaxDistance) || 1000;
  const gap = externalGap || Number(el.dataset.ovoParallaxGap) || 0;

  if (!elContent) {
    elContent =
      (el.querySelector('[data-ovo-parallax="content"]') as HTMLElement) ??
      (el.firstElementChild as HTMLElement);
  }

  if (!elContent) return;

  elContent.style.willChange = 'transform';

  function doParallax(translateY = 0) {
    if (!elContent) return;

    elContent.style.transform = `translate3d(0, ${translateY}px, 0)`;
    if (callback) callback(translateY);
  }

  function handleScroll({ axes, el: elScrolled }: Scroll$Next): void {
    const position = axis === 'x' ? axes.x : axes.y;

    function calculateTranslateY(currentPosition = 0) {
      const perspective = distance / 500 || 1;
      const start = currentPosition - gap > 0 ? currentPosition - gap : 0;

      return start / perspective;
    }

    function isElOnScreen({ translateY = 0 }) {
      const { bottom, top } = elScrolled.getBoundingClientRect();
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
    const observable = Scroll$({
      el: elRelative,
    });

    observable.subscribe(handleScroll);
  }

  bindScroll();
}

function autoStart() {
  const flag = document.querySelector('[data-ovo-parallax][data-ovo-auto]');

  if (!flag) return;

  parallax({});
}

autoStart();
