import './main.scss';
import { toggleDocumentScroll } from '../element.utilities';

const elButton = document.querySelector('button');

if (elButton) {
  elButton.addEventListener('click', () => toggleDocumentScroll({}));
}
