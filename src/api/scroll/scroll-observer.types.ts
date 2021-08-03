import { ScrollableElement } from '../../utilities/scroll';
import { Axes, Axis, Direction, Positions } from '../../utilities/axis';

export interface ScrollObserverArgs {
  el?: ScrollableElement;
  gap?: Axes;
  debounce?: number;
  limit?: Positions;
  maxRelative?: Partial<Positions>;
  onlyAxis?: Axis;
}

export interface Scroll$Next {
  event: UIEvent;
  axes: Axes;
  relativeAxes: Axes;
  el: HTMLElement;
  direction: Direction;
}
