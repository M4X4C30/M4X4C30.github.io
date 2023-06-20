var count_show = 0;
var do_glow = false;

function checkScrollBottom() {
    var div = document.getElementById('main_content');
    
    // Calculate the scroll position
    var scrollTop = div.scrollTop;
    var scrollHeight = div.scrollHeight;
    var clientHeight = div.clientHeight;
    
    // Check if the scroll position is at the bottom or close to it
    var isAtBottom = scrollTop + clientHeight >= scrollHeight - 90;
    
    const Footer_Container = document.querySelector('#footer_container');
    const Footer = document.querySelector('.flip_container');
    if (isAtBottom) {
        Footer.classList.remove('An_flipOff');
        Footer.classList.add('An_flipUp');

        Footer_Container.classList.remove('An_slideDown');
        Footer_Container.classList.add('_poofUp');

        if (count_show != 1) {
            count_show = 1;
            Footer_Container.style.transform = 'translateY(0rem)'
        }
        if (!do_glow) {
            do_glow = true;
        }

        // console.log(Array.from(Footer.classList));
    }
    else {
        if (Footer.classList.contains('An_flipUp')){
            Footer.classList.remove('An_flipUp');
            Footer.classList.add('An_flipOff');

            // Footer_Container.style.transform = 'translateY(100rem)'
            Footer_Container.classList.remove('_poofUp');
            Footer_Container.classList.add('An_slideDown');
        }

        do_glow = false

        // console.log(Array.from(Footer.classList));
    }
}