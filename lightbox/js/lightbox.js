let lightboxContainer = 
    document.getElementById("lightboxContainer");
let lightboxBackground =
    document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = 
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let fruitBowl = document.getElementById("fruitBowl");
// fruitBowl.onclick = openLightbox;

// let pastries = document.getElementById("pastries");
// pastries.onclick = openLightbox;

// let alley = document.getElementById("alley");
// alley.onclick = openLightbox;

// let bottles = document.getElementById("bottles");
// bottles.onclick = openLightbox;

// let berries = document.getElementById("berries");
// berries.onclick = openLightbox;

// let horse = document.getElementById("horse");
// horse.onclick = openLightbox;

// let flowers = document.getElementById("flowers");
// flowers.onclick = openLightbox;

// let couch = document.getElementById("couch");
// couch.onclick = openLightbox;

// let door = document.getElementById("door");
// door.onclick = openLightbox;

// let lighthouse = document.getElementById("lighthouse");
// lighthouse.onclick = openLightbox;

// let taxi = document.getElementById("taxi");
// taxi.onclick = openLightbox;

let galleryImages = document.getElementsByClassName("galleryImage");

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

let closers = document.getElementsByClassName("closer");

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;