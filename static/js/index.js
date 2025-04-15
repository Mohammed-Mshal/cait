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
  pagination: {
    el: ".banner .swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  // autoplay: {
  //   duration: 4000,
  // },
  hideInactiveSlides: true,
  on: {
    init: function () {
      const totalSlideText = document.querySelector(
        ".banner .pagination-slide .total-slide"
      );
      if (totalSlideText) {
        totalSlideText.textContent =
          this.slides.length >= 10
            ? this.slides.length
            : `0${this.slides.length}`;
      }
    },
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      const video = currentSlide.querySelector("video");
      const currentSlideText = document.querySelector(
        ".banner .pagination-slide .current-slide"
      );
      if (currentSlideText) {
        currentSlideText.textContent =
          this.activeIndex + 1 >= 10
            ? this.activeIndex + 1
            : `0${this.activeIndex + 1}`;
      }
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    },
  },
});

const { onScroll, animate } = anime;

const animatedElements = document.querySelectorAll("[data-animate]");
animatedElements.forEach((element) => {
  const animateType = element.getAttribute("data-animate");
  switch (animateType) {
    case "fade":
      animate(element, {
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutQuad",
        duration: 800,
        delay: 200,
        autoplay: onScroll(element),
      });
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
      });
      break;

    case "slide-left":
      animate(element, {
        translateX: [-400, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
        duration: 800,
        delay: 200,
        autoplay: onScroll(element),
      });
      break;

    case "slide-right":
      animate(element, {
        translateX: [400, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
        duration: 800,
        delay: 200,
        autoplay: onScroll(element),
      });
      break;

    default:
      break;
  }
});

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
const sliderEvents = new Swiper(".sliderEvents", {
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

const containerNewsText = document.querySelectorAll(".container-text");

containerNewsText.forEach((containerText) => {
  const showMoreBTN = containerText.querySelector(".showmoretext");
  showMoreBTN &&
    showMoreBTN.addEventListener("click", () => {
      showMoreBTN.classList.contains("showall")
        ? showMoreBTN.classList.remove("showall")
        : showMoreBTN.classList.add("showall");
      if (document.dir === 'rtl') {
        showMoreBTN.querySelector(".text-button").textContent =
          !showMoreBTN.classList.contains("showall") ? "اقرأ المزيد" : "اقرأ أقل";

      } else {

        showMoreBTN.querySelector(".text-button").textContent =
          !showMoreBTN.classList.contains("showall") ? "Read More" : "Read Less";
      }
    });
});

const languageBTN = document.querySelector('.language')
languageBTN &&
  languageBTN.addEventListener('click', () => {
    const value = location.pathname.includes("/ar/")
    ? location.origin+location.pathname.replace("/ar/", "/")
    : location.origin+"/ar" + location.pathname.replace("/ar/", "/");
  location.href=value
  
  })


const filterProjects = document.querySelectorAll(
  ".filter button"
);

const projects = document.querySelectorAll(" .services-page");
const projectsTitle = document.querySelector(".header .base-title-section");

filterProjects.forEach((filterBTN) => {
  filterBTN.addEventListener("click", () => {
    filterProjects.forEach((e) => {
      e.classList.remove("active");
    });
    filterBTN.classList.add("active");
    projectsTitle.textContent = filterBTN.textContent;
    const typeFilter = filterBTN.getAttribute("data-type");
    projects.forEach((project) => {
      const typeProject = project.getAttribute("data-type");
      typeProject === typeFilter
        ? project.classList.add("active")
        : project.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const activeFilter = Object.values(filterProjects)
    .filter((e) => e.classList.contains("active"))[0]
    ?.getAttribute("data-type");
  projects.forEach((project) => {
    const typeProject = project.getAttribute("data-type");
    typeProject === activeFilter
      ? project.classList.add("active")
      : project.classList.remove("active");
  });
});

const selectElements = document.querySelectorAll('select')

selectElements.forEach(selectEle => {
  NiceSelect.bind(selectEle, {
    searchable: false,
    placeholder: document.dir === "rtl" ? 'ترتيب حسب' : 'Sort By'
  });
})

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loading").classList.add("active");
});
