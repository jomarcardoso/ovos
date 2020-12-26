import './main.scss';
import { toggleDocumentScroll } from '../element.service';

const button = document.querySelector('button');

button.addEventListener('click', () => toggleDocumentScroll({}));
