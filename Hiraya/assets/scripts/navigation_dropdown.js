let icon_button = document.getElementById("drop_down_button_div")
let drop_down_option = document.getElementById("drop_down_options_div");
let x_icon = document.getElementById("x_icon_img");
let burger_icon = document.getElementById("burger_icon_img");
let focus_shade = document.getElementById("focus_div");


icon_button.addEventListener("pointerup", function() {
    if (drop_down_option.style.visibility != "visible") {
        drop_down_option.style.visibility = "visible";
        burger_icon.style.display = "none";
        x_icon.style.display = "block";
        focus_shade.style.visibility = "visible";
        if (!focus_shade) {
            console.error("focus_div not found!");
        }
    }
    else {
        drop_down_option.style.visibility = "hidden";
        x_icon.style.display = "none";
        burger_icon.style.display = "block";
        focus_shade.style.visibility = "hidden";
    }
});

focus_shade.addEventListener("pointerup", function () {
    drop_down_option.style.visibility = "hidden";
    x_icon.style.display = "none";
    burger_icon.style.display = "block";
    focus_shade.style.visibility = "hidden";
});

document.addEventListener("scroll", function() {
    drop_down_option.style.visibility = "hidden";
    x_icon.style.display = "none";
    burger_icon.style.display = "block";
    focus_shade.style.visibility = "hidden";
});