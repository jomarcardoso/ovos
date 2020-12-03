// import './carousel.scss';
import ScrollSpy, { ScrollSpyItem } from '@ovo/scroll-spy';

function Slide({ elSlide, elDot, onActivate }) {
  const scrollSpyItem = ScrollSpyItem(elDot, elSlide);

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
}

export default function Carousel({
  el = document.querySelector('[data-carousel="carousel"]'),
  elSlides = Array.from(document.querySelectorAll('[ data-carousel="slide"]')),
  elDots = Array.from(document.querySelectorAll('[ data-carousel="dot"]')),
  elArrows = Array.from(document.querySelectorAll('[ data-carousel="arrow"]')),
  autoplayTime = 0,
  currentSlide = 0,
} = {}) {
  const [elArrowLeft, elArrowRight] = elArrows;

  let mouseOver = false;
  let intervalAutoplay = 0;
  let _currentSlide = currentSlide;

  function getIndexSlideAtRight(index) {
    return (((index + 1) % 4) + 4) % 4;
  }

  function changeArrowsLink(index) {
    const slideAtLeft = elSlides[(((index - 1) % 4) + 4) % 4];
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
    return elSlides.map(
      (elSlide, index) =>
        new Slide({
          elDot: elDots[index],
          elSlide,
          onActivate: () => handleActivateSlide(index),
        })
    );
  }

  function autoplay() {
    if (!autoplayTime) return;

    clearInterval(intervalAutoplay);

    if (mouseOver) return;

    intervalAutoplay = setInterval(() => {
      const nextSlide = getIndexSlideAtRight(_currentSlide);
      scrollTo(nextSlide);
    }, autoplayTime);
  }

  function centralizeCurrentSlide() {
    console.log(_currentSlide, elSlides.length);
    const lastSlide = _currentSlide === elSlides.length - 1;
    const firstSlide = _currentSlide === 0;

    if (lastSlide) {
      console.log('last slide');
    }

    if (firstSlide) {
      console.log('first slide');
    }
  }

  function scrollTo(index) {
    const elTarget = elSlides[index];

    if (!elTarget) return;

    const position = elTarget.offsetLeft;

    el.scrollLeft = position; // eslint-disable-line no-param-reassign
    _currentSlide = index;
    centralizeCurrentSlide();
    autoplay();
  }

  function handleClickAnchor(e) {
    e.preventDefault();
    const target = e.currentTarget.attributes.href.value;
    if (!target || target === '#') return;

    const index = elSlides.findIndex(({ id }) => `#${id}` === target);
    scrollTo(index);
  }

  function showArrows() {
    elArrows.forEach((elArrow) => elArrow.classList.add('is-loaded'));
  }

  function handleChangeSlide() {
    const slides = createSlides();
    showArrows();

    ScrollSpy(slides, {
      elRelative: el,
      axis: 'x',
      method: 'closest',
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
    const elAnchors = [...elDots, ...elArrows];

    elAnchors.forEach((elAchor) => {
      elAchor.addEventListener('click', handleClickAnchor);
    });
    el.addEventListener('mouseover', handleMouseOver);
    el.addEventListener('mouseout', handleMouseOut);
  }

  function startOnCurrentSlide() {
    scrollTo(_currentSlide);
  }

  bindEvents();
  handleChangeSlide();
  autoplay();
  startOnCurrentSlide();
}
