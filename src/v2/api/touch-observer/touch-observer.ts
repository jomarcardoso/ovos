// @ts-expect-error rxjs issue
// eslint-disable-next-line import/no-unresolved
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';
import { AXES, Axes } from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';

type TouchEventType = 'START' | 'MOVE' | 'END' | 'NONE';

interface GrabEvent {
  axes: Axes;
  type: TouchEventType;
}

interface DropEvent extends GrabEvent {
  relativeAxes: Axes;
}

interface DragEvent extends DropEvent {
  startAxes: Axes;
}

const GRAB_EVENT: GrabEvent = {
  axes: AXES,
  type: 'NONE',
};

const DROP_EVENT: DropEvent = {
  ...GRAB_EVENT,
  relativeAxes: AXES,
};

const DRAG_EVENT: DragEvent = {
  ...DROP_EVENT,
  startAxes: AXES,
};

interface Args {
  el?: ScrollableElement;
}

interface Touch$Next {
  grab$: Observable<GrabEvent>;
  drop$: Observable<DropEvent>;
  drag$: Observable<DragEvent>;
}

export default function Touch$({
  el = document,
}: // safeX = 20,
// safeY = 20,
Args): Touch$Next {
  const mouseDown$ = fromEvent(el, 'mousedown').pipe(
    map<MouseEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.screenX,
          y: event.screenY,
        },
        type: 'START',
      };
    }),
  );

  const touchStart$ = fromEvent(el, 'touchstart').pipe(
    map<TouchEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.changedTouches[0].screenX,
          y: event.changedTouches[0].screenY,
        },
        type: 'START',
      };
    }),
  );

  const mouseUp$ = fromEvent(document, 'mouseup').pipe(
    map<MouseEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.screenX,
          y: event.screenY,
        },
        type: 'END',
      };
    }),
  );

  const touchEnd$ = fromEvent(document, 'touchend').pipe(
    map<TouchEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.changedTouches[0].screenX,
          y: event.changedTouches[0].screenY,
        },
        type: 'END',
      };
    }),
  );

  const mouseMove$ = fromEvent(el, 'mousemove').pipe(
    map<MouseEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.screenX,
          y: event.screenY,
        },
        type: 'MOVE',
      };
    }),
  );

  const touchMove$ = fromEvent(el, 'touchmove').pipe(
    map<TouchEvent, GrabEvent>((event) => {
      return {
        axes: {
          x: event.changedTouches[0].screenX,
          y: event.changedTouches[0].screenY,
        },
        type: 'MOVE',
      };
    }),
  );

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
        };
      }

      return {
        ...newEvent,
        relativeAxes: {
          x: newEvent.axes.x - grabbed.axes.x,
          y: newEvent.axes.x - grabbed.axes.y,
        },
      };
    }, DROP_EVENT),
    filter<DragEvent>((newEvent) => newEvent.type === 'END'),
  );

  const drag$ = dragSubject$.pipe(
    scan<GrabEvent, DragEvent>((grabbed, newEvent) => {
      if (newEvent.type === 'START') {
        return {
          ...newEvent,
          relativeAxes: AXES,
          startAxes: newEvent.axes,
        };
      }

      return {
        ...newEvent,
        startAxes: {
          x: grabbed.startAxes.x,
          y: grabbed.startAxes.y,
        },
        relativeAxes: {
          x: newEvent.axes.x - grabbed.startAxes.x,
          y: newEvent.axes.y - grabbed.startAxes.y,
        },
      };
    }, DRAG_EVENT),
    filter<DragEvent>(
      (newEvent) => newEvent.type === 'END' || newEvent.type === 'MOVE',
    ),
  );

  return {
    drop$,
    drag$,
    grab$,
  };

  // let breakpointX = 0;
  // let breakpointY = 0;
  // let startX = 0;
  // let endX = 0;
  // let startY = 0;
  // let endY = 0;
  // const clicking = false;

  // function handleGrab(event: Event, x = 0, y = 0) {
  //   breakpointX = x;
  //   breakpointY = y;
  //   startX = breakpointX;
  //   startY = breakpointY;
  //   if (onGrab)
  //     onGrab({
  //       event,
  //       position: {
  //         x: startX,
  //         y: startY,
  //       },
  //     });
  // }

  // function handleDrop(event: Event, x = 0, y = 0) {
  //   endX = x;
  //   endY = y;

  //   if (safeX < endX - startX) {
  //     if (onDropRight)
  //       onDropRight({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //   }

  //   if (safeX < startX - endX) {
  //     if (onDropLeft)
  //       onDropLeft({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //   }

  //   if (safeY < endY - startY) {
  //     if (onDropBottom)
  //       onDropBottom({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //   }

  //   if (safeY < startY - endY) {
  //     if (onDropTop)
  //       onDropTop({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //   }

  //   if (onDrop)
  //     onDrop({
  //       event,
  //       position: {
  //         x: startX,
  //         y: startY,
  //       },
  //     });
  // }

  // function handleDrag(event: Event, x = 0, y = 0) {
  //   const positionX = x;
  //   const positionY = y;

  //   if (safeX < positionX - breakpointX) {
  //     if (onDragRight)
  //       onDragRight({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //     breakpointX = positionX;
  //   }

  //   if (safeX < breakpointX - positionX) {
  //     if (onDragLeft)
  //       onDragLeft({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //     breakpointX = positionX;
  //   }

  //   if (safeY < positionY - breakpointY) {
  //     if (onDragTop)
  //       onDragTop({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //     breakpointY = positionY;
  //   }

  //   if (safeY < breakpointY - positionY) {
  //     if (onDragBottom)
  //       onDragBottom({
  //         event,
  //         position: {
  //           x: startX,
  //           y: startY,
  //         },
  //       });
  //     breakpointY = positionY;
  //   }

  //   if (onDrag)
  //     onDrag({
  //       event,
  //       position: {
  //         x: startX,
  //         y: startY,
  //       },
  //     });
  // }
}
