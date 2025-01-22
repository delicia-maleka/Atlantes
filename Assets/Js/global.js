var sliderImageWidth = document.getElementById("basicImg").offsetWidth;
var maxSliderOffset = -7 * sliderImageWidth;


const slider = document.querySelector('.slideContainer');
const sliderImages = document.querySelector('.sliderCards');
let mouseMaintained = false;
let cursorX;

slider.addEventListener("mousedown", (e) => {
    mouseMaintained = true;
    cursorX = e.offsetX - sliderImages.offsetLeft;
});

slider.addEventListener("mousemove", (e) => {
    if (!mouseMaintained)
        return;

    e.preventDefault();
    if ((e.offsetX - cursorX >= maxSliderOffset) && (e.offsetX - cursorX <= 0))
        sliderImages.style.left = `${e.offsetX - cursorX}px`;
});

window.addEventListener("mouseup", () => {
    mouseMaintained = false;
});