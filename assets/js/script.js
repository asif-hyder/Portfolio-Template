// ======================
// Creating a responsive navbar component
// ======================

const mob_btn = document.querySelector('.mobile-nav-btn');
const headerElem = document.querySelector('.header');

mob_btn.addEventListener('click', () => {
    headerElem.classList.toggle('active');
});


// sticky navbar

const sec_bio = document.querySelector('.section-hero');

const observer = new IntersectionObserver((entries) =>{
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false 
        ? document.body.classList.add('sticky')
        : document.body.classList.remove('sticky');
},{
    root: null,
    rootMargin:"-50px",
    threshold:0,
});

observer.observe(sec_bio);

// ======================
// Creating a portgfolio tabbed component
// ======================

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click' , (e)=> {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;

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
// Animated Number Js code here
// ======================

const countNum = document.querySelectorAll('.counter')

const speed = 200;

countNum.forEach((curElem) => {
    const updateNum = () =>{
        const targetNum = parseInt(curElem.dataset.number);
        // console.log(targetNum);

        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNum = Math.trunc(targetNum/speed);
        // console.log(incrementNum);

        if (initialNum < targetNum) {
            curElem.innerText = `${initialNum + incrementNum}+`;
            setTimeout(updateNum,10);
        }
    }

    updateNum();
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

  

//   js media qurreies
const jsMedia = (widthSize) => {
    if (widthSize.matches) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
          });
    }else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
          });
    };
};

const widthSize = window.matchMedia("(max-width:780px)");

jsMedia(widthSize);

widthSize.addEventListener("change", jsMedia);

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