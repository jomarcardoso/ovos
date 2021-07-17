import { Scroll$, Scroll$Next } from '../../api/scroll';
import { getMaxVerticalScroll, getScrollingEl } from '../../utilities/element';

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

  function handleScroll({ axes: { y } }: Scroll$Next) {
    const percent = y / getMaxVerticalScroll(elRelative);

    // eslint-disable-next-line no-param-reassign
    el.style.transform = `scaleX(${percent})`;
  }

  Scroll$({}).subscribe(handleScroll);
};

function autoStart() {
  const flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');

  if (!flag) return;

  pageProgress({});
}

autoStart();

export default pageProgress;
