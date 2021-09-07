import { fromEvent, Observable, pipe } from 'rxjs';
// eslint-disable-next-line import/no-unresolved
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, filter, map, scan } from 'rxjs/operators';
import { isNil } from 'lodash';
import {
  getScrollingEl,
  getScrollPosition,
  isOutOfLimit,
} from '../../utilities/element';
import {
  getDirection,
  Direction,
  isOnGap,
  AXES,
  POSITIONS,
} from '../../utilities/axis';
import { Scroll$Next, ScrollObserverArgs } from './scroll-observer.types';

function gapOperator(gap = AXES) {
  interface ScrollGapTemp$ {
    last: Scroll$Next;
    current: Scroll$Next;
  }

  return pipe(
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

function Scroll$({
  el = document,
  gap = AXES,
  debounce = 0,
  limit = POSITIONS,
  maxRelative = {
    bottom: undefined,
    left: undefined,
    right: undefined,
    top: undefined,
  },
}: ScrollObserverArgs): Observable<Scroll$Next> {
  const scrollingEl = getScrollingEl(el as HTMLElement & HTMLDocument);

  const scroll$ = fromEvent(
    el as unknown as JQueryStyleEventEmitter<UIEvent, UIEvent>,
    'scroll',
  );

  type ScrollAxes$ = Omit<Scroll$Next, 'direction'>;

  const scrollAxes$ = scroll$.pipe(
    map<UIEvent, ScrollAxes$>((event) => {
      const axes = getScrollPosition({ el: scrollingEl });

      return {
        el: scrollingEl,
        event,
        axes,
        relativeAxes: AXES,
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

  if (gap.x || gap.y) {
    scrollDirection$ = scrollDirection$.pipe(gapOperator(gap));
  }

  if (debounce) {
    scrollDirection$ = scrollDirection$.pipe(debounceTime(debounce));
  }

  if (limit.bottom || limit.left || limit.right || limit.top) {
    scrollDirection$ = scrollDirection$.pipe(
      filter<Scroll$Next>((scrollObserver) => {
        return !isOutOfLimit({
          el: scrollObserver.el,
          limit,
          axes: scrollObserver.axes,
        });
      }),
    );
  }

  scrollDirection$ = scrollDirection$.pipe(
    scan<Scroll$Next, Scroll$Next>((acc, curr) => {
      const xRelative = acc.relativeAxes.x + curr.axes.x - acc.axes.x;
      const yRelative = acc.relativeAxes.y + curr.axes.y - acc.axes.y;

      let x =
        !isNil(maxRelative.left) && xRelative < maxRelative.left
          ? maxRelative.left
          : xRelative;

      if (!isNil(maxRelative.right) && xRelative > maxRelative.right) {
        x = maxRelative.right;
      }

      let y =
        !isNil(maxRelative.top) && yRelative < maxRelative.top
          ? maxRelative.top
          : yRelative;

      if (!isNil(maxRelative.bottom) && yRelative > maxRelative.bottom) {
        y = maxRelative.bottom;
      }

      return {
        ...curr,
        relativeAxes: {
          x,
          y,
        },
      };
    }),
  );

  return scrollDirection$;
}

export default Scroll$;
