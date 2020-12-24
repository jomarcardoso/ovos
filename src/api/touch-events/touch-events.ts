import { TouchEvents } from './types/touch-events.types';

const touchEvents: TouchEvents = ({
  el = document,
  safeX = 20,
  safeY = 20,
  onDragTop,
  onDragBottom,
  onDragLeft,
  onDragRight,
  onGrab,
  onDrag,
  onDrop,
  onDropTop,
  onDropBottom,
  onDropLeft,
  onDropRight,
}) => {
  let breakpointX = 0;
  let breakpointY = 0;
  let startX = 0;
  let endX = 0;
  let startY = 0;
  let endY = 0;
  let clicking = false;

  function handleGrab(event, x, y) {
    breakpointX = x;
    breakpointY = y;
    startX = breakpointX;
    startY = breakpointY;
    if (onGrab)
      onGrab({
        event,
        position: {
          x: startX,
          y: startY,
        },
      });
  }

  el.addEventListener('mousedown', (event) => {
    const mouseEvent = event as MouseEvent;

    clicking = true;
    const x = mouseEvent.screenX;
    const y = mouseEvent.screenY;
    handleGrab(mouseEvent, x, y);
  });

  el.addEventListener('touchstart', (event) => {
    const touchEvent = event as TouchEvent;

    const x = touchEvent.changedTouches[0].screenX;
    const y = touchEvent.changedTouches[0].screenY;
    handleGrab(touchEvent, x, y);
  });

  function handleDrop(event, x, y) {
    endX = x;
    endY = y;

    if (safeX < endX - startX) {
      if (onDropRight)
        onDropRight({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
    }

    if (safeX < startX - endX) {
      if (onDropLeft)
        onDropLeft({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
    }

    if (safeY < endY - startY) {
      if (onDropBottom)
        onDropBottom({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
    }

    if (safeY < startY - endY) {
      if (onDropTop)
        onDropTop({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
    }

    if (onDrop)
      onDrop({
        event,
        position: {
          x: startX,
          y: startY,
        },
      });
  }

  document.addEventListener('mouseup', (event) => {
    const mouseEvent = event as MouseEvent;

    const x = mouseEvent.screenX;
    const y = mouseEvent.screenY;
    clicking = false;
    handleDrop(mouseEvent, x, y);
  });

  el.addEventListener('touchend', (event) => {
    const touchEvent = event as TouchEvent;

    const x = touchEvent.changedTouches[0].screenX;
    const y = touchEvent.changedTouches[0].screenY;
    handleDrop(touchEvent, x, y);
  });

  function handleDrag(event, x, y) {
    const positionX = x;
    const positionY = y;

    if (safeX < positionX - breakpointX) {
      if (onDragRight)
        onDragRight({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
      breakpointX = positionX;
    }

    if (safeX < breakpointX - positionX) {
      if (onDragLeft)
        onDragLeft({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
      breakpointX = positionX;
    }

    if (safeY < positionY - breakpointY) {
      if (onDragTop)
        onDragTop({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
      breakpointY = positionY;
    }

    if (safeY < breakpointY - positionY) {
      if (onDragBottom)
        onDragBottom({
          event,
          position: {
            x: startX,
            y: startY,
          },
        });
      breakpointY = positionY;
    }

    if (onDrag)
      onDrag({
        event,
        position: {
          x: startX,
          y: startY,
        },
      });
  }

  document.addEventListener('mousemove', (event) => {
    if (!clicking) return;
    const x = event.screenX;
    const y = event.screenY;
    handleDrag(event, x, y);
  });

  el.addEventListener('touchmove', (event) => {
    const touchEvent = event as TouchEvent;

    const x = touchEvent.changedTouches[0].screenX;
    const y = touchEvent.changedTouches[0].screenY;
    handleDrag(touchEvent, x, y);
  });
};

export default touchEvents;
