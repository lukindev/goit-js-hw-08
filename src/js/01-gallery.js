import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
