const gift = document.getElementById("gift");

const lid = document.querySelector(".gift-lid");

let opened = false;

gift.addEventListener("click",()=>{

if(opened) return;

opened=true;

lid.style.transform=
"rotateX(120deg) rotateZ(-18deg) translateY(-25px)";

gift.style.transform=
"scale(1.05)";
});
