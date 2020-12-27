import { GetScrollPosition } from './types/scroll.types';

export const getScrollPosition: GetScrollPosition = ({
  scrollingElement,
  delay = { x: 0, y: 0 },
}) => {
  const x = Math.max(0, scrollingElement.scrollLeft - delay.x);
  const y = Math.max(0, scrollingElement.scrollTop - delay.y);

  return {
    x,
    y,
  };
};

const ScrollService = {
  getScrollPosition,
};

export default ScrollService;
