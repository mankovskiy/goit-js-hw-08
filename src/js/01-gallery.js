// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const imgItems = document.querySelector('.gallery');

const imgMarkup = createImgItemsMarkup(galleryItems);

imgItems.insertAdjacentHTML('beforeend', imgMarkup);

function createImgItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

// function onOpenMaxImgModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  showCounter: false,
  alertError: false,
  captionsData: 'alt',
});
// }
