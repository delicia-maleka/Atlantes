var sliderImageWidth = document.getElementById("basicImg").offsetWidth;
var sliderImagesMargin = document.getElementById("basicImg").style.marginRight;
var maxSliderOffset = -9 * sliderImageWidth;

const bars = document.querySelectorAll('.bar');
const slider = document.querySelector('.slideContainer');
const sliderCards = document.querySelector('.sliderCards');
let mouseMaintained = false;
let cursorX;

/* slider grab */
slider.addEventListener("mousedown", (e) => {
    mouseMaintained = true;
    cursorX = e.offsetX - sliderCards.offsetLeft;
});

slider.addEventListener("mousemove", (e) => {
    if (!mouseMaintained)
        return;

    e.preventDefault();
    if ((e.offsetX - cursorX >= maxSliderOffset) && (e.offsetX - cursorX <= 0)) {
        sliderCards.style.left = `${e.offsetX - cursorX}px`;
        bars.forEach((bar) => {
            bar.classList.remove('highlightBar');
        });
        document.getElementById("bar"+Math.round((- e.offsetX + cursorX) / sliderImageWidth)).classList.add('highlightBar');
    }
});

window.addEventListener("mouseup", () => {
    mouseMaintained = false;
});


/* slider bar */
function firstSlide(slideIndex) {
    sliderCards.style.left = `-${sliderImageWidth * slideIndex + sliderImagesMargin}px`;
    bars.forEach((bar) => {
        bar.classList.remove('highlightBar');
    });
    document.getElementById("bar"+slideIndex).classList.add('highlightBar');
}