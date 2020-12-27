import { ScrollSpyItem } from '../../scroll-spy/types/scroll-spy.type';

interface SlideArgs {
  elSlide: HTMLElement;
  elDot: HTMLAnchorElement;
  onActivate(): void;
}

export type CreateSlide = (args: SlideArgs) => ScrollSpyItem;

export enum CarouselFitType {
  BOX,
  CENTER,
}

interface CarouselArgs {
  el?: HTMLElement;
  autoplayTime?: number;
  currentSlide?: number;
  type: CarouselFitType;
}

export type Carousel = (args: CarouselArgs) => void;
