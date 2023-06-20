const OPEN_MENU_BTN = document.querySelector('#btn_nav_Menu');

const BTN_ABOUT = document.querySelector('#direct_About_req');
const BTN_PROJECTS = document.querySelector('#direct_Projects_req');
const BTN_CONTACTS = document.querySelector('#direct_Contacts_req');

const OPTION_BTN = document.querySelectorAll('.options_div');

//expanded menu design
var expandScreenSize = window.matchMedia("(min-width: 475px)");

function checkingScreenSize(expandScreenSize)
{
    //expanded mode ----------------
    if (expandScreenSize.matches)
    {
        var wipeAllClass__btn_nav_Menu = document.querySelector('#btn_nav_Menu');
        wipeAllClass__btn_nav_Menu.className = "";

        OPEN_MENU_BTN.classList.add('option_container_expanded');
            
        BTN_ABOUT.setAttribute('tabindex', '0');
        BTN_PROJECTS.setAttribute('tabindex', '0');
        BTN_CONTACTS.setAttribute('tabindex', '0');
        
        const ADD_ENTER_KEY_LISTENER = (element) => {

            BTN_ABOUT.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    window.location.href = 'about/';
                }
            });

            BTN_PROJECTS.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    window.location.href = 'projects/';
                }
            });

            BTN_CONTACTS.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    if (
                        OPEN_MENU_BTN.classList.contains('option_container_clicked') ||
                        OPEN_MENU_BTN.classList.contains('option_container_expanded')
                    ) {
                        if (do_glow) {
                            const FOOTER = document.querySelector('#footer_container');
                            FOOTER.classList.add('An_glowEdge');
                            removeafterGlow();
                        } else {
                            const MAIN_CONTENT = document.querySelector('#main_content');
                            MAIN_CONTENT.scrollTo({
                                top: MAIN_CONTENT.scrollHeight,
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            });
        
        }
        ADD_ENTER_KEY_LISTENER(BTN_ABOUT);

    }
    //not expanded mode --------------
    else
    {
        var wipeAllClass = document.querySelector('#btn_nav_Menu');
        wipeAllClass.className = "";

        OPEN_MENU_BTN.classList.add('option_container_unclicked');

        BTN_ABOUT.removeAttribute('tabindex');
        BTN_PROJECTS.removeAttribute('tabindex');
        BTN_CONTACTS.removeAttribute('tabindex');
        
        //clicked and unclicked ---------------
        var main_content_div = document.getElementById('main_content');
        if (!OPEN_MENU_BTN.classList.contains('option_container_expanded') && !expandScreenSize.matches) 
        {
            OPEN_MENU_BTN.addEventListener('click', () => 
            {
                if (!expandScreenSize.matches && !OPEN_MENU_BTN.classList.contains('option_container_expanded')) 
                {
                    var wipeAllClass = document.querySelector('#btn_nav_Menu');
                    wipeAllClass.className = "";

                    OPEN_MENU_BTN.classList.add('option_container_clicked');
                }
            });

            window.addEventListener('click', (event) => {
                if (!OPEN_MENU_BTN.contains(event.target) && event.target !== OPEN_MENU_BTN 
                && !expandScreenSize.matches && !OPEN_MENU_BTN.classList.contains('option_container_expanded')) 
                {
                    var wipeAllClass = document.querySelector('#btn_nav_Menu');
                    wipeAllClass.className = "";

                    OPEN_MENU_BTN.classList.add('option_container_unclicked'); 
                }
            });
            main_content_div.addEventListener('scroll', (event) => {
                if (!OPEN_MENU_BTN.contains(event.target) && event.target !== OPEN_MENU_BTN 
                && !expandScreenSize.matches && !OPEN_MENU_BTN.classList.contains('option_container_expanded')) 
                {
                    var wipeAllClass = document.querySelector('#btn_nav_Menu');
                    wipeAllClass.className = "";

                    OPEN_MENU_BTN.classList.add('option_container_unclicked');
                }
            });
        }
    }       
}

checkingScreenSize(expandScreenSize);

window.addEventListener('resize', function() {
    checkingScreenSize(expandScreenSize);
});


//navigation


BTN_ABOUT.addEventListener('click', () => {
    if (OPEN_MENU_BTN.classList.contains('option_container_clicked') 
    || OPEN_MENU_BTN.classList.contains('option_container_expanded')) {
        window.location.href = 'about/';
    }
});
BTN_PROJECTS.addEventListener('click', () => {
    if (OPEN_MENU_BTN.classList.contains('option_container_clicked') 
    || OPEN_MENU_BTN.classList.contains('option_container_expanded')) {
        window.location.href = 'projects/';
    }
});
BTN_CONTACTS.addEventListener('click', () => {
    if (
        OPEN_MENU_BTN.classList.contains('option_container_clicked') ||
        OPEN_MENU_BTN.classList.contains('option_container_expanded')
    ) {
        if (do_glow) {
            const FOOTER = document.querySelector('#footer_container');
            FOOTER.classList.add('An_glowEdge');
            removeafterGlow();
        } else {
            const MAIN_CONTENT = document.querySelector('#main_content');
            MAIN_CONTENT.scrollTo({
                top: MAIN_CONTENT.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
});

function removeafterGlow() {
    const FOOTER = document.querySelector('#footer_container');
    FOOTER.addEventListener('animationend', () => {
        FOOTER.classList.remove('An_glowEdge');
    });
}