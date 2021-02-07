import { GetScrollPosition } from './types/scroll.utilities';

// eslint-disable-next-line import/prefer-default-export
export const getScrollPosition: GetScrollPosition = ({
  scrollingEl: scrollingElement,
  delay = { x: 0, y: 0 },
}) => {
  const x = Math.max(0, scrollingElement.scrollLeft - delay.x);
  const y = Math.max(0, scrollingElement.scrollTop - delay.y);

  return {
    x,
    y,
  };
};
