import './element.scss';
import { AXES, Axes, Positions } from '../axis';
import { ScrollableElement, scrollTo } from '../scroll';
import { getViewportHeight } from '../view/view';

export function getScrollingEl(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

export function getScrollPosition({
  el,
  variation = { x: 0, y: 0 },
}: {
  el: HTMLElement;
  variation?: Axes;
}): Axes {
  const x = Math.max(0, el.scrollLeft - variation.x);
  const y = Math.max(0, el.scrollTop - variation.y);

  return {
    x,
    y,
  };
}

export function getLeft(el: HTMLElement): number {
  return el.offsetLeft;
}

export function getTop(el: HTMLElement): number {
  return el.offsetTop;
}

export function getHeight(el: HTMLElement): number {
  return el.offsetHeight;
}

export function getWidth(el: HTMLElement): number {
  return el.offsetWidth;
}

export function getMaxHorizontalScroll(el: HTMLElement): number {
  return el.scrollWidth - el.clientWidth;
}

export function getMaxVerticalScroll(el: HTMLElement): number {
  return el.scrollHeight - el.clientHeight;
}

export function isOutOfLimit({
  axes,
  limit,
  el,
}: {
  axes: Axes;
  limit: Partial<Positions>;
  el: HTMLElement;
}): boolean {
  if (limit.top) {
    const beOutOfTopLimit = axes.y < limit.top;

    if (beOutOfTopLimit) return true;
  }

  if (limit.bottom) {
    const beOutOfBottomLimit = axes.y > getMaxVerticalScroll(el) - limit.bottom;

    if (beOutOfBottomLimit) return true;
  }

  if (limit.right) {
    const beOutOfRightLimit = axes.y > getMaxHorizontalScroll(el) - limit.right;

    if (beOutOfRightLimit) return true;
  }

  if (limit.left) {
    const beOutOfLeftLimit = axes.x < limit.left;

    if (beOutOfLeftLimit) return true;
  }

  return false;
}

export function getPositionRelativeScreen(el: HTMLElement): Positions {
  const { bottom, left, top, right } = el.getBoundingClientRect();

  return {
    bottom,
    left,
    top,
    right,
  };
}

export function isTopOfElementAboveOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).top < 0;
}

export function isBottomOfElementBelowOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).bottom > getViewportHeight();
}

export function isAboveAndBelowScreen(el: HTMLElement): boolean {
  return (
    isTopOfElementAboveOfViewport(el) && isBottomOfElementBelowOfViewport(el)
  );
}

export function getScrollParent(el: HTMLElement): ScrollableElement {
  if (el == null) {
    return document;
  }

  const elHTML = el as HTMLElement;

  if (elHTML.scrollHeight > elHTML.clientHeight) {
    if (elHTML.tagName === 'BODY' || elHTML.tagName === 'HTML') {
      return document;
    }

    return elHTML;
  }

  return getScrollParent(elHTML.parentNode as HTMLElement);
}

export function getMiddleRelativeScreen(el: HTMLElement): Axes {
  const { left, top } = getPositionRelativeScreen(el);
  const height = getHeight(el);
  const width = getWidth(el);

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function translate({
  el,
  position,
}: {
  el: HTMLElement;
  position: number;
}): void {
  // eslint-disable-next-line no-param-reassign
  el.style.transform = `translate3d(0, -${position}px, 0)`;
}

interface ToggleScrollDisabledArgs {
  el?: HTMLElement;
  toggle?: boolean;
}

export type ToggleScrollDisabled = (args: ToggleScrollDisabledArgs) => void;

interface ToggleDocumentScrollArgs {
  toggle?: boolean;
}

export type ToggleDocumentScroll = (args: ToggleDocumentScrollArgs) => void;

export const toggleScrollDisabled: ToggleScrollDisabled = ({
  el = document.documentElement,
  toggle: provisionalToggle,
}) => {
  const hasDataDisabled = el.dataset?.ovoNonScrollable === 'true';
  const toggle = provisionalToggle ?? !hasDataDisabled;

  function handlePreventScroll(event: Event): void {
    event.preventDefault();
  }

  if (toggle) {
    el.setAttribute('data-ovo-non-scrollable', 'true');
    el.addEventListener('touchmove', handlePreventScroll);
  } else {
    el.setAttribute('data-ovo-non-scrollable', 'false');
    el.removeEventListener('touchmove', handlePreventScroll);
  }

  return toggle;
};

export const toggleDocumentScroll: ToggleDocumentScroll = ({ toggle }) => {
  toggleScrollDisabled({ el: document.documentElement, toggle });

  return toggleScrollDisabled({ el: document.body, toggle });
};

export function getPositionRelativeOfTheDocument(el: HTMLElement): Positions {
  const top = getTop(el);
  const left = getLeft(el);
  const height = getHeight(el);
  const width = getWidth(el);

  return {
    top,
    left,
    bottom: top + height,
    right: left + width,
  };
}

export function scrollToEl({
  el,
  difference = AXES,
}: {
  el: HTMLElement;
  difference: Axes;
}): void {
  const left = el.offsetLeft;
  const top = el.offsetTop;
  const scrollingElement = getScrollParent(el) as HTMLElement;

  scrollTo({
    left: left - difference.x,
    top: top - difference.y,
    scrollingElement,
  });
}
