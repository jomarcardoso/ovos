import jsDomGlobal from 'jsdom-global';

export { Scroll$, Scroll$Next } from './api/scroll';
export { Touch$, Touch$Next } from './api/touch';

jsDomGlobal();

export {
  AXES,
  Axes,
  Axis,
  Direction,
  POSITIONS,
  Positions,
  getDirection,
  isAboveTheScreen,
  isBelowTheScreen,
  isOnGap,
} from './utilities/axis';

export {
  getHeight,
  getLeft,
  getMaxHorizontalScroll,
  getMaxVerticalScroll,
  getMiddleRelativeScreen,
  getPositionRelativeScreen,
  getScrollParent,
  getScrollPosition,
  getScrollingEl,
  getTop,
  getWidth,
  isAboveAndBelowScreen,
  isBottomOfElementBelowOfViewport,
  isOutOfLimit,
  isTopOfElementAboveOfViewport,
  translate,
  scrollToEl,
} from './utilities/element';

export { ScrollableElement, scrollTo } from './utilities/scroll';

export {
  getTotalViewScrolled,
  getViewportHeight,
  getViewportWidth,
} from './utilities/view';

export {
  Anchor,
  Carousel,
  FitOnScreen,
  PageProgress,
  Parallax,
  ScrollSpy,
  ScrollableSticky,
  SpinImages,
  createScrollSpyItem,
  StickyHeader,
} from './interface';
