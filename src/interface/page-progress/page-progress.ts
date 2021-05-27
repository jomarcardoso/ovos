import scrollEvents from '../../api/scroll-events/scroll-events';
import { OnScrollArgs } from '../../types/types';
import {
  getMaxVerticalScroll,
  getScrollingEl,
} from '../../utilities/element/element.utilities';

interface PageProgressArgs {
  el?: HTMLElement;
}

type PageProgress = (args: PageProgressArgs) => void;

const pageProgress: PageProgress = ({
  el = document.querySelector('[data-ovo-pp="bar"]') as HTMLElement,
}) => {
  const elRelative = getScrollingEl(document);

  if (!el) return;

  // eslint-disable-next-line no-param-reassign
  el.style.transformOrigin = 'left';

  function handleScroll({ scrollPosition: { y } }: OnScrollArgs) {
    const percent = y / getMaxVerticalScroll(elRelative);

    // eslint-disable-next-line no-param-reassign
    el.style.transform = `scaleX(${percent})`;
  }

  scrollEvents({ onScroll: handleScroll });
};

export default pageProgress;
