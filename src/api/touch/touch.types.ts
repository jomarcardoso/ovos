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

export interface TouchRelatives$ {
  axes: Axes;
  startAxes: Axes;
  breakpointAxes: Axes;
  angle: number;
}

export type Touch$ = {
  type: TouchEventType;
  axes: Axes;
  startAxes: Axes;
  relatives: TouchRelatives$;
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
  grab$: Observable<Touch$>;
  drop$: Observable<Touch$>;
  drag$: Observable<Touch$>;
}
