import './carousel.scss';
import scrollSpy, { createScrollSpyItem } from '../scroll-spy/scroll-spy';
import { Method } from '../scroll-spy/types/scroll-spy.type';
import { Axis } from '../../types/types';
import { CreateSlide, Carousel, CarouselFitType } from './types/carousel.type';

interface CustomCSSStyleDeclaration extends CSSStyleDeclaration {
  scrollSnapAlign: string;
}

const createSlide: CreateSlide = ({ elSlide, elDot, onActivate }) => {
  const scrollSpyItem = createScrollSpyItem({
    elMenu: elDot,
    elContent: elSlide,
  });

  function activate() {
    scrollSpyItem.activate();

    if (!onActivate) return;

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

const carousel: Carousel = ({
  el = document.querySelector('[data-carousel="carousel"]') as HTMLElement,
  autoplayTime: extAutoplayTime = 0,
  currentSlide: extCurrentSlide = 0,
}) => {
  if (!el) return;

  function getAutoPlayTime() {
    if (!el) return 0;

    return Number(el.dataset.carouselAutoplay) ?? extAutoplayTime;
  }

  let currentSlide = extCurrentSlide;
  const autoplayTime = getAutoPlayTime();
  const elSlider = el.querySelector('[data-carousel="slider"]') as HTMLElement;
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

  const type = detectType();

  const [elArrowLeft, elArrowRight] = elArrows;
  let mouseOver = false;
  let intervalAutoplay: null | ReturnType<typeof setTimeout> = null;

  function removeNotUsedDotsFromHTML(toRemove = 0) {
    const lastPosition = elDots.length - 1;

    for (let i = 0; i < toRemove; i += 1) {
      elDots[lastPosition - i]?.remove();
    }
  }

  function removeNotUsedSlides() {
    if (type !== CarouselFitType.BOX) return;

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

  function getIndexSlideAtRight(index = 0) {
    return (((index + 1) % quantity) + quantity) % quantity;
  }

  function changeArrowsLink(index = 0) {
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

  function handleActivateSlide(index = 0) {
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

  function scrollTo(index = 0) {
    const elTarget = elSlides[index];

    if (!elTarget) return;
    const position = elTarget.offsetLeft;
    let scrollLeft = position;

    if (type === CarouselFitType.CENTER) {
      const slideWidth = elTarget.offsetWidth;
      const sliderWidth = elSlider.offsetWidth;

      scrollLeft = position - (sliderWidth / 2 - slideWidth / 2);
    }

    // eslint-disable-next-line no-param-reassign
    elSlider.scrollLeft = scrollLeft;
    currentSlide = index;
  }

  function autoplay() {
    if (!autoplayTime) return;

    if (intervalAutoplay) {
      clearInterval(intervalAutoplay);
    }

    if (mouseOver) return;

    intervalAutoplay = setInterval(() => {
      const nextSlide = getIndexSlideAtRight(currentSlide);

      scrollTo(nextSlide);
    }, autoplayTime);
  }

  function scrollToAndAutoplay(index = 0) {
    scrollTo(index);
    autoplay();
  }

  function handleClickAnchor(e: Event) {
    e.preventDefault();

    const anchorTarget = e.target as HTMLAnchorElement;

    if (
      !anchorTarget ||
      !anchorTarget.attributes ||
      !anchorTarget.attributes.getNamedItem
    )
      return;

    const target = anchorTarget.attributes.getNamedItem('href')?.value;

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
      method: type === CarouselFitType.BOX ? Method.current : Method.closest,
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
    if (type === CarouselFitType.BOX) {
      elSlides.forEach((elSlide) => {
        const style = elSlide.style as CustomCSSStyleDeclaration;

        // eslint-disable-next-line no-param-reassign
        style.scrollSnapAlign = 'start';
      });
    } else {
      elSlides.forEach((elSlide) => {
        const style = elSlide.style as CustomCSSStyleDeclaration;

        // eslint-disable-next-line no-param-reassign
        style.scrollSnapAlign = 'center';
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

function autoStart() {
  const flag = document.querySelector(
    '[data-carousel="carousel"][data-ovo-auto]',
  );

  if (!flag) return;

  carousel({});
}

autoStart();

export default carousel;
