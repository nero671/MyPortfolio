const arrow = document.getElementById('scroll');
const anchors = document.querySelectorAll('a.anchor');
const headerMe = document.querySelector('.header__me');
const modalMenuContent = document.querySelector('.modal__menu-content');
const menuModal = document.querySelector('.menu__modal');
const conectionLogoIcon = document.querySelector('.conection__logo_icon');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const bestWorks = document.querySelector('#best-works .best-works');
const webWorks = document.querySelector('#sites .web-works');
const reactWorks = document.querySelector('#react-works .react-works');
const jsWorks = document.querySelector('#js-services .js-works');
const gamesWorks = document.querySelector('#games-services .games-works');



for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function toContent() {
  arrow.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function changeArrow() {
  modalMenuContent.classList.toggle('is-open');
}


function openModal() {
  modal.classList.add('is-open');
}

const closeModal = event => {
  const target = event.target;

  if (target.closest('.modal__close') || target.classList.contains('modal') ||
    event.code == 'Escape') {
    modal.classList.remove('is-open');
    document.removeEventListener('keydown', closeModal);
  }
};

document.addEventListener('keydown', closeModal);
document.addEventListener('click', closeModal);


arrow.addEventListener('click', toContent);

conectionLogoIcon.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

menuModal.addEventListener('click', changeArrow);


////animations
// Init Setups
gsap.set(["#bubbles rect", "#bubbles circle", "#bubbles path", "#bubbles2 g"], {
  transformOrigin: "50% 50%"
});

// Init Timeline
const tl = gsap.timeline({
  paused: false,
  onComplete: () => {
    gsap.to(".bubble", {
      yPercent: -200,
      scrollTrigger: {
        trigger: 'svg',
        scrub: 2,
        start: 'top top',
        end: 'bottom top',
      }
    });

    ScrollTrigger.refresh()
  }
});

tl.from(
    ".circle_g",
    {
      duration: 2.75,
      y: 150,
      ease: "elastic.out(.25, 0.1)",
      stagger: {
        from: "random",
        grid: [1, 4],
        amount: 1,
        ease: "power2"
      }
    },
    0
).from(
    ".bubble",
    {
      duration: 1.5,
      y: 150,
      ease: "elastic.out(.1, 0.1)",
      stagger: {
        from: "random",
        grid: [5, 15],
        amount: 1.5
      }
    },
    0
).from(
    ".main-awatar",
    {
        duration: 2.6,
        y: 1050,
        ease: "elastic.out(.1, 0.1)",
    },
    1
);

// const wrapper = document.querySelector('.wrapper')
// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ease: "none", duration: 10});
// let tl3 = gsap.timeline();
//
// tl3.to('.panel', {
//     scale: 0.75,
// }, 0).
// from('.panel_animation2', {
//     opacity: 1,
//     y: -100,
// }, 0).
// to('.panel_animation2', {
//         opacity: 1
// }, 0)
//
// ScrollTrigger.create({
//     animation: tl3,
//     trigger: '.wrapper',
//     start: "top top",
//     end: () => wrapper.offsetWidth / 2,
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     pinType: "fixed",
// })
let panels = gsap.utils.toArray(".panel");
let panelAnimation2 = gsap.utils.toArray(".panel_animation2");

// let triggers = panels.map((panel, i) => {
//   let tween = gsap.to(panel, {
//     scale: 0.75, opacity: 1,
//     scrollTrigger: {
//       trigger: panel,
//       start: "bottom bottom",
//       scrub: 1,
//       pin: true,
//       pinSpacing: false
//     },
//   });
// });

gsap.to('.panel', {
    scrollTrigger: {
        trigger: '.panel',
        start: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
    scale: 0.75,
})


// gsap.to('#section1', {
//     scrollTrigger: {
//         trigger: '.section-container',
//         start: 'center 150px',
//         end: 'center 100px',
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         markers: true,
//     },
//     opacity: 0,
//     ease: 'ease',
//
//
// });
//
// gsap.set('#section2', { height: '100vh' });


// gsap.to('#section2', {
//     scrollTrigger: {
//         trigger: '#section2',
//         start: "top top",
//         endTrigger: '#section3',
//         end: "top top",
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         markers: true,
//     },
//     opacity: 0,
//     ease: "ease",
// })
// gsap.to('#section2', {
//     scrollTrigger: {
//         trigger: '#section2',
//         start: "50px 50px",
//         end: "+=500",
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//     },
//     opacity: 0,
//     ease: "ease",
//     y: 100,
//     duration: 1,
// })

/////////////////FOR TEST//////////////////

// const tl4 = gsap.timeline();
//
// tl4.fromTo('#section1', {opacity: 1}, {y: 0});
// tl4.fromTo('#section2', {opacity: 0}, {y:0});
//
//
// const sectionWrapper2 = document.querySelector('.panel_animation2__wrapper');
//
// ScrollTrigger.create({
//     animation: tl4,
//     trigger: '.panel_animation2__wrapper',
//     start: 'top top',
//     end: () => sectionWrapper2.offsetWidth / 2,
//     scrub: true,
//     pin: true,
// });


panelAnimation2.forEach((section, index) => {
    const color = section.querySelector(".panel_animation__color");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            start: "50px 50px",
            end: "+=500",
            markers: true,
        }
    });

    if (index > 0) {
        tl.from(color, { opacity: 0, ease: "ease", duration: 0.1 });
    }

    if (index < panelAnimation2.length - 1) {
        tl.to(color, { opacity: 0, ease: "ease", duration: 0.1 });
    }


});


