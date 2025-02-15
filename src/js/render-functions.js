function imgTemplate(img) {
  return `<li>
          <img src="" alt="" class="" />
        </li>`;
}

export function imagesTemplate(images) {
  const markup = images.map(imgTemplate).join('');
  return markup;
}

console.log('ajscd');
