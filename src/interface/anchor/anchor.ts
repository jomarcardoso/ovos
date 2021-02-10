import {
  getMiddleRelativeScreen,
  getScrollParent,
} from '../../utilities/element/element.utilities';
import {
  isAboveTheScreen,
  isBelowTheScreen,
} from '../../utilities/position/position.utilities';
import { Direction, Axes } from '../../types/types';
import { Anchor } from './types/anchor.types';
import './anchor.scss';

interface GetOffsetArgs {
  floatingMiddle: Axes;
  toAnchorMiddle: Axes;
}

type GetOffset = (args: GetOffsetArgs) => Direction;

const anchor: Anchor = ({
  elFloating = document.querySelector('[data-ovo-anchor="floating"]'),
  elToAnchor = document.querySelector('[data-ovo-anchor="to-anchor"]'),
}) => {
  const elScrolling = getScrollParent(elToAnchor);

  let lastOffset: Direction = null;
  let floating = true;
  let lastToAnchorPosition: Direction = null;

  if (!elFloating || !elToAnchor) return;

  function toFloat(position: Direction) {
    if (floating && position === lastToAnchorPosition) return;

    lastToAnchorPosition = position;

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anFixed = 'true';
    floating = true;

    if (position === Direction.UP) {
      // eslint-disable-next-line no-param-reassign
      elFloating.dataset.anPosition = 'top';

      return;
    }

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anPosition = 'bottom';
  }

  function toAnchor() {
    if (!floating) return;

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anFixed = 'false';
    floating = false;
  }

  const getOffset: GetOffset = ({ floatingMiddle, toAnchorMiddle }) => {
    if (floatingMiddle.y < toAnchorMiddle.y) {
      return Direction.UP;
    }

    return Direction.DOWN;
  };

  const verifyAndToAnchor = (offset: Direction) => {
    if (lastOffset !== offset) {
      lastOffset = offset;
      toAnchor();
    }
  };

  function verifyAboveAndToFloat(toAnchorMiddle: Axes) {
    const aboveTheScreen = isAboveTheScreen(toAnchorMiddle.y);

    if (aboveTheScreen) {
      toFloat(Direction.UP);

      return true;
    }

    return false;
  }

  function verifyBelowAndToFloat(toAnchorMiddle: Axes) {
    const belowTheScreen = isBelowTheScreen(toAnchorMiddle.y);

    if (belowTheScreen) {
      toFloat(Direction.DOWN);

      return true;
    }

    return false;
  }

  function handleScroll() {
    const floatingMiddle = getMiddleRelativeScreen(elFloating);
    const toAnchorMiddle = getMiddleRelativeScreen(elToAnchor);
    const offset = getOffset({ floatingMiddle, toAnchorMiddle });

    if (verifyAboveAndToFloat(toAnchorMiddle)) return;
    if (verifyBelowAndToFloat(toAnchorMiddle)) return;

    verifyAndToAnchor(offset);
  }

  handleScroll();

  elScrolling.addEventListener('scroll', handleScroll);
};

function autoStart() {
  const flag = document.querySelector(
    '[data-ovo-anchor="to-anchor"][data-ovo-auto]',
  );

  if (!flag) return;

  anchor({});
}

autoStart();

export default anchor;
