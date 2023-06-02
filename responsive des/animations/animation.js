const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            if (entry.target.classList.contains('To_Scalein')) {
                entry.target.classList.add('An_Scalein');
            }
            if (entry.target.classList.contains('To_slidefromLeft')) {
                entry.target.classList.add('An_slidefromLeft');
            }

            if (entry.target.classList.contains('To_slidefromRight')) {
                entry.target.classList.add('An_slidefromRight');
            }

            if (entry.target.classList.contains('To_Fadein')) {
                entry.target.classList.add('An_Fadein');
            }

        }
        // else {
        //     entry.target.classList.remove('');
        // }
    });
});

const to_animate = document.querySelectorAll('.To_Animate');
to_animate.forEach((el) => observer.observe(el));