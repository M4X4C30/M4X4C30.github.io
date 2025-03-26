document.addEventListener("DOMContentLoaded", function () {
    const artwork = document.getElementById("artwork");
    const magnifier = document.getElementById("magnifier");

    artwork.addEventListener("mousemove", function (e) {
        let rect = artwork.getBoundingClientRect();
        let x = e.clientX - rect.left;  // Cursor X inside the image
        let y = e.clientY - rect.top;   // Cursor Y inside the image
        let percentX = (x / rect.width) * 100;
        let percentY = (y / rect.height) * 100;

        // Adjust position based on scroll
        let pageX = e.pageX;  // X position relative to the full page
        let pageY = e.pageY;  // Y position relative to the full page

        // Update magnifier position
        magnifier.style.display = "block";
        magnifier.style.left = `${pageX - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${pageY - magnifier.offsetHeight / 2}px`;
        magnifier.style.backgroundImage = `url(${artwork.src})`;
        magnifier.style.backgroundPosition = `${percentX}% ${percentY}%`;
    });

    // Hide magnifier when leaving the image
    artwork.addEventListener("mouseleave", function () {
        magnifier.style.display = "none";
    });
});