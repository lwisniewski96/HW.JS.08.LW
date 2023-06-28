import { galleryItems } from './gallery-items.js';

const photoPalette = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    img => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
            data-source="${img.original}"
             alt="${img.description}"
      />
    </a>
  </div>`
  )
  .join('');

photoPalette.insertAdjacentHTML('afterbegin', markup);

console.log(galleryItems);

photoPalette.addEventListener('click', selectPhoto);

function selectPhoto(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();
}
