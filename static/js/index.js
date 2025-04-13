function clickOutside(item, fun) {
    const eventClickOutside = document.addEventListener("click", (e) => {
        if (!item.contains(e.target)) {
            fun();
            document.removeEventListener("click", eventClickOutside);
        }
    });
}

const listToggleSubmenu = document.querySelectorAll(
    ".nav-links >li:has(.submenu)"
);
listToggleSubmenu.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (item.classList.contains("active")) {
            item.querySelector("a").classList.remove("active");
        } else {
            item.querySelector("a").classList.add("active");
            clickOutside(item, () => {
                item.querySelector("a").classList.remove("active");
            });
        }
    });
});

document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector("nav").classList.add("scrolling");
    } else {
        document.querySelector("nav").classList.remove("scrolling");
    }
});

const toggleMenu = document.querySelector(".menuBTN");
const closeMenu = document.querySelector(".closeMenu");
const navLinks = document.querySelector(".container-nav-links");
toggleMenu.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
        const eventClickOutside = document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !toggleMenu.contains(e.target)) {
                navLinks.classList.remove("show");
                document.removeEventListener("click", eventClickOutside);
            }
        });
        closeMenu.addEventListener("click", () => {
            navLinks.classList.remove("show");
            document.removeEventListener("click", eventClickOutside);
        });
    }
});

// Banner Slider

const bannerSlider = document.querySelector(".banner .swiper.swiper-banner");
const bannerSwipper = new Swiper(bannerSlider, {
    slidesPerView: 1,
    effect: "fade",
    rewind: true,
    autoplay: {
        duration: 2000,
    },
    hideInactiveSlides: true,
});


const { onScroll, animate } = anime

const animatedElements = document.querySelectorAll("[data-animate]");
animatedElements.forEach((element) => {
    const animateType = element.getAttribute('data-animate')
    switch (animateType) {
        case "fade":
            animate(element, {
                opacity: [0, 1],
                duration: 800,
                easing: "easeInOutQuad",
                duration: 800,
                delay: 200,
                autoplay: onScroll(element),
            })
            break;
        case "slide-up":
            animate(element, {
                translateY: [100, 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutExpo",
                duration: 800,
                delay: 200,
                autoplay: onScroll(element),
            })
            break;

        case "slide-left":
            animate(element, {
                translateX: [-100, 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutExpo",
                duration: 800,
                delay: 200,
                autoplay: onScroll(element),
            })
            break;

        case "slide-right":
            animate(element, {
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutExpo",
                duration: 800,
                delay: 200,
                autoplay: onScroll(element),
            })
            break;

        default:
            break;
    }
})

const newsSwiper = new Swiper(".sliderNews", {
    spaceBetween: 16,
    centerInsufficientSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1399: {
            slidesPerView: 4,
        },
        1099: {
            slidesPerView: 3,
        },
        699: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
});

const containerNewsText = document.querySelectorAll('.container-text')

containerNewsText.forEach(containerText => {
    const showMoreBTN = containerText.querySelector('.showmoretext')
    showMoreBTN.addEventListener('click', () => {
        showMoreBTN.classList.contains('showall')
            ? showMoreBTN.classList.remove('showall')
            : showMoreBTN.classList.add('showall')
        showMoreBTN.textContent = !showMoreBTN.classList.contains('showall')
            ? 'Show More' : "Show Less"
    })
})