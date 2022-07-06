// Burger 
let manutoggle = document.querySelector('.toggle');
manutoggle.onclick = function(){
  manutoggle.classList.toggle('active')
}

// Scroll Up 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// Animate Scroll Bar 
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.header__container')
sr.reveal('.header__intro-left', {delay: 500, origin:'left'})
sr.reveal('.header__intro-right',{delay: 500, origin:'right'})
sr.reveal('.vetri__wrapper',{interval:400, delay: 600})
sr.reveal('.inde__titles',{delay: 700})
sr.reveal('.inde__container-wrap',{interval:300, delay: 800})
sr.reveal('.mission-img',{delay: 900, origin:'top'})
sr.reveal('.mission__wrapper',{delay: 900, origin:'bottom'})
sr.reveal('.pretty__img',{delay: 1000, origin:'bottom'})
sr.reveal('.pretty__wrap',{delay: 1000, origin:'top'})
sr.reveal('.footer__wrap-box',{interval:300, delay: 1100})
sr.reveal('.footer__wrap-img',{interval:300, delay: 1100})
sr.reveal('.footer__box-link',{interval:200, delay: 1100})
sr.reveal('.footer__title',{delay: 1100})
