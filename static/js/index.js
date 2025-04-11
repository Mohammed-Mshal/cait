
function clickOutside(item,fun){
    const eventClickOutside=document.addEventListener('click',(e)=>{
        if (!item.contains(e.target)) {
            fun()
            document.removeEventListener('click',eventClickOutside)
        }
    })
}

const listToggleSubmenu=document.querySelectorAll('.nav-links >li:has(.submenu)')
listToggleSubmenu.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(item.classList.contains('active'))
        {
            item.querySelector('a').classList.remove('active')

        }else{
            item.querySelector('a').classList.add('active')
            clickOutside(item,()=>{
                item.querySelector('a').classList.remove('active')
            })
        }
    })
})


const toggleMenu=document.querySelector('.menuBTN')
const closeMenu=document.querySelector('.closeMenu')
const navLinks=document.querySelector('.container-nav-links')
toggleMenu.addEventListener('click',()=>{
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show')
        
    }else{
        navLinks.classList.add('show')
        const eventClickOutside=document.addEventListener('click',(e)=>{
            if (!navLinks.contains(e.target) && !toggleMenu.contains(e.target)) {
                navLinks.classList.remove('show')
                document.removeEventListener('click',eventClickOutside)
            }
        })
        closeMenu.addEventListener('click',()=>{
            navLinks.classList.remove('show')
            document.removeEventListener('click', eventClickOutside)
        })
    }
})


// Banner Slider

const bannerSlider=document.querySelector('.banner .swiper.swiper-banner')
const bannerSwipper = new Swiper(bannerSlider, {
    slidesPerView: 1,
    effect: 'fade',
    rewind: true,
    autoplay: {
        duration: 2000
    },
    hideInactiveSlides: true
})