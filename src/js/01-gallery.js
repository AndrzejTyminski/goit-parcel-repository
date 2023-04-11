import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleries = document.querySelector(".gallery__item");

for (let i = 0; i < galleryItems.length; i++) {
  const img = `<a class="gallery__link" href="${galleryItems[i].original}">
  <img class="gallery__image"  
  src="${galleryItems[i].preview}"  
  data-source="${galleryItems[i].original}"
  alt="${galleryItems[i].description}">`;
  galleries.insertAdjacentHTML("afterbegin", img);
}

const imagePress = (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img width="90vw" height="90wh" src="${e.target.dataset.source}">`
  );
  instance.show();
  const close = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", close);
    }
  });
};

galleries.addEventListener("click", imagePress);
