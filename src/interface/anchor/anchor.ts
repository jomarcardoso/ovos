import { getMiddleRelativeScreen } from '@/utilities/element/element.utilities';
import ScrollEvents from '../../api/scroll-events/scroll-events';
import { OnScrollArgs, Direction, Axes } from '../../types/types';
import { Anchor } from './types/anchor.types';

interface GetOffsetArgs {
  floatingMiddle: Axes;
  toAnchorMiddle: Axes;
}

type GetOffset = (args: GetOffsetArgs) => Direction;

const anchor: Anchor = ({
  elFloating = document.querySelector('[data-ovo-anchor="floating"]'),
  elScrolling = document,
  elToAnchor = document.querySelector('[data-ovo-anchor="to-anchor"]'),
}) => {
  const lastOffset = Direction.UP;

  const getOffset: GetOffset = ({ floatingMiddle, toAnchorMiddle }) => {
    if (floatingMiddle.y < toAnchorMiddle.y) {
      return Direction.UP;
    }

    return Direction.DOWN;
  };

  const verifyAndAnchor = (offset: Direction) => {
    if (lastOffset !== offset) {
    }
  };

  function handleScroll(scrollArgs: OnScrollArgs) {
    const { y: floatingMiddle } = getMiddleRelativeScreen(elFloating);
    const { y: toAnchorMiddle } = getMiddleRelativeScreen(elToAnchor);
  }

  ScrollEvents({
    el: elScrolling,
    onScroll: handleScroll,
  });
};

export default anchor;
