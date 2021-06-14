// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';
import {
  AXES,
  Axes,
  Direction,
  getDirection,
  isOnGap,
} from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';

type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

interface GrabEvent {
  axes: Axes;
  type: TouchEventType;
}

interface DropEvent extends GrabEvent {
  relativeAxes: Axes;
  direction: Direction;
}

interface DragEvent extends DropEvent {
  startAxes: Axes;
  breakpointAxes: Axes;
}

const GRAB_EVENT: GrabEvent = {
  axes: AXES,
  type: 'NONE',
};

const DROP_EVENT: DropEvent = {
  ...GRAB_EVENT,
  relativeAxes: AXES,
  direction: Direction.NONE,
};

const DRAG_EVENT: DragEvent = {
  ...DROP_EVENT,
  breakpointAxes: AXES,
  startAxes: AXES,
};

interface Args {
  el?: ScrollableElement;
  gap?: Axes;
}

interface Touch$Next {
  grab$: Observable<GrabEvent>;
  drop$: Observable<DropEvent>;
  drag$: Observable<DragEvent>;
}

export default function Touch$({
  el = document,
  gap = AXES,
}: Args): Touch$Next {
  function grabMouseOperator(type: TouchEventType) {
    return map<MouseEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.screenX,
          y: event.screenY,
        },
        type,
      };
    });
  }

  function grabTouchOperator(type: TouchEventType) {
    return map<TouchEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.changedTouches[0].screenX,
          y: event.changedTouches[0].screenY,
        },
        type,
      };
    });
  }

  const mouseDown$ = fromEvent(el, 'mousedown').pipe(
    grabMouseOperator('START'),
  );

  const touchStart$ = fromEvent(el, 'touchstart').pipe(
    grabTouchOperator('START'),
  );

  const mouseUp$ = fromEvent(document, 'mouseup').pipe(
    grabMouseOperator('END'),
  );

  const touchEnd$ = fromEvent(document, 'touchend').pipe(
    grabTouchOperator('END'),
  );

  const mouseMove$ = fromEvent(el, 'mousemove').pipe(grabMouseOperator('MOVE'));

  const touchMove$ = fromEvent(el, 'touchmove').pipe(grabTouchOperator('MOVE'));

  const grab$ = new Subject<GrabEvent>();
  const dropSubject$ = new Subject<DropEvent>();
  const dragSubject$ = new Subject<DragEvent>();

  mouseDown$.subscribe(grab$);
  touchStart$.subscribe(grab$);

  mouseDown$.subscribe(dropSubject$);
  touchStart$.subscribe(dropSubject$);
  mouseUp$.subscribe(dropSubject$);
  touchEnd$.subscribe(dropSubject$);

  mouseUp$.subscribe(dragSubject$);
  touchEnd$.subscribe(dragSubject$);
  mouseMove$.subscribe(dragSubject$);
  touchMove$.subscribe(dragSubject$);
  mouseDown$.subscribe(dragSubject$);
  touchStart$.subscribe(dragSubject$);

  const drop$ = dropSubject$.pipe(
    scan<GrabEvent, DropEvent>((grabbed, newEvent) => {
      if (newEvent.type === 'START') {
        return {
          ...newEvent,
          relativeAxes: AXES,
          direction: Direction.NONE,
        };
      }

      return {
        ...newEvent,
        direction: Direction.NONE,
        relativeAxes: {
          x: newEvent.axes.x - grabbed.axes.x,
          y: newEvent.axes.x - grabbed.axes.y,
        },
      };
    }, DROP_EVENT),
    // copiado do scroll observer
    scan<DropEvent, DropEvent>((acc, curr) => {
      return {
        ...curr,
        direction: getDirection({
          axes: curr.axes,
          lastAxes: acc.axes,
        }),
      };
    }),
    filter<DropEvent>((newEvent) => newEvent.type === 'END'),
  );

  let drag$ = dragSubject$.pipe(
    scan<GrabEvent, DragEvent>((grabbed, newEvent) => {
      if (newEvent.type === 'START') {
        return {
          ...newEvent,
          direction: Direction.NONE,
          relativeAxes: AXES,
          startAxes: newEvent.axes,
          breakpointAxes: AXES,
        };
      }

      const relativeX = newEvent.axes.x - grabbed.startAxes.x;
      const relativeY = newEvent.axes.y - grabbed.startAxes.y;

      return {
        ...newEvent,
        direction: Direction.NONE,
        startAxes: {
          x: grabbed.startAxes.x,
          y: grabbed.startAxes.y,
        },
        relativeAxes: {
          x: relativeX,
          y: relativeY,
        },
        breakpointAxes: {
          x: Math.floor(relativeX / gap.x),
          y: Math.floor(relativeY / gap.y),
        },
      };
    }, DRAG_EVENT),
    // copiado do scroll observer
    scan<DragEvent, DragEvent>((acc, curr) => {
      return {
        ...curr,
        direction: getDirection({
          axes: curr.axes,
          lastAxes: acc.axes,
        }),
      };
    }),
    filter<DragEvent>(
      (newEvent) => newEvent.type === 'END' || newEvent.type === 'MOVE',
    ),
  );

  // unificar código com scroll observer
  if (gap.x || gap.y) {
    interface DragEventLast {
      last: DragEvent;
      current: DragEvent;
    }

    drag$ = drag$.pipe(
      map<DragEvent, DragEventLast>((scrollObserver) => {
        return {
          current: scrollObserver,
          last: scrollObserver,
        };
      }),
      scan<DragEventLast, DragEventLast>((acc, curr) => {
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
      filter<DragEventLast>(({ current, last }) => {
        return !isOnGap({
          axes: current.axes,
          gap,
          lastAxes: last.axes,
        });
      }),
      map<DragEventLast, DragEvent>((scrollObserver) => {
        return scrollObserver.current;
      }),
    );
  }

  return {
    drop$,
    drag$,
    grab$,
  };
}
