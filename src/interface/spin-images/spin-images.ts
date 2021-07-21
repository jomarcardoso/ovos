import './spin-images.scss';
import { Direction } from '../../utilities/axis';
import { Touch$Next, Touch$ } from '../../api/touch';

function setSpriteSize({
  elSprite,
  quantityFrames = 0,
}: {
  elSprite: Element;
  quantityFrames: number;
}) {
  const htmlSprite = elSprite as HTMLElement;

  // eslint-disable-next-line no-param-reassign
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
  elSprite.style.transform = `translateX(${(-100 + rotated) % 100}%)`; // eslint-disable-line no-param-reassign
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

const spinImages: SpinImages = ({
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

  const touch$ = Touch$({
    el,
    gap: {
      x: debounce,
      y: debounce,
    },
  });

  touch$.grab$.subscribe(handleGrab);

  touch$.drop$.subscribe(handleDrop);

  touch$.drag$.subscribe((dragEvent: Touch$Next) => {
    if (
      dragEvent.direction === Direction.LEFT ||
      dragEvent.direction === Direction.DOWN_LEFT ||
      dragEvent.direction === Direction.UP_LEFT
    ) {
      rotateClockwise();
    }

    if (
      dragEvent.direction === Direction.RIGHT ||
      dragEvent.direction === Direction.DOWN_RIGHT ||
      dragEvent.direction === Direction.UP_RIGHT
    ) {
      rotateCounterclockwise();
    }
  });
};

function autoStart() {
  const el = document.querySelector('[data-ovo-spin-images][data-ovo-auto]');

  if (el) {
    spinImages({});
  }
}

autoStart();

export default spinImages;
