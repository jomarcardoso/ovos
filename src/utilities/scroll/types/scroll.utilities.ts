import { Axes } from '../../../types/types';

interface GetScrollPositionArgs {
  scrollingEl: HTMLElement;
  delay?: Axes;
}

export type GetScrollPosition = (args: GetScrollPositionArgs) => Axes;
