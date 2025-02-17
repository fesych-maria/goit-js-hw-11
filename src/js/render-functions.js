import { refs } from '../main.js';

function imgTemplate(img) {
  return `<li class="gallery-item">
          <img src="${img.webformatURL}" alt="${img.tags}" class="" />
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

export function imagesTemplate(images) {
  refs.gallery.innerHTML = `<p>Loading images, please wait...</p>`;
  const markup = images.map(imgTemplate).join('');
  refs.gallery.innerHTML = markup;
  return markup;
}
