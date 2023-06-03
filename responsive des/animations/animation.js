const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            if (entry.target.classList.contains('To_Scalein')) {
                entry.target.classList.add('An_Scalein');
            }
            if (entry.target.classList.contains('To_slidetoRight')) {
                entry.target.classList.add('An_slidetoRight');
            }

            if (entry.target.classList.contains('To_slidetoLeft')) {
                entry.target.classList.add('An_slidetoLeft');
            }

            if (entry.target.classList.contains('To_Fadein')) {
                entry.target.classList.add('An_Fadein');
            }

            if (entry.target.classList.contains('To_RotatetoLeft')) {
                entry.target.classList.add('An_RotatetoLeft');
            }

        }
        // else {
        //     entry.target.classList.remove('');
        // }
    });
});

const to_animate = document.querySelectorAll('.To_Animate');
to_animate.forEach((el) => observer.observe(el));