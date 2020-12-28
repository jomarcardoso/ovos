import './main.scss';
import { toggleDocumentScroll } from '../element.utilities';

const button = document.querySelector('button');

button.addEventListener('click', () => toggleDocumentScroll({}));
