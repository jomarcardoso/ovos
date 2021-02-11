/* eslint-disable */
import './range-slider.scss';
import scrollSpy, { createScrollSpyItem } from '../scroll-spy/scroll-spy';
import { Method, ScrollSpyItem } from '../scroll-spy/types/scroll-spy.type';
import { Axis } from '@/types/types';

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
    method: Method.closest
  })
}

rangeSlider({})

export default rangeSlider;

