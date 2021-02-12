import './spin-images.scss';
import touchEvents from '../../api/touch-events/touch-events';
import scrollEvents from '../../api/scroll-events/scroll-events';

const COMPONENT_NAME = 'spin-images';

function setSpriteSize({
  elSprite,
  quantityFrames = 0,
}: {
  elSprite: HTMLElement;
  quantityFrames: number;
}) {
  elSprite.style.width = `${100 * quantityFrames}%`; // eslint-disable-line no-param-reassign
}

function getFramePersentSize(quantityFrames = 0) {
  return 100 / quantityFrames;
}

function activateSprite(el: HTMLElement) {
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
  quantityFrames: number;
  el?: HTMLElement;
  autoRotateTime?: number;
  clockwise?: boolean;
  rotateOnScrollDebounce: number;
  onGrab?(): void;
  onDrop?(): void;
}

type SpinImages = (args: SpinImagesArgs) => void;

const spinImages: SpinImages = ({
  quantityFrames = 1,
  el = document.querySelector('[data-jo="spinimages"]'),
  autoRotateTime = 0,
  clockwise = true,
  onGrab,
  onDrop,
  rotateOnScrollDebounce = 0,
}) => {
  const elSprite: HTMLElement = el.querySelector(
    '[data-jo="spinimages-sprite"]',
  );
  let frameSize = 0;
  let rotated = 0;

  if (!quantityFrames)
    return console.error(
      new Error(`${COMPONENT_NAME}: quantidade de frames não recebida`),
    );
  if (!el)
    return console.error(
      new Error(`${COMPONENT_NAME}: elemento inicial não recebido`),
    );

  function onSpriteLoaded(cb: () => void) {
    cb();
    // if (elSprite.complete) {
    //   cb();
    //   return;
    // }

    // elSprite.addEventListener('load', cb);
  }

  function rotateCounterclockwise() {
    rotated = (rotated + frameSize) % 100;
    rotate({ elSprite, rotated });
  }

  function rotateClockwise() {
    rotated = (rotated - frameSize) % 100;
    rotate({ elSprite, rotated });
  }

  function autoRotate() {
    const rotateWise = clockwise ? rotateClockwise : rotateCounterclockwise;

    setInterval(() => {
      rotateWise();
    }, autoRotateTime);
  }

  function bindScrollEvent() {
    scrollEvents({
      debounce: {
        x: rotateOnScrollDebounce,
      },
      onScroll: rotateClockwise,
    });
  }

  function handleGrab() {
    el.classList.add('is-active');
    if (onGrab) onGrab();
  }

  function handleDrop() {
    el.classList.remove('is-active');
    if (onDrop) onDrop();
  }

  onSpriteLoaded(() => {
    activateSprite(el);

    if (autoRotateTime) {
      autoRotate();
    }

    if (rotateOnScrollDebounce) {
      bindScrollEvent();
    }
  });

  setSpriteSize({ elSprite, quantityFrames });
  frameSize = getFramePersentSize(quantityFrames);

  touchEvents({
    el,
    onDragLeft: rotateClockwise,
    onDragRight: rotateCounterclockwise,
    onGrab: handleGrab,
    onDrop: handleDrop,
  });

  return {
    rotateClockwise,
    rotateAnticlockwise: rotateCounterclockwise,
  };
};

export default spinImages;
