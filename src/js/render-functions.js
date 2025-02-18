import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main.js';

function imgTemplate(img) {
  return `<li class="gallery-item">
          <a href="${img.largeImageURL}" class="gallery-link">
          <img src="${img.webformatURL}" alt="${img.tags}" class="" />
          </a>
          <ul class="img-text-list">
            <li class="img-text-item">
              <p class="img-text-category">Likes</p>
              <p class="img-text-value">${img.likes}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Views</p>
              <p class="img-text-value">${img.views}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Comments</p>
              <p class="img-text-value">${img.comments}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Downloads</p>
              <p class="img-text-value">${img.downloads}</p>
            </li>
          </ul>
        </li>`;
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function imagesTemplate(images) {
  const markup = images.map(imgTemplate).join('');
  refs.gallery.innerHTML = markup;
  gallery.refresh();
  return markup;
}

// gallery.on('shown.simplelightbox', function () {
//   const wrapper = document.querySelector('.sl-wrapper');
//   wrapper.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
//   const whiteElements = [
//     wrapper.querySelector('.sl-close'),
//     wrapper.querySelector('.sl-counter'),
//     wrapper.querySelector('.sl-prev'),
//     wrapper.querySelector('.sl-next'),
//   ];
//   whiteElements.forEach(el => (el.style.color = '#ffffff'));
// });
