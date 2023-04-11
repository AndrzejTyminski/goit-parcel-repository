// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
import { galleryItems } from './gallery-items.js';
const galleries = document.querySelector(".gallery");
galleries.style.gap = "25px";

for (let i = 0; i < galleryItems.length; i++) {
  const img = `<li class="gallery__item" style="margin: 0"> 
                    <a class="gallery__link" href="${galleryItems[i].original}">
                            <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
                    </a>
                </li>`;
  galleries.insertAdjacentHTML("afterbegin", img);
}


new SimpleLightbox(".gallery__item a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