const tl2 = gsap.timeline();

tl2.fromTo('#best-works', {x: '-100%', y: '+100%  '}, {y: 0});
tl2.fromTo('#sites', {x: '-100%'}, {x: '-200%'});
tl2.fromTo('#react', {x: '-400%'}, {x: '-300%'});
tl2.fromTo('#js-services', {x: '-200%'}, {x: '-400%'});
tl2.fromTo('#games', {x: '-300%'}, {x: '-500%'});

const sectionWrapper = document.querySelector('.section-wrapper');

ScrollTrigger.create({
    animation: tl2,
    trigger: '.section-wrapper',
    start: 'top top',
    end: () => sectionWrapper.offsetWidth / 2,
    scrub: true,
    pin: true,
});

// ScrollTrigger.defaults({
//     scroller: window,
//     throttle: 1 // Используйте подходящее значение throttle для вашего случая.
// });



const previewTitle = document.querySelector('.preview-title');
const previewSubtitle = document.querySelector('.preview-subtitle');

const splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
        return `<div class="word">` +
            m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
            `</div>`;
    });
    return el;
};

const split = splitText(previewTitle);
const splitSub = splitText(previewSubtitle);

function random(min, max){
    return (Math.random() * (max - min)) + min;
}

const animateLetter = (el, idx, delay) => {
    TweenMax.from(el, 1.5, {
        opacity: 0,
        scale: 0.1,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0
    }, delay)
}

Array.from(splitSub.querySelectorAll('.letter')).forEach((el, idx) => {
    animateLetter(el, idx, 3.4)
})

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    animateLetter(el, idx, 2.8);
})

TweenLite.from('.blob-btn', {
    opacity: 0,
    scale: 0.25
}, 5.2);

const swiperInit = (selector) => {
    new Swiper(selector, {
        grabCursor: true,
        loop: true,
        pagination: {
            el: selector.nextElementSibling,
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: selector.parentNode.querySelector('.btn-next'),
            prevEl: selector.parentNode.querySelector('.btn-prev')
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            501: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    console.log(selector.nextElementSibling)
}

swiperInit(bestWorks);
swiperInit(webWorks);
// swiperInit(reactWorks);
swiperInit(jsWorks);
// swiperInit(gamesWorks);


























































// const preLoader = () => {
//     const preloader = document.querySelector('.preloader');
//
//     window.addEventListener('load', () => {
//         if (preloader) {
//             preloader.style.display = 'flex'
//             setTimeout(() => {
//                 preloader.style.display = 'none';
//                 ScrollTrigger.refresh();
//             }, 1000);
//         }
//     });
// };

// preLoader();

