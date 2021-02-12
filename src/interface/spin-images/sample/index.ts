import './main.scss';
import spinImages from '../spin-images';

spinImages({
  quantityFrames: 17,
  // onGrab: () => el.classList.add('is-active'),
  // onDrop: () => el.classList.remove('is-active'),
  rotateOnScrollDebounce: 160,
});
