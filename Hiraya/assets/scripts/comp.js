// ------------------ SCULPTURES ------------------
let next_div_Sculptures = document.getElementById("button_next_Sculptures");
let prev_div_Sculptures = document.getElementById("button_prev_Sculptures");
let art_box_container_Sculptures = document.getElementById("art_box_container_Sculptures");

let sculpturesIndexView;


function ShowArtsInRange_Sculptures(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Sculptures)) return;
    // console.log("sculpturesIndexView: ", sculpturesIndexView, "<");

    // NEXT TO-RIGHT
    if ((sculpturesIndexView + indexMove) < (numOfArts - viewDistance) && (sculpturesIndexView + indexMove) >= viewDistance) {
        sculpturesIndexView += indexMove;

        if ((sculpturesIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Sculptures.style.opacity = 0.25;
        else next_div_Sculptures.style.opacity = 1;
        
        if ((sculpturesIndexView + indexMove) < viewDistance) prev_div_Sculptures.style.opacity = 0.25;
        else prev_div_Sculptures.style.opacity = 1;

        // TO-RIGHT
        for (let i = sculpturesIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Sculptures.children[i];
            
            if (i <= (sculpturesIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation"))
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation"))
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
            }
        }

        // TO-LEFT
        for (let i = sculpturesIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Sculptures.children[i];
            
            if (i >= (sculpturesIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation"))
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation"))
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Sculptures, sculpturesIndexView);
        
        // art_box_container_Sculptures.children[sculpturesIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new sculpturesIndexView: ", sculpturesIndexView, "<-");
}


function InstantSnap_Sculptures () {
    const secondItem = art_box_container_Sculptures.children[sculpturesIndexView];

    if (secondItem) {
        art_box_container_Sculptures.scrollTo({
            left: secondItem.offsetLeft - (art_box_container_Sculptures.clientWidth / 2) + (secondItem.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Sculptures() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Sculptures(0);
        InstantSnap_Sculptures();
    }
    else {
        viewDistance = 1;
        if (sculpturesIndexView === 0) {
            ShowArtsInRange_Sculptures(1);
        }
        else if (sculpturesIndexView === 6) {
            ShowArtsInRange_Sculptures(-1);
        }
        InstantSnap_Sculptures();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

sculpturesIndexView = viewDistance;

window.onload = ChangeViewByRatio_Sculptures();

window.onload = InstantSnap_Sculptures();


next_div_Sculptures.addEventListener("pointerup", function() {
    ShowArtsInRange_Sculptures(1);
});

prev_div_Sculptures.addEventListener("pointerup", function() {
    ShowArtsInRange_Sculptures(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Sculptures);
window.addEventListener("orientationchange", ChangeViewByRatio_Sculptures);