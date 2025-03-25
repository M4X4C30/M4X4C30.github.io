document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.querySelector('.story-text');
    const storyImage = document.querySelector('.story-image img');
    const teamText = document.querySelector('.team-text');
    const teamImage = document.querySelector('.team-image img');
    const teamMembers = document.querySelectorAll('.team-member');
    const disclaimerText = document.querySelector('.disclaimer-text');
    
    function checkSlide(e) {
        const triggerBottom = (window.innerHeight / 5) * 4;

        // Story Section Animation
        const storyTextTop = storyText.getBoundingClientRect().top;
        const storyImageTop = storyImage.getBoundingClientRect().top;

        if (storyTextTop < triggerBottom) {
            storyText.classList.add('show');
        } else {
            storyText.classList.remove('show');
        }

        if (storyImageTop < triggerBottom) {
            storyImage.classList.add('slide-in');
        } else {
            storyImage.classList.remove('slide-in');
        }

        // Team Intro Section Animation
        const teamTextTop = teamText.getBoundingClientRect().top;
        const teamImageTop = teamImage.getBoundingClientRect().top;

        if (teamTextTop < triggerBottom) {
            teamText.classList.add('show');
        } else {
            teamText.classList.remove('show');
        }

        if (teamImageTop < triggerBottom) {
            teamImage.classList.add('slide-in');
        } else {
            teamImage.classList.remove('slide-in');
        }

        // Team Members Animation
        teamMembers.forEach(member => {
            const memberTop = member.getBoundingClientRect().top;
            if (memberTop < triggerBottom) {
                member.classList.add('fade-in');
            } else {
                member.classList.remove('fade-in');
            }
        });

        // Disclaimer Animation
        const disclaimerTextTop = disclaimerText.getBoundingClientRect().top;
        if (disclaimerTextTop < triggerBottom) {
            disclaimerText.classList.add('show');
        } else {
            disclaimerText.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide();
});