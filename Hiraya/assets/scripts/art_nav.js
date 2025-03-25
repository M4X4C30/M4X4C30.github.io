function scrollIntoViewX(container, childIndex) {
    if (!container || childIndex < 0 || childIndex >= container.children.length) return;

    const element = container.children[childIndex];
    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Center the element inside the container
    const offset = rect.left - containerRect.left - (container.clientWidth / 2) + (rect.width / 2);

    container.scrollTo({
        left: container.scrollLeft + offset,
        behavior: "smooth"
    });
}


let viewDistance = 1;

let numOfArts = 7;

// ------------------ PAINTING ------------------
let next_div_Painting = document.getElementById("button_next_Painting");
let prev_div_Painting = document.getElementById("button_prev_Painting");
let art_box_container_Painting = document.getElementById("art_box_container_Painting");

let paintingIndexView;


function ShowArtsInRange_Painting(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Painting)) return;
    // console.log("paintingIndexView: ", paintingIndexView, "<");

    // NEXT TO-RIGHT
    if ((paintingIndexView + indexMove) < (numOfArts - viewDistance) && (paintingIndexView + indexMove) >= viewDistance) {
        paintingIndexView += indexMove;

        if ((paintingIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Painting.style.opacity = 0.25;
        else next_div_Painting.style.opacity = 1;
        
        if ((paintingIndexView + indexMove) < viewDistance) prev_div_Painting.style.opacity = 0.25;
        else prev_div_Painting.style.opacity = 1;

        // TO-RIGHT
        for (let i = paintingIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Painting.children[i];
            
            if (i <= (paintingIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = paintingIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Painting.children[i];
            
            if (i >= (paintingIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Painting, paintingIndexView);
        
        // art_box_container_Painting.children[paintingIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new paintingIndexView: ", paintingIndexView, "<-");
}


function InstantSnap_Painting () {
    const itemToSnap = art_box_container_Painting.children[paintingIndexView];

    if (itemToSnap) {
        art_box_container_Painting.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Painting.clientWidth / 2) + (itemToSnap.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Painting() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Painting(0);
        InstantSnap_Painting();
    }
    else {
        viewDistance = 1;
        if (paintingIndexView === 0) {
            ShowArtsInRange_Painting(1);
        }
        else if (paintingIndexView === 6) {
            ShowArtsInRange_Painting(-1);
        }
        InstantSnap_Painting();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

paintingIndexView = viewDistance;

window.addEventListener("load", function() {
    ChangeViewByRatio_Painting();
    InstantSnap_Painting();
});
// window.onload = ChangeViewByRatio_Painting();

// window.onload = InstantSnap_Painting();


next_div_Painting.addEventListener("pointerup", function() {
    ShowArtsInRange_Painting(1);
});

prev_div_Painting.addEventListener("pointerup", function() {
    ShowArtsInRange_Painting(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Painting);
window.addEventListener("orientationchange", ChangeViewByRatio_Painting);




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
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = sculpturesIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Sculptures.children[i];
            
            if (i >= (sculpturesIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
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
    const itemToSnap = art_box_container_Sculptures.children[sculpturesIndexView];

    if (itemToSnap) {
        art_box_container_Sculptures.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Sculptures.clientWidth / 2) + (itemToSnap.clientWidth / 2),
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

window.addEventListener("load", function() {
    ChangeViewByRatio_Sculptures();
    InstantSnap_Sculptures();
});
// window.onload = ChangeViewByRatio_Sculptures();

// window.onload = InstantSnap_Sculptures();


next_div_Sculptures.addEventListener("pointerup", function() {
    ShowArtsInRange_Sculptures(1);
});

prev_div_Sculptures.addEventListener("pointerup", function() {
    ShowArtsInRange_Sculptures(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Sculptures);
window.addEventListener("orientationchange", ChangeViewByRatio_Sculptures);



// ------------------ PHOTOGRAPHY ------------------
let next_div_Photography = document.getElementById("button_next_Photography");
let prev_div_Photography = document.getElementById("button_prev_Photography");
let art_box_container_Photography = document.getElementById("art_box_container_Photography");

let photographyIndexView;


function ShowArtsInRange_Photography(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Photography)) return;
    // console.log("photographyIndexView: ", photographyIndexView, "<");

    // NEXT TO-RIGHT
    if ((photographyIndexView + indexMove) < (numOfArts - viewDistance) && (photographyIndexView + indexMove) >= viewDistance) {
        photographyIndexView += indexMove;

        if ((photographyIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Photography.style.opacity = 0.25;
        else next_div_Photography.style.opacity = 1;
        
        if ((photographyIndexView + indexMove) < viewDistance) prev_div_Photography.style.opacity = 0.25;
        else prev_div_Photography.style.opacity = 1;

        // TO-RIGHT
        for (let i = photographyIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Photography.children[i];
            
            if (i <= (photographyIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = photographyIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Photography.children[i];
            
            if (i >= (photographyIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Photography, photographyIndexView);
        
        // art_box_container_Photography.children[photographyIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new photographyIndexView: ", photographyIndexView, "<-");
}


function InstantSnap_Photography () {
    const itemToSnap = art_box_container_Photography.children[photographyIndexView];

    if (itemToSnap) {
        art_box_container_Photography.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Photography.clientWidth / 2) + (itemToSnap.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Photography() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Photography(0);
        InstantSnap_Photography();
    }
    else {
        viewDistance = 1;
        if (photographyIndexView === 0) {
            ShowArtsInRange_Photography(1);
        }
        else if (photographyIndexView === 6) {
            ShowArtsInRange_Photography(-1);
        }
        InstantSnap_Photography();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

photographyIndexView = viewDistance;

window.addEventListener("load", function() {
    ChangeViewByRatio_Photography();
    InstantSnap_Photography();
});
// window.onload = ChangeViewByRatio_Photography();

// window.onload = InstantSnap_Photography();


next_div_Photography.addEventListener("pointerup", function() {
    ShowArtsInRange_Photography(1);
});

prev_div_Photography.addEventListener("pointerup", function() {
    ShowArtsInRange_Photography(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Photography);
window.addEventListener("orientationchange", ChangeViewByRatio_Photography);


// ------------------ MIXED MEDIA & INSTALLATIONS ------------------
let next_div_Mixed_Media_Installation = document.getElementById("button_next_Mixed_Media_Installation");
let prev_div_Mixed_Media_Installation = document.getElementById("button_prev_Mixed_Media_Installation");
let art_box_container_Mixed_Media_Installation = document.getElementById("art_box_container_Mixed_Media_Installation");

let mixed_Media_InstallationIndexView;


function ShowArtsInRange_Mixed_Media_Installation(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Mixed_Media_Installation)) return;
    // console.log("mixed_Media_InstallationIndexView: ", mixed_Media_InstallationIndexView, "<");

    // NEXT TO-RIGHT
    if ((mixed_Media_InstallationIndexView + indexMove) < (numOfArts - viewDistance) && (mixed_Media_InstallationIndexView + indexMove) >= viewDistance) {
        mixed_Media_InstallationIndexView += indexMove;

        if ((mixed_Media_InstallationIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Mixed_Media_Installation.style.opacity = 0.25;
        else next_div_Mixed_Media_Installation.style.opacity = 1;
        
        if ((mixed_Media_InstallationIndexView + indexMove) < viewDistance) prev_div_Mixed_Media_Installation.style.opacity = 0.25;
        else prev_div_Mixed_Media_Installation.style.opacity = 1;

        // TO-RIGHT
        for (let i = mixed_Media_InstallationIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Mixed_Media_Installation.children[i];
            
            if (i <= (mixed_Media_InstallationIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = mixed_Media_InstallationIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Mixed_Media_Installation.children[i];
            
            if (i >= (mixed_Media_InstallationIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Mixed_Media_Installation, mixed_Media_InstallationIndexView);
        
        // art_box_container_Mixed_Media_Installation.children[mixed_Media_InstallationIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new mixed_Media_InstallationIndexView: ", mixed_Media_InstallationIndexView, "<-");
}


function InstantSnap_Mixed_Media_Installation () {
    const itemToSnap = art_box_container_Mixed_Media_Installation.children[mixed_Media_InstallationIndexView];

    if (itemToSnap) {
        art_box_container_Mixed_Media_Installation.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Mixed_Media_Installation.clientWidth / 2) + (itemToSnap.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Mixed_Media_Installation() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Mixed_Media_Installation(0);
        InstantSnap_Mixed_Media_Installation();
    }
    else {
        viewDistance = 1;
        if (mixed_Media_InstallationIndexView === 0) {
            ShowArtsInRange_Mixed_Media_Installation(1);
        }
        else if (mixed_Media_InstallationIndexView === 6) {
            ShowArtsInRange_Mixed_Media_Installation(-1);
        }
        InstantSnap_Mixed_Media_Installation();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

mixed_Media_InstallationIndexView = viewDistance;

window.addEventListener("load", function() {
    ChangeViewByRatio_Mixed_Media_Installation();
    InstantSnap_Mixed_Media_Installation();
});
// window.onload = ChangeViewByRatio_Mixed_Media_Installation();

// window.onload = InstantSnap_Mixed_Media_Installation();


next_div_Mixed_Media_Installation.addEventListener("pointerup", function() {
    ShowArtsInRange_Mixed_Media_Installation(1);
});

prev_div_Mixed_Media_Installation.addEventListener("pointerup", function() {
    ShowArtsInRange_Mixed_Media_Installation(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Mixed_Media_Installation);
window.addEventListener("orientationchange", ChangeViewByRatio_Mixed_Media_Installation);



// ------------------ STREET ARTS AND MURALS ------------------
let next_div_Street_Arts_and_Murals = document.getElementById("button_next_Street_Arts_and_Murals");
let prev_div_Street_Arts_and_Murals = document.getElementById("button_prev_Street_Arts_and_Murals");
let art_box_container_Street_Arts_and_Murals = document.getElementById("art_box_container_Street_Arts_and_Murals");

let street_Arts_and_MuralsIndexView;


function ShowArtsInRange_Street_Arts_and_Murals(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Street_Arts_and_Murals)) return;
    // console.log("street_Arts_and_MuralsIndexView: ", street_Arts_and_MuralsIndexView, "<");

    // NEXT TO-RIGHT
    if ((street_Arts_and_MuralsIndexView + indexMove) < (numOfArts - viewDistance) && (street_Arts_and_MuralsIndexView + indexMove) >= viewDistance) {
        street_Arts_and_MuralsIndexView += indexMove;

        if ((street_Arts_and_MuralsIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Street_Arts_and_Murals.style.opacity = 0.25;
        else next_div_Street_Arts_and_Murals.style.opacity = 1;
        
        if ((street_Arts_and_MuralsIndexView + indexMove) < viewDistance) prev_div_Street_Arts_and_Murals.style.opacity = 0.25;
        else prev_div_Street_Arts_and_Murals.style.opacity = 1;

        // TO-RIGHT
        for (let i = street_Arts_and_MuralsIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Street_Arts_and_Murals.children[i];
            
            if (i <= (street_Arts_and_MuralsIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = street_Arts_and_MuralsIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Street_Arts_and_Murals.children[i];
            
            if (i >= (street_Arts_and_MuralsIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Street_Arts_and_Murals, street_Arts_and_MuralsIndexView);
        
        // art_box_container_Street_Arts_and_Murals.children[street_Arts_and_MuralsIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new street_Arts_and_MuralsIndexView: ", street_Arts_and_MuralsIndexView, "<-");
}


function InstantSnap_Street_Arts_and_Murals () {
    const itemToSnap = art_box_container_Street_Arts_and_Murals.children[street_Arts_and_MuralsIndexView];

    if (itemToSnap) {
        art_box_container_Street_Arts_and_Murals.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Street_Arts_and_Murals.clientWidth / 2) + (itemToSnap.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Street_Arts_and_Murals() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Street_Arts_and_Murals(0);
        InstantSnap_Street_Arts_and_Murals();
    }
    else {
        viewDistance = 1;
        if (street_Arts_and_MuralsIndexView === 0) {
            ShowArtsInRange_Street_Arts_and_Murals(1);
        }
        else if (street_Arts_and_MuralsIndexView === 6) {
            ShowArtsInRange_Street_Arts_and_Murals(-1);
        }
        InstantSnap_Street_Arts_and_Murals();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

street_Arts_and_MuralsIndexView = viewDistance;

window.addEventListener("load", function() {
    ChangeViewByRatio_Street_Arts_and_Murals();
    InstantSnap_Street_Arts_and_Murals();
});
// window.onload = ChangeViewByRatio_Street_Arts_and_Murals();

// window.onload = InstantSnap_Street_Arts_and_Murals();


next_div_Street_Arts_and_Murals.addEventListener("pointerup", function() {
    ShowArtsInRange_Street_Arts_and_Murals(1);
});

prev_div_Street_Arts_and_Murals.addEventListener("pointerup", function() {
    ShowArtsInRange_Street_Arts_and_Murals(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Street_Arts_and_Murals);
window.addEventListener("orientationchange", ChangeViewByRatio_Street_Arts_and_Murals);



// ------------------ CRAFTS AND FORMS ------------------
let next_div_Crafts_And_Forms = document.getElementById("button_next_Crafts_And_Forms");
let prev_div_Crafts_And_Forms = document.getElementById("button_prev_Crafts_And_Forms");
let art_box_container_Crafts_And_Forms = document.getElementById("art_box_container_Crafts_And_Forms");

let crafts_And_FormsIndexView;


function ShowArtsInRange_Crafts_And_Forms(indexMove) {
    // if (!isFullyOnScreen(art_box_container_Crafts_And_Forms)) return;
    // console.log("crafts_And_FormsIndexView: ", crafts_And_FormsIndexView, "<");

    // NEXT TO-RIGHT
    if ((crafts_And_FormsIndexView + indexMove) < (numOfArts - viewDistance) && (crafts_And_FormsIndexView + indexMove) >= viewDistance) {
        crafts_And_FormsIndexView += indexMove;

        if ((crafts_And_FormsIndexView + indexMove) >= (numOfArts - viewDistance)) next_div_Crafts_And_Forms.style.opacity = 0.25;
        else next_div_Crafts_And_Forms.style.opacity = 1;
        
        if ((crafts_And_FormsIndexView + indexMove) < viewDistance) prev_div_Crafts_And_Forms.style.opacity = 0.25;
        else prev_div_Crafts_And_Forms.style.opacity = 1;

        // TO-RIGHT
        for (let i = crafts_And_FormsIndexView; i < numOfArts; i++) {
            let childOnIndex = art_box_container_Crafts_And_Forms.children[i];
            
            if (i <= (crafts_And_FormsIndexView + viewDistance)) {
                // console.log(i, "-");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }

        // TO-LEFT
        for (let i = crafts_And_FormsIndexView; i >= 0; i--) {
            let childOnIndex = art_box_container_Crafts_And_Forms.children[i];
            
            if (i >= (crafts_And_FormsIndexView - viewDistance)) {
                // console.log(i, "=");
                // SHOW
                if (childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.remove("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "auto";
                }

                if (!childOnIndex.classList.contains("category_Arts_Show_Animation"))
                    childOnIndex.classList.add("category_Arts_Show_Animation");
            }
            else {
                // HIDE
                if (childOnIndex.classList.contains("category_Arts_Show_Animation")) 
                    childOnIndex.classList.remove("category_Arts_Show_Animation");

                if (!childOnIndex.classList.contains("category_Arts_Hide_Animation")) {
                    childOnIndex.classList.add("category_Arts_Hide_Animation");
                    childOnIndex.children[4].style.pointerEvents = "none";
                }
            }
        }
        
        // Usage
        scrollIntoViewX(art_box_container_Crafts_And_Forms, crafts_And_FormsIndexView);
        
        // art_box_container_Crafts_And_Forms.children[crafts_And_FormsIndexView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        // console.log("change: ", indexMove);
    }

    // console.log("new crafts_And_FormsIndexView: ", crafts_And_FormsIndexView, "<-");
}


function InstantSnap_Crafts_And_Forms () {
    const itemToSnap = art_box_container_Crafts_And_Forms.children[crafts_And_FormsIndexView];

    if (itemToSnap) {
        art_box_container_Crafts_And_Forms.scrollTo({
            left: itemToSnap.offsetLeft - (art_box_container_Crafts_And_Forms.clientWidth / 2) + (itemToSnap.clientWidth / 2),
            behavior: "instant"
        });
    }
}


function ChangeViewByRatio_Crafts_And_Forms() {
    const sample = document.querySelector(".art_box");

    const computedStyle = window.getComputedStyle(sample);

    if (computedStyle.getPropertyValue("scroll-snap-align") === "center") {
        viewDistance = 0;
        ShowArtsInRange_Crafts_And_Forms(0);
        InstantSnap_Crafts_And_Forms();
    }
    else {
        viewDistance = 1;
        if (crafts_And_FormsIndexView === 0) {
            ShowArtsInRange_Crafts_And_Forms(1);
        }
        else if (crafts_And_FormsIndexView === 6) {
            ShowArtsInRange_Crafts_And_Forms(-1);
        }
        InstantSnap_Crafts_And_Forms();
    }

    // console.log(computedStyle.getPropertyValue("scroll-snap-align"));
}

crafts_And_FormsIndexView = viewDistance;

window.addEventListener("load", function() {
    ChangeViewByRatio_Crafts_And_Forms();
    InstantSnap_Crafts_And_Forms();
});
// window.onload = ChangeViewByRatio_Crafts_And_Forms();

// window.onload = InstantSnap_Crafts_And_Forms();


next_div_Crafts_And_Forms.addEventListener("pointerup", function() {
    ShowArtsInRange_Crafts_And_Forms(1);
});

prev_div_Crafts_And_Forms.addEventListener("pointerup", function() {
    ShowArtsInRange_Crafts_And_Forms(-1);
});



window.addEventListener("resize", ChangeViewByRatio_Crafts_And_Forms);
window.addEventListener("orientationchange", ChangeViewByRatio_Crafts_And_Forms);