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

let facebook2= document.getElementById("facebookfooter");
let twitter2 = document.getElementById("twitterfooter");

facebook2.addEventListener("mouseover",()=>{
    facebook2.style.top="-1%";
})
facebook2.addEventListener("mouseout",()=>{
    facebook2.style.left="0%";
})

twitter2.addEventListener("mouseover",()=>{
    twitter2.style.left="-1%";
})
twitter2.addEventListener("mouseout",()=>{
    twitter2.style.left="0%";
})

