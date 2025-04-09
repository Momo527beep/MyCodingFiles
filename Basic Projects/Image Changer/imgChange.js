const img = document.getElementById("image");
const btn = document.getElementById("changebtn");

const images = ["../images/James.png", "../images/Larry.png", "../images/Mondaycat.png",  "../images/lasagn.png"];
let currentImageIndex = 0;

btn.addEventListener("click", () => {
    currentImageIndex++;
    if(currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    image.src = images[currentImageIndex];
});