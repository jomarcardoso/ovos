import './main.scss';
import parallax from '../parallax';

parallax({
  el: document.querySelector('[data-ovo="parallax"]'),
  gap: 78,
  distance: 2000,
});
