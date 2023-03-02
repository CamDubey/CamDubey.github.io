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

let coffeeImage = document.getElementById("coffeeImage");
coffeeImage.onclick = openLightbox;

let coffeeImage2 = document.getElementById("coffeeImage2");
coffeeImage2.onclick = openLightbox;

let coffeeImage3 = document.getElementById("coffeeImage3");
coffeeImage3.onclick = openLightbox;

let coffeeImage4 = document.getElementById("coffeeImage4");
coffeeImage4.onclick = openLightbox;

let coffeeImage5 = document.getElementById("coffeeImage5");
coffeeImage5.onclick = openLightbox;

let coffeeImage6 = document.getElementById("coffeeImage6");
coffeeImage6.onclick = openLightbox;

let coffeeImage7 = document.getElementById("coffeeImage7");
coffeeImage7.onclick = openLightbox;

let coffeeImage8 = document.getElementById("coffeeImage8");
coffeeImage8.onclick = openLightbox;

let coffeeImage9 = document.getElementById("coffeeImage9");
coffeeImage9.onclick = openLightbox;

let coffeeImage10 = document.getElementById("coffeeImage10");
coffeeImage10.onclick = openLightbox;

let coffeeImage11 = document.getElementById("coffeeImage11");
coffeeImage11.onclick = openLightbox;


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;