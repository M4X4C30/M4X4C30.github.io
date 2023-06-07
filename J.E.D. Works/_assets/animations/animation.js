const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            if (entry.target.classList.contains('To_Scalein')) {
                entry.target.classList.add('An_Scalein');
            }
            
            if (entry.target.classList.contains('To_slidetoRight')) {
                entry.target.classList.add('An_slidetoRight');

                entry.target.addEventListener('animationend', function() {
                    entry.target.style.opacity = 1;
                });
            }

            if (entry.target.classList.contains('To_slidetoLeft')) {
                entry.target.classList.add('An_slidetoLeft');

                entry.target.addEventListener('animationend', function() {
                    entry.target.style.opacity = 1;
                })
            }

            if (entry.target.classList.contains('To_Fadein')) {
                entry.target.classList.add('An_Fadein');
            }

            if (entry.target.classList.contains('To_RotatetoLeft')) {
                entry.target.classList.add('An_RotatetoLeft');

                entry.target.addEventListener('animationend', function() {
                    entry.target.style.opacity = 1;
                });
            }

        }
        // else {
        //     entry.target.classList.remove('');
        // }
    });
});

const to_animate = document.querySelectorAll('.To_Animate');
to_animate.forEach((el) => observer.observe(el));