document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    if (header) {
        header.style.opacity = 0;
        header.style.transform = "translateY(-300px)";
        header.style.transition = "opacity 1s ease-out, transform 1s ease-out";

        setTimeout(() => {
            header.style.opacity = 1;
            header.style.transform = "translateY(0)";
        }, 300);
    }

    const images = document.querySelectorAll("img:not(.no-effects)");
    images.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transform = "translateY(20px)";
        img.style.transition = "opacity 1s ease-out, transform 1s ease-out";

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, 500 * index);
    });

    const title = document.querySelector(".overlay h1");
        title.style.opacity = 0;
        title.style.transform = "translateX(250px)";
        title.style.transition = "opacity 3s ease-out, transform 3s ease-out";
    
    setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = "translateX(0)";
    }, 500);

    images.forEach(img => {
        const parentDiv = img.closest(".extra-image");
        const box = parentDiv ? parentDiv.querySelector(".box") : null;
        if (box) {
            box.style.opacity = 0;
            box.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            box.style.transform = "translateY(10px)";
            box.style.pointerEvents = "none";
        }

        function applyHoverEffects() {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.5s ease-in-out";
            if (box) {
                box.style.opacity = 1;
                box.style.transform = "translateY(0)";
            }
            images.forEach(otherImg => {
                if (otherImg !== img) {
                    otherImg.style.filter = "brightness(30%)";
                    otherImg.style.transition = "filter 0.5s ease-in-out";
                }
            });
        }

        function removeHoverEffects() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.5s ease-in-out";
            if (box) {
                box.style.opacity = 0;
                box.style.transform = "translateY(10px)";
            }
            images.forEach(otherImg => {
                otherImg.style.filter = "brightness(100%)";
                otherImg.style.transition = "filter 0.5s ease-in-out";
            });
        }

        img.addEventListener("mouseenter", applyHoverEffects);
        img.addEventListener("mouseleave", removeHoverEffects);
        img.addEventListener("touchstart", applyHoverEffects, { passive: true });
        img.addEventListener("touchend", removeHoverEffects, { passive: true });
    });
});