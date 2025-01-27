let point1 = document.getElementById("point1");
let point2=document.getElementById("point2");
let point3=document.getElementById("point3");

let image1 = document.getElementById("slide1");
let image2 = document.getElementById("slide2");
let image3 = document.getElementById("slide3");

let text1= document.getElementById("textimg2");
let text2=document.getElementById("Eve2");

let place1= "1%";
let place2= "78%";
let place3= "160%";

let placetext1="5%";
let placetext2="82%";
let placetext3="162%";

var sliderImageMargin = window.getComputedStyle(document.getElementById("basicImg")).marginRight;
var sliderImageWidth = document.getElementById("basicImg").offsetWidth
    + parseInt(sliderImageMargin.substring(0, sliderImageMargin.length - 2)) + 4; // 4 = whitespace
var maxSliderOffset = -9 * sliderImageWidth;

var adSliderImageMargin = window.getComputedStyle(document.getElementById("basicAdImg")).marginRight; // keeps px in the string
var hoverWidth = document.getElementById("basicAdImg").offsetWidth;
var adSliderImageWidth = hoverWidth +
    parseInt(adSliderImageMargin.substring(0, adSliderImageMargin.length - 2)) * 2 + 4; // margin-right = margin-left
var maxAdSliderOffset = -adSliderImageWidth * 13;

const bars = document.querySelectorAll('.bar');
const slider = document.querySelector('.slideContainer');
const sliderCards = document.querySelector('.sliderCards');

const adSlider = document.querySelector('.adSlideContainer')
const adSliderCards = document.querySelector('.adSliderCards');
const adCards = document.querySelectorAll('.adSliderImageContainer');

let mouseMaintained = false;
let cursorX = 0;
let currentSlide = 0;

point1.addEventListener("click", () => {
    if(point1.style.opacity!="90%"){
        if(point2.style.opacity="90%"){
            image1.style.left=place1;
            image2.style.left=place2;
            image3.style.left=place3;

            point1.style.opacity="90%";
            point2.style.opacity="50%";

            text1.style.left=placetext2;
            text2.style.left=placetext3;
        }
        if(point3.style.opacity="90%"){
            image1.style.left=place1;
            image2.style.left=place2;
            image3.style.left=place3;

            point1.style.opacity="90%";
            point3.style.opacity="50%";

            text1.style.left=placetext2;
            text2.style.left=placetext3;
        }
    }
})

point2.addEventListener("click",()=>{
    if (point2.style.opacity!="90%"){
        if(point1.style.opacity="90%"){
            image1.style.left=place3;
            image2.style.left=place1;
            image3.style.left=place2;

            point2.style.opacity="90%";
            point1.style.opacity="50%";

            text1.style.left=placetext1;
            text2.style.left=placetext2;
        }
        if(point3.style.opacity="90%"){
            image1.style.left=place3;
            image2.style.left=place1;
            image3.style.left=place2;

            point2.style.opacity="90%";
            point3.style.opacity="50%";

            text1.style.left=placetext1;
            text2.style.left=placetext2;
        }
    }
})

point3.addEventListener("click",()=>{
    if (point3.style.opacity!="90%"){
        if(point1.style.opacity="90%"){
            image1.style.left=place2;
            image2.style.left=place3;
            image3.style.left=place1;

            point3.style.opacity="90%";
            point1.style.opacity="50%";

            text1.style.left=placetext3;
            text2.style.left=placetext1;
        }
        if(point2.style.opacity="90%"){
            image1.style.left=place2;
            image2.style.left=place3;
            image3.style.left=place1;

            point3.style.opacity="90%";
            point2.style.opacity="50%";

            text1.style.left=placetext3;
            text2.style.left=placetext1;
        }
    }
})

let facebook= document.getElementById("facebook");
let twitter = document.getElementById("twitter");

let butimg2=document.getElementById("img2but");

butimg2.addEventListener("mouseover",()=>{
    butimg2.style.top="29.5%";
    butimg2.style.height="6%";
    butimg2.style.width="52%";
})
butimg2.addEventListener("mouseout",()=>{
    butimg2.style.top="30%";
    butimg2.style.height="5%";
    butimg2.style.width="50%";
})

facebook.addEventListener("mouseover",()=>{
    facebook.style.left="3%";
})
facebook.addEventListener("mouseout",()=>{
    facebook.style.left="2%";
})

twitter.addEventListener("mouseover",()=>{
    twitter.style.left="3%";
})
twitter.addEventListener("mouseout",()=>{
    twitter.style.left="2%";
})

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
    adCards.forEach((adCard) => {
        adCard.classList.remove('adSliderImageContainerHover');
    });
    if (!mouseMaintained) {
        adCards[Math.round((e.offsetX - adSliderCards.offsetLeft) / adSliderImageWidth)].classList.add('adSliderImageContainerHover');
        return;
    }

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