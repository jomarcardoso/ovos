import {
  Axes,
  Element,
  Position,
  OnScrollArgs,
  Direction,
} from '../../../types/types';

interface ScrollEventArgs {
  el?: Element;
  onScroll(onScrollArgs: OnScrollArgs): void;
  onlyOnChangedDirection?: boolean;
  onlyOnDirection?: boolean;
  onlyOnWhenInOrOutTheRegion?: Position;
  gap?: Partial<Position>;
  debounce?: Partial<Axes>;
  limit?: Position;
  lazyTime?: number;
  delay?: Axes;
}

interface ScrollEventsReturn extends Partial<ScrollEventArgs> {
  lastScrolledPosition: Axes;
  scrollingEl: Element;
}

export type ScrollEvents = (args: ScrollEventArgs) => ScrollEventsReturn;

interface IsToScrollArgs {
  changedDirection: boolean;
  scrollPosition: Axes;
  direction: Direction;
}

export type IsToScroll = (args: IsToScrollArgs) => boolean;
