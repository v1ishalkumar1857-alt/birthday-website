const gift = document.getElementById("gift");
const lid = document.querySelector(".gift-lid");

const light = document.getElementById("magicLight");

const cake = document.getElementById("cake");

const message = document.getElementById("message");

let opened=false;

gift.addEventListener("click",()=>{

if(opened) return;

opened=true;

lid.style.transform=
"rotateX(120deg) rotateZ(-18deg) translateY(-25px)";

gift.style.transform="scale(1.05)";

confetti({
particleCount:250,
spread:120
});

light.style.opacity=1;

setTimeout(()=>{

light.style.transition="1s";

light.style.opacity=0;

cake.classList.remove("hidden");

typeMessage("🎉 Happy Birthday! Wishing you endless happiness! ❤️");

},1200);

});

function typeMessage(text){

let i=0;

const timer=setInterval(()=>{

message.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},70);

}
