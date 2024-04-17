import { scroll, Scroll$ } from '../../api/scroll';
import { getMaxVerticalScroll, getScrollingEl } from '../../utilities/element';
import { IS_NODE_JS } from '../../utilities/document';

interface PageProgressArgs {
  el?: HTMLElement;
}

type PageProgress = (args: PageProgressArgs) => void;

export const pageProgress: PageProgress = ({
  el = !IS_NODE_JS
    ? (document.querySelector('[data-ovo-pp="bar"]') as HTMLElement)
    : undefined,
}) => {
  const elRelative = getScrollingEl(document);

  if (!el) return;

  el.style.transformOrigin = 'left';

  function handleScroll({ axes: { y } }: Pick<Scroll$, 'axes'>) {
    const percent = y / getMaxVerticalScroll(elRelative);

    if (!el) return;

    el.style.transform = `scaleX(${percent})`;
  }

  handleScroll({
    axes: {
      y: 0,
      x: 0,
    },
  });

  scroll({}).subscribe(handleScroll);
};

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');

  if (!flag) return;

  pageProgress({});
}

autoStart();
