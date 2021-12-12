import { Scroll$, Scroll$Next } from '../../api/scroll';
import { getMaxVerticalScroll, getScrollingEl } from '../../utilities/element';

const isNodeJS = typeof window === 'undefined';

interface PageProgressArgs {
  el?: HTMLElement;
}

type PageProgress = (args: PageProgressArgs) => void;

const pageProgress: PageProgress = ({
  el = !isNodeJS
    ? (document.querySelector('[data-ovo-pp="bar"]') as HTMLElement)
    : undefined,
}) => {
  const elRelative = getScrollingEl(document);

  if (!el) return;

  // eslint-disable-next-line no-param-reassign
  el.style.transformOrigin = 'left';

  function handleScroll({ axes: { y } }: Scroll$Next) {
    const percent = y / getMaxVerticalScroll(elRelative);

    if (!el) return;

    // eslint-disable-next-line no-param-reassign
    el.style.transform = `scaleX(${percent})`;
  }

  Scroll$({}).subscribe(handleScroll);
};

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');

  if (!flag) return;

  pageProgress({});
}

autoStart();

export default pageProgress;
