'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav')

// modal open /close 
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// hero button scroll
btnScrollTo.addEventListener('click', function (e) {

  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  //modern browsers only
  section1.scrollIntoView({ behavior: 'smooth' })
})

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

// tabbed content
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab')
  if (!clicked) return
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active')
  })
  tabsContent.forEach(tab => {
    tab.classList.remove('operations__content--active')
  })
  clicked.classList.add('operations__tab--active')

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// menu fade
const fade = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const clicked = e.target
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link')
    const logo = clicked.closest('.nav').querySelector('img')

    siblings.forEach(link => {
      if (link !== clicked) {
        link.style.opacity = opacity
      }
    })
    logo.style.opacity = opacity
  }
}

nav.addEventListener('mouseover', (e) => {
  fade(e, 0.5)
})
nav.addEventListener('mouseout', (e) => {
  fade(e, 1)
})

// nav bar sticky

// const initalCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= initalCoords.top) {
//     nav.classList.add('sticky')
//   } else {
//     nav.classList.remove('sticky')
//   }
// })

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries
  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }

}

const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})

headerObserver.observe(header)

// reveal sections

const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

// lazy load images
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.5
})

imgTargets.forEach(img => {
  imgObserver.observe(img)
})

// slider 
const slider = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  let curslide = 0;
  const slideLength = slides.length
  const dotContainer = document.querySelector('.dots')

  const createDots = function () {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }



  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((d) => d.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }

  const goToSlide = function (curslide) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curslide)}%)`
    })
  }

  const nextSlide = function () {
    if (curslide === slides.length - 1) {
      curslide = 0
    } else {
      curslide++
    }
    goToSlide(curslide)
    activeDot(curslide)
  }
  const prevSlide = function () {
    if (curslide === 0) {
      curslide = slides.length - 1
    } else {
      curslide--
    }
    goToSlide(curslide)
    activeDot(curslide)
  }

  const initSlider = function () {
    createDots()
    activeDot(0)
    goToSlide(0)
  }




  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  })

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide
      goToSlide(slide)
      activeDot(curslide)
    }
  })
  initSlider()
}
slider()