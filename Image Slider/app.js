// Image Array
const images = [
    "images/img17.jpg",
    "images/img18.jpg",
    "images/img19.jpg",
    "images/img20.jpg",
    "images/img21.jpg",
    "images/img22.jpg",
    "images/img23.jpg"
];

let currentIndex = 0;

// Set initial image
const sliderImage = document.getElementById("slider-image");
sliderImage.src = images[currentIndex];

// Next Slide Function
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
}

// Previous Slide Function
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
}
