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
        Footer.classList.remove('An_flipSlideDown');
        Footer.classList.add('An_flipUp');
        // console.log(Array.from(Footer.classList));
    }
    else {
        if (Footer.classList.contains('An_flipUp')){
            Footer.classList.remove('An_flipUp');
            Footer.classList.add('An_flipSlideDown');
        }

        // console.log(Array.from(Footer.classList));
    }
}