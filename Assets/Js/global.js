var sliderImageMargin = window.getComputedStyle(document.getElementById("basicImg")).marginRight;
var sliderImageWidth = document.getElementById("basicImg").offsetWidth
    + parseInt(sliderImageMargin.substring(0, sliderImageMargin.length - 2)) + 4; // 4 = whitespace
var maxSliderOffset = -9 * sliderImageWidth;

var adSliderImageMargin = window.getComputedStyle(document.getElementById("basicAdImg")).marginRight; // keeps px in the string
var adSliderImageWidth = document.getElementById("basicAdImg").offsetWidth
+ parseInt(adSliderImageMargin.substring(0, adSliderImageMargin.length - 2)) + 4;
var maxAdSliderOffset = -adSliderImageWidth * 13;

const bars = document.querySelectorAll('.bar');
const slider = document.querySelector('.slideContainer');
const sliderCards = document.querySelector('.sliderCards');

const adSlider = document.querySelector('.adSlideContainer')
const adSliderCards = document.querySelector('.adSliderCards');

let mouseMaintained = false;
let cursorX;
let currentSlide = 0;

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
        document.getElementById("bar" + Math.round((- e.offsetX + cursorX) / sliderImageWidth)).classList.add('highlightBar');
        currentSlide = Math.round((- e.offsetX + cursorX) / sliderImageWidth);
    }
});

adSlider.addEventListener("mousedown", (e) => {
    mouseMaintained = true;
    cursorX = e.offsetX - adSliderCards.offsetLeft;
});

adSlider.addEventListener("mousemove", (e) => {
    if (!mouseMaintained)
        return;

    e.preventDefault();

    if (e.offsetX - cursorX < maxAdSliderOffset - 34) { // if at right limit then go left
        adSliderCards.style.left = `-35px`;
    }
    else if (e.offsetX - cursorX > -35) { // if at left limit then go right
        adSliderCards.style.left = `${maxAdSliderOffset - 35}px`;
    }
    else {
        adSliderCards.style.left = `${e.offsetX - cursorX}px`
    }
});

window.addEventListener("mouseup", () => {
    mouseMaintained = false;
});

/* slider bar */
function firstSlide(slideIndex) {
    sliderCards.style.left = `-${sliderImageWidth * slideIndex}px`;
    bars.forEach((bar) => {
        bar.classList.remove('highlightBar');
    });
    document.getElementById("bar" + slideIndex).classList.add('highlightBar');
    currentSlide = slideIndex;
}

function nextSlide() {
    if (currentSlide < 9)
        currentSlide++;
    else
        return;

    sliderCards.style.left = `-${sliderImageWidth * currentSlide}px`;
    bars.forEach((bar) => {
        bar.classList.remove('highlightBar');
    });
    document.getElementById("bar" + currentSlide).classList.add('highlightBar');
}

function previousSlide() {
    if (currentSlide > 0)
        currentSlide--;
    else
        return;

    sliderCards.style.left = `-${sliderImageWidth * currentSlide}px`;
    bars.forEach((bar) => {
        bar.classList.remove('highlightBar');
    });
    document.getElementById("bar" + currentSlide).classList.add('highlightBar');
}