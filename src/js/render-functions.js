import { refs } from '../main.js';

function imgTemplate(img) {
  return `<li>
          <img src="${img.webformatURL}" alt="${img.tags}" class="" />
        </li>`;
}

export function imagesTemplate(images) {
  const markup = images.map(imgTemplate).join('');
  refs.gallery.innerHTML = markup;
  return markup;
}
