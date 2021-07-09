// import intersection from 'lodash/intersection';
// import { Axes, Direction } from '../../types/types';

// interface GetDirectionArgs {
//   lastPosition: Axes;
//   position: Axes;
// }

// type GetDirection = (args: GetDirectionArgs) => Direction;

// export const getDirection: GetDirection = ({ lastPosition, position }) => {
//   const onTheRight = lastPosition.x < position.x;
//   const onTheLeft = lastPosition.x > position.x;
//   const onDown = lastPosition.y < position.y;
//   const onUp = lastPosition.y > position.y;

//   if (onUp && onTheLeft) return Direction.UP_LEFT;

//   if (onUp && onTheRight) return Direction.UP_RIGHT;

//   if (onUp) return Direction.UP;

//   if (onDown && onTheLeft) return Direction.DOWN_LEFT;

//   if (onDown && onTheRight) return Direction.DOWN_RIGHT;

//   if (onDown) return Direction.DOWN;

//   if (onTheRight) return Direction.RIGHT;

//   if (onTheLeft) return Direction.LEFT;

//   return Direction.NONE;
// };

// interface IsOnTheSameDirectionArgs {
//   lastDirection: Direction;
//   direction: Direction;
// }

// type IsOnTheSameDirection = (args: IsOnTheSameDirectionArgs) => boolean;

// export const isOnTheSameDirection: IsOnTheSameDirection = ({
//   direction,
//   lastDirection,
// }) => {
//   let lastDirections: Array<Direction> = [lastDirection];

//   if (lastDirection === Direction.DOWN_LEFT) {
//     lastDirections = [Direction.DOWN, Direction.LEFT];
//   }

//   if (lastDirection === Direction.DOWN_RIGHT) {
//     lastDirections = [Direction.DOWN, Direction.RIGHT];
//   }

//   if (lastDirection === Direction.UP_LEFT) {
//     lastDirections = [Direction.UP, Direction.LEFT];
//   }

//   if (lastDirection === Direction.UP_RIGHT) {
//     lastDirections = [Direction.UP, Direction.RIGHT];
//   }

//   let directions: Array<Direction> = [direction];

//   if (direction === Direction.DOWN_LEFT) {
//     directions = [Direction.DOWN, Direction.LEFT];
//   }

//   if (direction === Direction.DOWN_RIGHT) {
//     directions = [Direction.DOWN, Direction.RIGHT];
//   }

//   if (direction === Direction.UP_LEFT) {
//     directions = [Direction.UP, Direction.LEFT];
//   }

//   if (direction === Direction.UP_RIGHT) {
//     directions = [Direction.UP, Direction.RIGHT];
//   }

//   return Boolean(intersection(lastDirections, directions).length);
// };
