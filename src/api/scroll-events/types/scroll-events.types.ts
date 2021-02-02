import { Axes, Element, Position, OnScrollArgs } from '../../../types/types';

interface ScrollEventArgs {
  el?: Element;
  onScroll(onScrollArgs: OnScrollArgs): void;
  onlyOnChangedDirection?: boolean;
  onlyOnDirection?: boolean;
  onlyOnWhenInOrOutTheRegion?: Position;
  gap?: Partial<Position>;
  debounce?: Axes;
  limit?: Position;
  lazyTime?: number;
  delay?: Axes;
}

interface ScrollEventsReturn extends Partial<ScrollEventArgs> {
  lastScrolledPosition: Axes;
  scrollingEl: Element;
}

export type ScrollEvents = (args: ScrollEventArgs) => ScrollEventsReturn;
