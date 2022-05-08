import './main.scss';
import Touch$ from '../touch';

const elXAxis = document.querySelector('#drag-axis-x');
const elYAxis = document.querySelector('#drag-axis-y');
const elRelXAxis = document.querySelector('#drag-rel-axis-x');
const elRelYAxis = document.querySelector('#drag-rel-axis-y');
const elRelBreakXAxis = document.querySelector('#drag-rel-break-axis-x');
const elRelBreakYAxis = document.querySelector('#drag-rel-break-axis-y');
const elStatus = document.querySelector('#touch-status-1');
const elDropX = document.querySelector('#touch-drop-1-x');
const elDropY = document.querySelector('#touch-drop-1-y');
const elDirection = document.querySelector('#touch-direction');
// const contX = 0;
// const contY = 0;

const { grab$, drop$, drag$ } = Touch$({
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

function showDirection(direction = '') {
  if (!elDirection) return;

  elDirection.innerHTML = direction;
}

drop$.subscribe(({ axes }) => {
  if (!elStatus || !elDropX || !elDropY) return;

  elStatus.innerHTML = 'DROPPED';
  elDropX.innerHTML = String(axes.x);
  elDropY.innerHTML = String(axes.y);
});

drag$.subscribe(({ axes, relativeAxes, relativeBreakpointAxes, direction }) => {
  if (!elXAxis || !elYAxis || !elRelXAxis || !elRelYAxis) return;

  // console.log(type, axes);

  elXAxis.innerHTML = String(axes.x);
  elYAxis.innerHTML = String(axes.y);

  elRelXAxis.innerHTML = String(relativeAxes.x);
  elRelYAxis.innerHTML = String(relativeAxes.y);

  if (!elRelBreakXAxis || !elRelBreakYAxis) return;

  elRelBreakXAxis.innerHTML = String(relativeBreakpointAxes.x);
  elRelBreakYAxis.innerHTML = String(relativeBreakpointAxes.y);

  // console.log(direction);

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
