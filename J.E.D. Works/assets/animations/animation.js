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

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting && entry.intersectionRatio === 1 && entry.target.classList.contains('To_Fadein')) {
                    const delay = calculateDelay(entry.target);
                    animateEntry(entry.target, delay);
                  }
                });
              }, { threshold: 1 });
              
              const entries = document.querySelectorAll('.To_Fadein');
              
              entries.forEach((entry) => {
                observer.observe(entry);
              });
              
              function calculateDelay(entry) {
                let delay = 0;
                if (entry.classList.contains('_delay_main_box')) {
                  const main_boxEntries = document.querySelectorAll('.To_Fadein._delay_main_box');
                  const index = Array.from(main_boxEntries).indexOf(entry);
                  delay = (index * 100) + 200;
                }
                else if (entry.classList.contains('_delay_front1')) {
                  const front1Entries = document.querySelectorAll('.To_Fadein._delay_front1');
                  const index = Array.from(front1Entries).indexOf(entry);
                  delay = (index * 200) + 300;
                } 
                else if (entry.classList.contains('_delay_front2')) {
                  const front2Entries = document.querySelectorAll('.To_Fadein._delay_front2');
                  const index = Array.from(front2Entries).indexOf(entry);
                  delay = (index * 200) + 500;
                } 
                else if (entry.classList.contains('_delay_back1')) {
                  const back1Entries = document.querySelectorAll('.To_Fadein._delay_back1');
                  const index = Array.from(back1Entries).indexOf(entry);
                  delay = (index * 200) + 600;
                } 
                else if (entry.classList.contains('_delay_back2')) {
                  const back2Entries = document.querySelectorAll('.To_Fadein._delay_back2');
                  const index = Array.from(back2Entries).indexOf(entry);
                  delay = (index * 200) + 700;
                }
                return delay;
              }
              
              function animateEntry(entry, delay) {
                setTimeout(function() {
                  entry.classList.remove('To_Fadein');
                  entry.classList.add('An_Fadein');
                }, delay);
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