import { scroll, Scroll$ } from '../../api/scroll';
import { getMaxVerticalScroll, getScrollingEl } from '../../utilities/element';

const isNodeJS = typeof window === 'undefined';

interface PageProgressArgs {
  el?: HTMLElement;
}

type PageProgress = (args: PageProgressArgs) => void;

export const pageProgress: PageProgress = ({
  el = !isNodeJS
    ? (document.querySelector('[data-ovo-pp="bar"]') as HTMLElement)
    : undefined,
}) => {
  const elRelative = getScrollingEl(document);

  if (!el) return;

  el.style.transformOrigin = 'left';

  function handleScroll({ axes: { y } }: Scroll$) {
    const percent = y / getMaxVerticalScroll(elRelative);

    if (!el) return;

    el.style.transform = `scaleX(${percent})`;
  }

  scroll({}).subscribe(handleScroll);
};

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');

  if (!flag) return;

  pageProgress({});
}

autoStart();
