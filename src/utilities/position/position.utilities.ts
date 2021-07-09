// import isNil from 'lodash/isNil';
// import isNumber from 'lodash/isNumber';
// import { Position } from '../../types/types';
// import {
//   getMaxHorizontalScroll,
//   getMaxVerticalScroll,
// } from '../element/element.utilities';
// import { getViewportHeight } from '../view/view.utilities';
// import {
//   IsOnTheRegion,
//   IsOutOfLimit,
//   GetRelativePosition,
//   IsSafe,
//   IsOnGap as IsOnGapOfEl,
// } from './types/position.utilities';

// export const POSITION: Position = {
//   bottom: 0,
//   left: 0,
//   right: 0,
//   top: 0,
// };

// export const isOnTheRegion: IsOnTheRegion = ({ region, position }) => {
//   const onBelowTheTop = position.y >= region.top;
//   const onAboveTheBottom = position.y <= region.bottom;

//   return onBelowTheTop && onAboveTheBottom;
// };

// export const isOutOfLimit: IsOutOfLimit = ({ position, limit = POSITION }) => {
//   if (limit.top) {
//     const outOfTopLimit = position.y < limit.top;

//     if (outOfTopLimit) return true;
//   }

//   if (limit.bottom) {
//     const outOfBottomLimit = position.y > limit.bottom;

//     if (outOfBottomLimit) return true;
//   }

//   if (limit.left) {
//     const outOfLeftLimit = position.x < limit.left;

//     if (outOfLeftLimit) return true;
//   }

//   if (limit.right) {
//     const outOfRightLimit = position.x > limit.right;

//     if (outOfRightLimit) return true;
//   }

//   return false;
// };

// export const getRelativePosition: GetRelativePosition = ({
//   position,
//   lastRelativePosition = { x: 0, y: 0 },
//   lastPosition = { x: 0, y: 0 },
//   limit,
// }) => {
//   let x = lastRelativePosition.x + position.x - lastPosition.x;
//   let y = lastRelativePosition.y + position.y - lastPosition.y;

//   if (limit) {
//     if (isNumber(limit.top)) y = Math.max(y, limit.top);
//     if (isNumber(limit.bottom)) y = Math.min(y, limit.bottom);
//     if (isNumber(limit.left)) x = Math.max(x, limit.left);
//     if (isNumber(limit.right)) x = Math.min(x, limit.right);
//   }

//   return {
//     x,
//     y,
//   };
// };

// export const isSafe: IsSafe = ({ position, lastPosition, debounce }) => {
//   const beOnVerticalSafe =
//     Math.abs(position.y - lastPosition.y) < (debounce.y ?? 0);
//   const beOnHorizontalSafe =
//     Math.abs(position.x - lastPosition.x) < (debounce.x ?? 0);

//   if (beOnVerticalSafe && beOnHorizontalSafe) return true;

//   return false;
// };

// export const isOnGapOfEl: IsOnGapOfEl = ({ position, gap, el }) => {
//   const beOnTopGap = position.y < (gap.top ?? 0);

//   if (!isNil(gap.top) && beOnTopGap) return true;

//   const beOnBottomGap =
//     position.y > getMaxVerticalScroll(el) - (gap.bottom ?? 0);

//   if (!isNil(gap.bottom) && beOnBottomGap) return true;

//   const beOnLeftGap = position.x < (gap.left ?? 0);

//   if (!isNil(gap.left) && beOnLeftGap) return true;

//   const beOnRightGap =
//     position.x > getMaxHorizontalScroll(el) - (gap.right ?? 0);

//   if (!isNil(gap.right) && beOnRightGap) return true;

//   return false;
// };

// export function isAboveTheScreen(position: number): boolean {
//   return position < 0;
// }

// export function isBelowTheScreen(position: number): boolean {
//   return position > getViewportHeight();
// }
