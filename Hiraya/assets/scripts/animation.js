function isElementOnScreen(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= window.innerHeight
        // rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        // const rect = elementWithAnimation.getBoundingClientRect();
        // const isTopToBotVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        // const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight && rect.left >= 0 && rect.right <= window.innerWidth;
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

        if (isElementOnScreen(Category_Title.parentElement.children[1].children[1].children[0])) {
            if (Category_Title.classList.contains("Anim_Fade_Out"))
                Category_Title.classList.remove("Anim_Fade_Out");

            if (!Category_Title.classList.contains("Anim_Fade_In"))
                Category_Title.classList.add("Anim_Fade_In");
        }
        else {
            if (Category_Title.classList.contains("Anim_Fade_In")) {
                Category_Title.classList.remove("Anim_Fade_In");

                if (!Category_Title.classList.contains("Anim_Fade_Out"))
                    Category_Title.classList.add("Anim_Fade_Out");
            }
        }
    });
}

checkVisibility();

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);

