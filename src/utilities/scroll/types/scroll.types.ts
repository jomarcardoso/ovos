import { Axes } from '../../../types/types';

interface GetScrollPositionArgs {
  scrollingElement: HTMLElement;
  delay?: Axes;
}

export type GetScrollPosition = (args: GetScrollPositionArgs) => Axes;
