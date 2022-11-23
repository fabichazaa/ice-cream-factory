//SWIPER 
let homeSwiper = new Swiper(".home-swiper",{
    spaceBetween: 40,
    loop: "true",
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 16,
})

//Adds smoothness appearence when you scroll and step on a section
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

sr.reveal('.home-swiper');
//if the container is flavor, and the items inside are flavor flavor flavor
//the class we need to add is .flavor
sr.reveal('.flavor, .shop-item, .new-swiper, .subscribe', {interval: 100});
sr.reveal('.about-text, .deco-img', {origin: 'left'});
sr.reveal('.deco-description', {origin: 'right'});

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    })
};

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    })
}

const subscribeButton = document.getElementById('subscribe-button');
subscribeButton.addEventListener("click", () => {
    const subscribeEmail = document.getElementById('subscribe-email').value;
    console.log(subscribeEmail);
});


//when you are up up, scroll won't show
//when you go a lil bit down, it will start showing
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);