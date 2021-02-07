interface ScrollSpyItemArgsCallBackArgs {
  active: boolean;
}
interface ScrollSpyItemArgs {
  elMenu?: HTMLElement;
  elContent?: HTMLElement;
  callback?(args: ScrollSpyItemArgsCallBackArgs): void;
}

export interface ScrollSpyItem {
  activate(): void;
  deActivate(): void;
  content: HTMLElement;
}

export type CreateScrollSpyItem = (args: ScrollSpyItemArgs) => ScrollSpyItem;

export enum Method {
  current,
  closest,
}
