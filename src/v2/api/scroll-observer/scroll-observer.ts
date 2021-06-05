// @ts-expect-error rxjs issue
import { fromEvent, Observable } from 'rxjs';
// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, filter, map, scan } from 'rxjs/operators';
import { isOnGapOfEl } from '../../../utilities/position/position.utilities';
import { ScrollableElement } from '../../utilities/scroll';
import { getScrollingEl, getScrollPosition } from '../../utilities/element';
import {
  Axes,
  getDirection,
  Direction,
  isOnGap,
  AXES,
  Positions,
  POSITIONS,
} from '../../utilities/axis';

interface Args {
  el?: ScrollableElement;
  gap?: Axes;
  debounce?: number;
  limit?: Positions;
}

export interface Scroll$Next {
  event: UIEvent;
  axes: Axes;
  el: HTMLElement;
  direction: Direction;
}

function Scroll$({
  el = document,
  gap = AXES,
  debounce = 0,
  limit = POSITIONS,
}: Args): Observable<Scroll$Next> {
  const scrollingEl = getScrollingEl(el as HTMLElement & HTMLDocument);

  const scroll$ = fromEvent(
    el as unknown as JQueryStyleEventEmitter<UIEvent, UIEvent>,
    'scroll',
  );

  type ScrollAxes$ = Omit<Scroll$Next, 'direction'>;

  const scrollAxes$ = scroll$.pipe(
    map<UIEvent, ScrollAxes$>((event) => {
      return {
        el: scrollingEl,
        event,
        axes: getScrollPosition({ el: scrollingEl }),
      };
    }),
  );

  let scrollDirection$ = scrollAxes$.pipe(
    map<ScrollAxes$, Scroll$Next>((scrollAxesObserver) => {
      return {
        ...scrollAxesObserver,
        direction: Direction.NONE,
      };
    }),
    scan<Scroll$Next, Scroll$Next>((acc, curr) => {
      return {
        ...curr,
        direction: getDirection({
          axes: curr.axes,
          lastAxes: acc.axes,
        }),
      };
    }),
  );

  interface ScrollGapTemp$ {
    last: Scroll$Next;
    current: Scroll$Next;
  }

  if (gap.x || gap.y) {
    scrollDirection$ = scrollDirection$.pipe(
      map<Scroll$Next, ScrollGapTemp$>((scrollObserver) => {
        return {
          current: scrollObserver,
          last: scrollObserver,
        };
      }),
      scan<ScrollGapTemp$, ScrollGapTemp$>((acc, curr) => {
        const onGap = isOnGap({
          axes: acc.current.axes,
          gap,
          lastAxes: acc.last.axes,
        });

        return {
          current: curr.current,
          last: onGap ? acc.last : curr.current,
        };
      }),
      filter<ScrollGapTemp$>(({ current, last }) => {
        return !isOnGap({
          axes: current.axes,
          gap,
          lastAxes: last.axes,
        });
      }),
      map<ScrollGapTemp$, Scroll$Next>((scrollObserver) => {
        return scrollObserver.current;
      }),
    );
  }

  if (debounce) {
    scrollDirection$ = scrollDirection$.pipe(debounceTime(debounce));
  }

  if (limit.bottom || limit.left || limit.right || limit.top) {
    scrollDirection$ = scrollDirection$.pipe(
      filter<Scroll$Next>((scrollObserver) => {
        return !isOnGapOfEl({
          el: scrollObserver.el,
          gap: limit,
          position: scrollObserver.axes,
        });
      }),
    );
  }

  return scrollDirection$;
}

export default Scroll$;
