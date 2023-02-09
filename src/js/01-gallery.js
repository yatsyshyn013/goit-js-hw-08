// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

galleryContainerEl.innerHTML = markup;


var lightbox = new SimpleLightbox('.gallery a', {

        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: '250ms'

});

