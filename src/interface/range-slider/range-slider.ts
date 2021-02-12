/* eslint-disable */
import './range-slider.scss';
import scrollSpy, { createScrollSpyItem } from '../scroll-spy/scroll-spy';
import { Method, ScrollSpyItem } from '../scroll-spy/types/scroll-spy.type';
import { Axis } from '@/types/types';
import fitOnScreen from '../fit-on-screen/fit-on-screen';
import { getWidth } from '@/utilities/element/element.utilities';

interface RangeSliderArgs {
  el?: HTMLElement;
}

type RangeSlider = (args: RangeSliderArgs) => void;

interface CreateRangeSliderArgs {
  el: HTMLInputElement;
  elResult: HTMLElement;
}

type CreateRangeSliderItem = (args: CreateRangeSliderArgs) => ScrollSpyItem;

const createRangeSliderItem: CreateRangeSliderItem = ({
  el,
  elResult
}) => {
  const { value } = el;

  function activate() {
    elResult.innerHTML = value;
  }

  return {
    activate,
    deActivate: () => {},
    content: el,
  };
}

const rangeSlider: RangeSlider = ({
  el = document.querySelector('[data-ovo-rs="root"]'),
}) => {
  const elSlider: HTMLElement = el.querySelector('[data-ovo-rs="slider"]');
  const elRanges = Array.from(el.querySelectorAll('input'));
  const elResult: HTMLElement = el.querySelector('[data-ovo-rs="result"]');

  console.log(elSlider)

  const list = elRanges.map((elRange) => (
    createRangeSliderItem({
      el: elRange,
      elResult,
    })));

  scrollSpy({
    list,
    axis: Axis.X,
    elRelative: elSlider,
    method: Method.closest,
  });

  fitOnScreen({
    axis: Axis.X,
    elRelative: elSlider,
    elsToFit: elRanges,
    lazyTime: 100,
    proximityToFit: getWidth(elRanges[0]) / 2,
  })
}

rangeSlider({})

export default rangeSlider;

