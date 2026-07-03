const gift = document.getElementById("gift");
const lid = document.querySelector(".gift-lid");

let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open lid
    lid.style.transform =
        "rotateX(120deg) rotateZ(-18deg) translateY(-25px)";

    gift.style.transform = "scale(1.05)";

    // Confetti burst
    confetti({
        particleCount: 250,
        spread: 120,
        origin: {
            y: 0.6
        }
    });

    // Fire several bursts
    setTimeout(() => {

        confetti({
            particleCount: 150,
            angle: 60,
            spread: 70,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 150,
            angle: 120,
            spread: 70,
            origin: {
                x: 1
            }
        });

    }, 500);

});
