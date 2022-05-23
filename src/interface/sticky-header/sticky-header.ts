import './sticky-header.scss';
import { getHeight, translate } from '../../utilities/element';
import { scroll, Scroll$ } from '../../api/scroll';

export function StickyHeader({
  el = document.querySelector('[data-ovo-sticky-header]'),
}: {
  el?: Element | null;
}): void {
  if (!el) return;

  const htmlEl = el as HTMLElement;

  function handleDocumentScroll({
    relativeAxes: { y: position = 0 },
  }: Scroll$) {
    translate({ el: htmlEl, position });
  }

  function bindEvents() {
    if (!el) return;

    scroll({
      maxRelative: {
        top: 0,
        bottom: getHeight(htmlEl),
        left: 0,
        right: 0,
      },
    }).subscribe(handleDocumentScroll);
  }

  bindEvents();
}

function autoStart() {
  if (typeof document === 'undefined') return;

  const flag = document.querySelector(
    '[data-ovo-sticky-header][data-ovo-auto]',
  );

  if (!flag) return;

  StickyHeader({});
}

autoStart();
