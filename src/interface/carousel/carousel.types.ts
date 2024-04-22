import { ScrollSpyItem } from '../scrollspy/scrollspy.types';

interface SlideArgs {
  elSlide?: HTMLElement;
  elDot?: HTMLAnchorElement;
  onActivate?(): void;
}

export type CreateSlide = (args: SlideArgs) => ScrollSpyItem;

export type CarouselFitType = 'BOX' | 'CENTER';

interface CarouselArgs {
  el?: HTMLElement;
  autoplayTime?: number;
  currentSlide?: number;
}

export type Carousel = (args: CarouselArgs) => void;
