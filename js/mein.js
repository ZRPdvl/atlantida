const burger = document.querySelector(".header__burger");
const menuBurger = document.querySelector(".header__menu");


burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menuBurger.classList.toggle("active")
})

const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const histori = document.querySelectorAll(".histori__circle-info");


for (const iterator of histori) {
    iterator.addEventListener("click", () => {
        histori.forEach(element => {
            element.classList.remove("active");
        });
        iterator.classList.add("active")
    })
};


const blogCard = document.querySelectorAll(".blog__card-tittel");
const blogCardBody = document.querySelectorAll(".card__blog-text");

for (let index = 0; index < blogCard.length; index++) {
    const element = blogCard[index];
    element.addEventListener("click", ()=>{
        blogCard.forEach(element => {
            element.classList.remove("active")
            element.parentElement.parentElement.classList.remove("active")
        });
        element.classList.add("active")
        element.parentElement.parentElement.classList.add("active")
    })
}



var iso = new Isotope( '.portfolio__colum', {
    itemSelector: '.portfolio__body-item',
    percentPosition: true,
    // layoutMode: 'masonri'
  });
document.querySelectorAll(".portfolio__categori-item").forEach(el => {
    el.addEventListener("click", (e) =>{
        e.preventDefault();
        let filter = e.currentTarget.dataset.filter;
        iso.arrange({ filter: `${filter}` });

        document.querySelectorAll(".portfolio__categori-item").forEach(el => {
            el.classList.remove("active")
        });
        e.target.classList.add("active");
    })
})

