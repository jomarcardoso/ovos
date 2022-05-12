// eslint-disable-next-line import/no-unresolved
import { Observable } from 'rxjs';
import { Axes, Axis, Direction, Positions } from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';

export type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

export type EventWithType = {
  event: TouchEvent | MouseEvent;
  type: TouchEventType;
};
export type TouchEventWithType = { event: TouchEvent; type: TouchEventType };
export type MouseEventWithType = { event: MouseEvent; type: TouchEventType };

export type Touch$Next = {
  type: TouchEventType;
  axes: Axes;
  startAxes: Axes;
  relativeAxes: Axes;
  relativeRadixAxes: Axes;
  relativeStartAxes: Axes;
  relativeBreakpointAxes: Axes;
  direction: Direction;
};

export interface TouchArgs {
  el?: ScrollableElement;
  gap?: Axes;
  onlyDirections?: Array<Direction>;
  takeLimit?: number;
  onlyOnChangeDirection?: boolean;
  onlyAxis?: Axis;
  stopGrowingAt?: Positions | number;
}

export interface TouchObservableReturn {
  grab$: Observable<Touch$Next>;
  drop$: Observable<Touch$Next>;
  drag$: Observable<Touch$Next>;
}
