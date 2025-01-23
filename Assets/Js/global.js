let point1 = document.getElementById("point1");
let point2=document.getElementById("point2");
let point3=document.getElementById("point3");

let image1 = document.getElementById("slide1");
let image2 = document.getElementById("slide2");
let image3 = document.getElementById("slide3");

let text1= document.getElementById("prim");
let text2=document.getElementById("MD");
let text3=document.getElementById("Eve");
let text4=document.getElementById("img2but");
let text5=document.getElementById("Eve2")

point1.addEventListener("click", () => {
    if(point1.style.opacity!="90%"){
        if(point2.style.opacity="90%"){
            image1.style.left="5px";
            image2.style.left="1030px";
            image3.style.left="2050px";

            point1.style.opacity="90%";
            point2.style.opacity="50%";

            text1.style.left="1060px";
            text2.style.left="1090px";
            text3.style.left="1090px";
            text4.style.left="1090px";
            text5.style.left="2100px";
        }
        if(point3.style.opacity="90%"){
            image1.style.left="5px";
            image2.style.left="1030px";
            image3.style.left="2050px";

            point1.style.opacity="90%";
            point3.style.opacity="50%";

            text1.style.left="1060px";
            text2.style.left="1090px";
            text3.style.left="1090px";
            text4.style.left="1090px";
            text5.style.left="2100px";
        }
    }
})

point2.addEventListener("click",()=>{
    if (point2.style.opacity!="90%"){
        if(point1.style.opacity="90%"){
            image1.style.left="2050px";
            image2.style.left="5px";
            image3.style.left="1030px";

            point2.style.opacity="90%";
            point1.style.opacity="50%";

            text1.style.left="35px";
            text2.style.left="65px";
            text3.style.left="90px";
            text4.style.left="90px";
            text5.style.left="1090px";
        }
        if(point3.style.opacity="90%"){
            image1.style.left="2050px";
            image2.style.left="5px";
            image3.style.left="1030px";

            point2.style.opacity="90%";
            point3.style.opacity="50%";

            text1.style.left="35px";
            text2.style.left="65px";
            text3.style.left="90px";
            text4.style.left="90px";
            text5.style.left="1090px";
        }
    }
})

point3.addEventListener("click",()=>{
    if (point3.style.opacity!="90%"){
        if(point1.style.opacity="90%"){
            image1.style.left="1030px";
            image2.style.left="2050px";
            image3.style.left="5px";

            point3.style.opacity="90%";
            point1.style.opacity="50%";

            text1.style.left="2080px";
            text2.style.left="2100px";
            text3.style.left="2100px";
            text4.style.left="2100px";
            text5.style.left="90px";
        }
        if(point2.style.opacity="90%"){
            image1.style.left="1030px";
            image2.style.left="2050px";
            image3.style.left="5px";

            point3.style.opacity="90%";
            point2.style.opacity="50%";

            text1.style.left="2080px";
            text2.style.left="2100px";
            text3.style.left="2100px";
            text4.style.left="2100px";
            text5.style.left="90px";
        }
    }
})

