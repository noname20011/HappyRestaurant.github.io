const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//================ HEADER =========== //
const navMenu = $('#nav-menu')
const navToggleBtn = $('#nav-toggle')
const navCloseBtn = $('#nav-close')

if (navMenu) {
    if (navToggleBtn) {
        navToggleBtn.onclick = () => {
            navMenu.classList.add('nav__menu--active')
        }
    }

    if (navCloseBtn) {
        navCloseBtn.onclick = () => {
            navMenu.classList.remove('nav__menu--active')
        }
    }

    const navItems = navMenu.querySelectorAll('ul li')
    const navTab = navMenu.querySelector('.tab')
    navItems.forEach(navItem => {
        navItem.onclick = function() {
            let availWidthScreen = window.screen.availWidth
            if (availWidthScreen < 1024) {
                console.log(availWidthScreen);
                navMenu.classList.remove('nav__menu--active')
                navItems.forEach(navItem => {
                    navItem.classList.remove('bg--active')
                })
                navItem.classList.add('bg--active')
            } else {


                let itemLeft = this.offsetLeft
                let itemWidth = this.offsetWidth
                navTab.style.left = `${itemLeft}px`
                navTab.style.width = `${itemWidth}px`
                navItems.forEach(navItem => {
                    navItem.classList.remove('active')
                })
                navItem.classList.add('active')
            }

        }
    })
}



// =============== SCROLL HEADER ACTIVE ============= //
const header = $('#header')

function scrollHeader() {
    let currentHeight = this.pageYOffset
    if (currentHeight >= 200) {
        header.classList.add('header__bg--active')
    } else {
        header.classList.remove('header__bg--active')

    }
}


// ============== SCROLL TOP ACTIVE ========= //
const scrollBtn = $('#scroll-top')
if (scrollBtn) {
    function scrollTop() {
        let currentHeight = this.pageYOffset
        if (currentHeight >= 200) {
            scrollBtn.classList.add('scrolltop--active')
        } else {
            scrollBtn.classList.remove('scrolltop--active')

        }
    }
}


// ======= SCROLL ACTIVE LINK ========= //

const sections = $$('section[id]')
const navTab = $('.tab')

// function scrollActiveLink() {
//     let currentHeight = this.pageYOffset
//     let availWidthScreen = window.screen.availWidth
//     if (availWidthScreen >= 1024) {
//         sections.forEach(section => {
//             let sectionId = section.getAttribute('id')
//             let topSection = section.offsetTop
//             let heightSection = section.offsetHeight
//             if (currentHeight >= topSection && currentHeight <= topSection + heightSection) {

//                 let itemLeft = navMenu.querySelector('.nav__item a[href*=' + sectionId + ']').offsetLeft
//                 let itemWidth = navMenu.querySelector('.nav__item a[href*=' + sectionId + ']').offsetWidth
//                 navTab.style.left = `${itemLeft}px`
//                 navTab.style.width = `${itemWidth}px`

//                 navMenu.querySelector('.nav__item a[href*=' + sectionId + ']').classList.add('link--active')
//             } else {
//                 navMenu.querySelector('.nav__item a[href*=' + sectionId + ']').classList.remove('link--active')
//             }
//         })
//     }
// }

// ========== COMMON SCROLL =========== //
window.onscroll = function() {
    scrollHeader()
    scrollTop()
        // scrollActiveLink()
}

// =========== LOAD APP ======= //
function loadApp() {
    $('#load-app').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loadApp, 3000)
}

window.onload = fadeOut()

// ============ SCROLL ====================== //
const sr = ScrollReveal({
    distance: '40px',
    duration: 1500,
    // reset: true,
})


sr.reveal(`.home__content,
           .order__form,
           .footer__share,
           .footer__content,
           .section__subtitle,
           .section__title,
           .home__desc`, {
    origin: 'left',
    interval: 80,
})

sr.reveal(`.review__data,
           .popular__data,
           .input__row,
           .order__bg-img`, {
    origin: 'top',
    interval: 80,
})

sr.reveal(`.home__img,
           .home__content,
           .popular__container,
           .gallery__data,
           .specialty__data,
           .step__data`, {
    origin: 'right',
    interval: 100,
})