import './main.scss';
import { Direction } from '../../../utilities/axis';
import TouchObservable from '../touch-observer';

const elXAxis = document.querySelector('#touch-result-1-x');
const elYAxis = document.querySelector('#touch-result-1-y');
const elStatus = document.querySelector('#touch-status-1');
const elDropX = document.querySelector('#touch-drop-1-x');
const elDropY = document.querySelector('#touch-drop-1-y');
const elDirection = document.querySelector('#touch-direction');
// const contX = 0;
// const contY = 0;

const { grab$, drop$, drag$ } = TouchObservable({
  el: document.querySelector('#touch-pad-1') as HTMLElement,
  gap: {
    x: 20,
    y: 20,
  },
});

grab$.subscribe(() => {
  if (!elStatus) return;

  elStatus.innerHTML = 'GRABBING';
});

function showDirection(direction = Direction.NONE) {
  if (!elDirection) return;

  elDirection.innerHTML = direction;
}

// @ts-expect-error rxjs issue
drop$.subscribe(({ relativeAxes, direction }) => {
  if (!elStatus || !elDropX || !elDropY) return;

  elStatus.innerHTML = 'DROPPED';
  elDropX.innerHTML = String(relativeAxes.x);
  elDropY.innerHTML = String(relativeAxes.y);

  showDirection(direction);
});

// @ts-expect-error rxjs issue
drag$.subscribe(({ breakpointAxes, direction }) => {
  if (!elXAxis || !elYAxis) return;

  elXAxis.innerHTML = String(breakpointAxes.x);
  elYAxis.innerHTML = String(breakpointAxes.y);

  showDirection(direction);
});

// function onXMove(fn: (i: number) => number) {
//   if (!elXAxis) return;

//   contX = fn(contX);
//   elXAxis.innerHTML = String(contX);
// }

// function onYMove(fn: (i: number) => number) {
//   if (!elYAxis) return;

//   contY = fn(contY);
//   elYAxis.innerHTML = String(contY);
// }

// function onGrab() {
//   if (!elStatus) return;

//   elStatus.innerHTML = 'GRABBING';
// }

// function onDrop() {
//   if (!elStatus) return;

//   onYMove(() => 0);
//   onXMove(() => 0);
//   elStatus.innerHTML = 'GRAB!';
// }

// function onDrag() {
//   // console.log(axes);
// }

// function dropX(direction = '') {
//   if (!elDropX) return;

//   elDropX.innerHTML = direction;
// }

// function dropY(direction = '') {
//   if (!elDropY) return;

//   elDropY.innerHTML = direction;
// }

// OnGrab({
//   el: document.querySelector('#touch-pad-1') as HTMLElement,
//   onDragLeft: () => onXMove((i) => i - 1),
//   onDragRight: () => onXMove((i) => i + 1),
//   onDragTop: () => onYMove((i) => i - 1),
//   onDragBottom: () => onYMove((i) => i + 1),
//   onGrab,
//   onDrop,
//   onDrag,
//   onDropTop: () => dropY('top'),
//   onDropBottom: () => dropY('bottom'),
//   onDropLeft: () => dropX('left'),
//   onDropRight: () => dropX('right'),
// });
