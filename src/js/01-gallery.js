
import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів

const paletteContainer = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems); 

paletteContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryMarkup(images) {
  const markup = images.map(({ preview, original, description }) => { 
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" 
          src="${preview}" 
          alt="${description}">
        </a>
      </div>
    `;
  })
  .join('');
  return markup;
}
const lightbox = new SimpleLightbox('.gallery a', {   captionsData: "alt",
  captionDelay: 250, });