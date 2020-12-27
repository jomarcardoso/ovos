import './carousel.scss';
import scrollSpy, {
  createScrollSpyItem,
  ScrollSpyItem,
  Method,
} from '../scroll-spy/scroll-spy';
import { Axis } from '../../types/types';

interface SlideArgs {
  elSlide: HTMLElement;
  elDot: HTMLAnchorElement;
  onActivate(): void;
}

type Slide = (args: SlideArgs) => ScrollSpyItem;

const createSlide: Slide = ({ elSlide, elDot, onActivate }) => {
  const scrollSpyItem = createScrollSpyItem({
    elMenu: elDot,
    elContent: elSlide,
  });

  function activate() {
    scrollSpyItem.activate();
    onActivate();
  }

  function deActivate() {
    scrollSpyItem.deActivate();
  }

  return {
    activate,
    deActivate,
    content: elSlide,
  };
};

enum CarouselFitType {
  BOX,
  CENTER,
}

interface CarouselArgs {
  el?: HTMLElement;
  autoplayTime?: number;
  currentSlide?: number;
  type: CarouselFitType;
}

type Carousel = (args: CarouselArgs) => void;

const carousel: Carousel = ({
  el = document.querySelector('[data-carousel="carousel"]'),
  autoplayTime = 0,
  currentSlide = 0,
  type,
}) => {
  if (!el) return;

  const elSlider: HTMLElement = el.querySelector('[data-carousel="slider"]');
  const elSlides: Array<HTMLElement> = Array.from(
    el.querySelectorAll('[data-carousel="slide"]'),
  );
  const elDots: Array<HTMLAnchorElement> = Array.from(
    el.querySelectorAll('[data-carousel="dot"]'),
  );
  const elArrows: Array<HTMLAnchorElement> = Array.from(
    el.querySelectorAll('[data-carousel="arrow"]'),
  );

  function detectType(): CarouselFitType {
    const firstSlideWidth = elSlides[0].offsetWidth;

    const halfSliderWidth = elSlider.offsetWidth / 2;
    const firstSlideSmallerThanHalfSlider =
      firstSlideWidth <= halfSliderWidth + 1;

    if (firstSlideSmallerThanHalfSlider) {
      return CarouselFitType.BOX;
    }

    return CarouselFitType.CENTER;
  }

  const internalType = type || detectType();

  const [elArrowLeft, elArrowRight] = elArrows;
  let mouseOver = false;
  let intervalAutoplay = null;

  function removeNotUsedDotsFromHTML(toRemove = 0) {
    const lastPosition = elDots.length - 1;

    for (let i = 0; i < toRemove; i += 1) {
      elDots[lastPosition - i]?.remove();
    }
  }

  function removeNotUsedSlides() {
    if (internalType !== CarouselFitType.BOX) return;

    const firstSlideWidth = elSlides[0].offsetWidth;
    const sliderWidth = elSlider.offsetWidth;
    const visibleSlides = sliderWidth / (firstSlideWidth - 1);
    const toRemove = Math.round(visibleSlides - 1);
    const totalSlides = elSlides.length;

    removeNotUsedDotsFromHTML(toRemove);

    elSlides.splice(totalSlides - toRemove, toRemove);
    elDots.splice(totalSlides - toRemove, toRemove);
  }

  const quantity = elSlides.length;

  function getIndexSlideAtRight(index) {
    return (((index + 1) % quantity) + quantity) % quantity;
  }

  function changeArrowsLink(index) {
    const slideAtLeft =
      elSlides[(((index - 1) % quantity) + quantity) % quantity];
    const slideAtRight = elSlides[getIndexSlideAtRight(index)];

    if (slideAtLeft) {
      elArrowLeft.href = `#${slideAtLeft.id}`;
    } else {
      elArrowLeft.href = '#';
    }
    if (slideAtRight) {
      elArrowRight.href = `#${slideAtRight.id}`;
    } else {
      elArrowRight.href = '#';
    }
  }

  function handleActivateSlide(index) {
    changeArrowsLink(index);
  }

  function createSlides() {
    return elSlides.map((elSlide, index) =>
      createSlide({
        elDot: elDots[index],
        elSlide,
        onActivate: () => handleActivateSlide(index),
      }),
    );
  }

  function scrollTo(index) {
    const elTarget = elSlides[index];

    if (!elTarget) return;
    const position = elTarget.offsetLeft;
    let scrollLeft = position;

    if (internalType === CarouselFitType.CENTER) {
      const slideWidth = elTarget.offsetWidth;
      const sliderWidth = elSlider.offsetWidth;

      scrollLeft = position - (sliderWidth / 2 - slideWidth / 2);
    }

    // eslint-disable-next-line no-param-reassign
    elSlider.scrollLeft = scrollLeft;
    // eslint-disable-next-line no-param-reassign
    currentSlide = index;
  }

  function autoplay() {
    if (!autoplayTime) return;

    clearInterval(intervalAutoplay);

    if (mouseOver) return;

    intervalAutoplay = setInterval(() => {
      const nextSlide = getIndexSlideAtRight(currentSlide);

      scrollTo(nextSlide);
    }, autoplayTime);
  }

  function scrollToAndAutoplay(index) {
    scrollTo(index);
    autoplay();
  }

  function handleClickAnchor(e) {
    e.preventDefault();
    const target = e.currentTarget.attributes.href.value;

    if (!target || target === '#') return;
    const index = elSlides.findIndex(({ id }) => `#${id}` === target);

    scrollToAndAutoplay(index);
  }

  function showArrows() {
    elArrows.forEach((elArrow) => elArrow.classList.add('is-arrow--loaded'));
  }

  function handleChangeSlide() {
    const slides = createSlides();

    showArrows();

    scrollSpy({
      list: slides,
      elRelative: elSlider,
      axis: Axis.X,
      method:
        internalType === CarouselFitType.BOX ? Method.current : Method.closest,
    });
  }

  function handleMouseOver() {
    mouseOver = true;
    autoplay();
  }

  function handleMouseOut() {
    mouseOver = false;
    autoplay();
  }

  function bindEvents() {
    const elAnchors = [...Array.from(elDots), ...Array.from(elArrows)];

    elAnchors.forEach((elAchor) =>
      elAchor.addEventListener('click', handleClickAnchor),
    );
    elSlider.addEventListener('mouseover', handleMouseOver);
    elSlider.addEventListener('mouseout', handleMouseOut);
  }

  function startOnCurrentSlide() {
    if (internalType === CarouselFitType.BOX) {
      elSlides.forEach((elSlide) => {
        // eslint-disable-next-line no-param-reassign
        elSlide.style.scrollSnapAlign = 'start';
      });
    } else {
      elSlides.forEach((elSlide) => {
        // eslint-disable-next-line no-param-reassign
        elSlide.style.scrollSnapAlign = 'center';
      });
    }

    scrollToAndAutoplay(currentSlide);
  }

  removeNotUsedSlides();
  bindEvents();
  handleChangeSlide();
  startOnCurrentSlide();

  elSlider.dispatchEvent(new Event('scroll'));
};

export default carousel;
