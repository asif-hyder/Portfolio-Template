// ======================
// Creating a portgfolio tabbed component
// ======================

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click' , (e)=> {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

    p_btn.forEach((currElem) => currElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    // to find the nmbr in data attribute

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const active_img = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currElem) => currElem.classList.add("p-img-not-active"));

    active_img.forEach((currElem) => currElem.classList.remove("p-img-not-active"));
    
});

// ======================
// Testimonial Js code here
// ======================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delayed:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   creating scroll to top

const heroElem = document.querySelector('.section-hero');
const footerElem = document.querySelector('.section-footer');

const scrollElem = document.createElement('div');
scrollElem.classList.add('scroll-style');

scrollElem.innerHTML = '<ion-icon name="arrow-up-sharp" class="scroll-top"></ion-icon>';

footerElem.after(scrollElem);

const scrollToTop = () =>{
    heroElem.scrollIntoView({behavior: "smooth"});
}

scrollElem.addEventListener('click', scrollToTop);