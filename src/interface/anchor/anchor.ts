import { Anchor } from './anchor.types';
import './anchor.scss';
import {
  Axes,
  Direction,
  isAboveTheScreen,
  isBelowTheScreen,
} from '../../utilities/axis';
import {
  getMiddleRelativeScreen,
  getScrollParent,
} from '../../utilities/element';

interface GetOffsetArgs {
  floatingMiddle: Axes;
  toAnchorMiddle: Axes;
}

type GetOffset = (args: GetOffsetArgs) => Direction;

const anchor: Anchor = ({
  elFloating = document.querySelector(
    '[data-ovo-anchor="floating"]',
  ) as HTMLElement | null,
  elToAnchor = document.querySelector(
    '[data-ovo-anchor="to-anchor"]',
  ) as HTMLElement | null,
}) => {
  if (!elFloating || !elToAnchor) return;

  const elScrolling = getScrollParent(elToAnchor);

  let lastOffset: Direction = '';
  let floating = true;
  let lastToAnchorPosition: Direction = '';

  if (!elFloating || !elToAnchor) return;

  function toFloat(position: Direction) {
    if (floating && position === lastToAnchorPosition) return;

    lastToAnchorPosition = position;

    if (!elFloating) return;

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anFixed = 'true';
    floating = true;

    if (position === 'up') {
      // eslint-disable-next-line no-param-reassign
      elFloating.dataset.anPosition = 'top';

      return;
    }

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anPosition = 'bottom';
  }

  function toAnchor() {
    if (!floating || !elFloating) return;

    // eslint-disable-next-line no-param-reassign
    elFloating.dataset.anFixed = 'false';
    floating = false;
  }

  const getOffset: GetOffset = ({ floatingMiddle, toAnchorMiddle }) => {
    if (floatingMiddle.y < toAnchorMiddle.y) {
      return 'up';
    }

    return 'down';
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
      toFloat('up');

      return true;
    }

    return false;
  }

  function verifyBelowAndToFloat(toAnchorMiddle: Axes) {
    const belowTheScreen = isBelowTheScreen(toAnchorMiddle.y);

    if (belowTheScreen) {
      toFloat('down');

      return true;
    }

    return false;
  }

  function handleScroll() {
    if (!elFloating || !elToAnchor) return;

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
  if (typeof document === 'undefined') return;

  const flag = document.querySelector(
    '[data-ovo-anchor="to-anchor"][data-ovo-auto]',
  );

  if (!flag) return;

  anchor({});
}

autoStart();

export default anchor;
