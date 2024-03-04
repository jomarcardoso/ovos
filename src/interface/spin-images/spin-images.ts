import './spin-images.scss';
import { touch, Touch$ } from '../../api/touch';

function setSpriteSize({
  elSprite,
  quantityFrames = 0,
}: {
  elSprite: Element;
  quantityFrames: number;
}) {
  const htmlSprite = elSprite as HTMLElement;

  htmlSprite.style.width = `${100 * quantityFrames}%`;
}

function getFramePersentSize(quantityFrames = 0) {
  return 100 / quantityFrames;
}

function activateSprite(el: Element) {
  el.classList.add('is-loaded');
}

function rotate({
  elSprite,
  rotated = 0,
}: {
  elSprite: HTMLElement;
  rotated: number;
}) {
  elSprite.style.transform = `translateX(${(-100 + rotated) % 100}%)`;
}

interface SpinImagesArgs {
  quantityFrames?: number;
  el?: HTMLElement;
  autoRotateTime?: number;
  clockwise?: boolean;
  debounce?: number;
  onGrab?(): void;
  onDrop?(): void;
}

type SpinImages = (args: SpinImagesArgs) => void;

export const spinImages: SpinImages = ({
  quantityFrames: externalQuantityFrames = 0,
  el = document.querySelector('[data-ovo-spin-images]') as HTMLElement,
  autoRotateTime = 0,
  clockwise = true,
  onGrab,
  onDrop,
  debounce: externalDebounce = 0,
}) => {
  if (!el) return;

  const elSprite: Element | null = el.querySelector(
    '[data-ovo-spin-images="sprite"]',
  );

  if (!elSprite) return;

  const quantityFrames =
    externalQuantityFrames || Number(elSprite.childElementCount) || 1;

  const debounce = externalDebounce || Number(el.dataset.ovoDebounce) || 0;

  let frameSize = 0;
  let rotated = 0;

  if (!quantityFrames || !el) return;

  function onSpriteLoaded(cb: () => void) {
    cb();
  }

  function rotateCounterclockwise() {
    if (!elSprite) return;

    rotated = (rotated + frameSize) % 100;
    rotate({ elSprite: elSprite as HTMLElement, rotated });
  }

  function rotateClockwise() {
    rotated = (rotated - frameSize) % 100;
    rotate({ elSprite: elSprite as HTMLElement, rotated });
  }

  function autoRotate() {
    const rotateWise = clockwise ? rotateClockwise : rotateCounterclockwise;

    setInterval(() => {
      rotateWise();
    }, autoRotateTime);
  }

  function handleGrab() {
    if (!el) return;

    el.classList.add('is-active');
    if (onGrab) onGrab();
  }

  function handleDrop() {
    if (!el) return;

    el.classList.remove('is-active');
    if (onDrop) onDrop();
  }

  onSpriteLoaded(() => {
    activateSprite(el);

    if (autoRotateTime) {
      autoRotate();
    }
  });

  setSpriteSize({
    elSprite: elSprite as Element,
    quantityFrames,
  });
  frameSize = getFramePersentSize(quantityFrames);

  if (!el) return;

  const touch$ = touch({
    el,
    gap: {
      x: debounce,
      y: debounce,
    },
    onlyAxis: 'x',
  });

  touch$.grab$.subscribe(handleGrab);

  touch$.drop$.subscribe(handleDrop);

  touch$.drag$.subscribe((dragEvent: Touch$) => {
    if (
      dragEvent.direction === 'left' ||
      dragEvent.direction === 'down-left' ||
      dragEvent.direction === 'up-left'
    ) {
      rotateClockwise();
    }

    if (
      dragEvent.direction === 'right' ||
      dragEvent.direction === 'down-right' ||
      dragEvent.direction === 'up-right'
    ) {
      rotateCounterclockwise();
    }
  });
};

function autoStart() {
  if (typeof document === 'undefined') return;

  const el = document.querySelector('[data-ovo-spin-images][data-ovo-auto]');

  if (el) {
    spinImages({});
  }
}

autoStart();
