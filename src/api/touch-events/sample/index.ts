import './main.scss';
import OnGrab from '../touch-events';

function onTouchMove() {
  const elXAxis = document.querySelector('#touch-result-1-x');
  const elYAxis = document.querySelector('#touch-result-1-y');
  const elStatus = document.querySelector('#touch-status-1');
  const elDropX = document.querySelector('#touch-drop-1-x');
  const elDropY = document.querySelector('#touch-drop-1-y');
  let contX = 0;
  let contY = 0;

  function onXMove(fn: (i: number) => number) {
    contX = fn(contX);
    elXAxis.innerHTML = String(contX);
  }

  function onYMove(fn: (i: number) => number) {
    contY = fn(contY);
    elYAxis.innerHTML = String(contY);
  }

  function onGrab() {
    elStatus.innerHTML = 'GRABBING';
  }

  function onDrop() {
    onYMove(() => 0);
    onXMove(() => 0);
    elStatus.innerHTML = 'GRAB!';
  }

  function onDrag() {
    // console.log(axes);
  }

  function dropX(direction = '') {
    elDropX.innerHTML = direction;
  }

  function dropY(direction = '') {
    elDropY.innerHTML = direction;
  }

  OnGrab({
    el: document.querySelector('#touch-pad-1'),
    onDragLeft: () => onXMove((i) => i - 1),
    onDragRight: () => onXMove((i) => i + 1),
    onDragTop: () => onYMove((i) => i - 1),
    onDragBottom: () => onYMove((i) => i + 1),
    onGrab,
    onDrop,
    onDrag,
    onDropTop: () => dropY('top'),
    onDropBottom: () => dropY('bottom'),
    onDropLeft: () => dropX('left'),
    onDropRight: () => dropX('right'),
  });
}

onTouchMove();
