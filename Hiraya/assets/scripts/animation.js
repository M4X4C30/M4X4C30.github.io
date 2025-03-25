function isElementOnScreen(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

function isElementFullyOnScreen(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= window.innerHeight
    );
}

function checkVisibility() {
    document.querySelectorAll('.HAS_ANIMATION').forEach((elementWithAnimation) => {

        if (isElementOnScreen(elementWithAnimation)) {
            if (elementWithAnimation.classList.contains("To_Fade_In")) {
                if (elementWithAnimation.classList.contains("Anim_Fade_Out")) {
                    elementWithAnimation.classList.remove("Anim_Fade_Out");
                }
                elementWithAnimation.classList.add("Anim_Fade_In");
            }
        } 
        else {
            if (elementWithAnimation.classList.contains("Anim_Fade_In")) {
                elementWithAnimation.classList.remove("Anim_Fade_In");
                elementWithAnimation.classList.add("Anim_Fade_Out");
            }
        }
    });

    document.querySelectorAll('.Category_Title').forEach((Category_Title) => {

        // console.log(Category_Title.parentElement.children[1].children[1].children[0].classList);

        // console.log(Category_Title.textContent, ": ", isElementOnScreen(Category_Title.parentElement.children[1].children[1].children[0]));

        if (isElementFullyOnScreen(Category_Title.parentElement.children[1].children[0]) && isElementOnScreen(Category_Title.parentElement.children[1].children[1].children[0])) {
            if (Category_Title.classList.contains("Anim_Fade_Out"))
                Category_Title.classList.remove("Anim_Fade_Out");

            if (!Category_Title.classList.contains("Anim_Appear_Slide_Down")) {
                Category_Title.style.animationDuration = "0.5s";
                Category_Title.classList.add("Anim_Appear_Slide_Down");
            }
        }
        else {
            if (Category_Title.classList.contains("Anim_Appear_Slide_Down")) {
                Category_Title.classList.remove("Anim_Appear_Slide_Down");

                if (!Category_Title.classList.contains("Anim_Fade_Out")) {
                    Category_Title.style.animationDuration = "0.25s";
                    Category_Title.classList.add("Anim_Fade_Out");
                }
            }
        }
    });
}

checkVisibility();

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);

