interface AnchorArgs {
  elScrolling?: Element;
  elFloating?: HTMLElement;
  elToAnchor?: HTMLElement;
  anchorIfBelow?: boolean;
  anchorIfRightOf?: boolean;
  anchorIfLeftOf?: boolean;
}

export type Anchor = (args: AnchorArgs) => void;
