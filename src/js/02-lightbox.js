import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

//links to img full
// const liEl = document.querySelectorAll(".gallery__link");
// liEl.forEach((liEl) => console.log(liEl.href));
//links to img small
// const srcEl = document.querySelectorAll(".gallery__image");
// srcEl.forEach((srcEl) => console.log(srcEl.src));

new SimpleLightbox(".gallery__item a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
