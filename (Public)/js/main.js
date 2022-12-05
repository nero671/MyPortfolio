const arrow = document.getElementById('scroll');
const anchors = document.querySelectorAll('a.anchor');
const headerMe = document.querySelector('.header__me');
const modalMenuContent = document.querySelector('.modal__menu-content');
const menuModal = document.querySelector('.menu__modal');
const conectionLogoIcon = document.querySelector('.conection__logo_icon');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');



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
// Debuggers
//tl.seek(1, false);
//ScrubGSAPTimeline(tl);

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


let panels = gsap.utils.toArray(".panel");
let panel2 = gsap.utils.toArray(".panel2");

let triggers = panels.map((panel, i) => {
  let tween = gsap.to(panel, {
    scale: 0.75,
    scrollTrigger: {
      trigger: panel,
      start: "bottom bottom",
      scrub: 1,
      pin: true,
      pinSpacing: false
    },
  });

    let tween2 = gsap.to(panel2, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: panel2,
            start: "bottom bottom",
            markers: true,
            scrub: 1,

        }
    });
  // return tween.scrollTrigger;
});

const tm = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: ".section-panel__wrapper",
        pin: true,
        start: "top, top",
        end: "+=100%",
        scrub: true,
        markers: true
    },
});

panel2.forEach((item, index) => {
    if (index > 0) {
        tm.to(panel2[index - 1], {opacity: 0}, "+=0.25").to(
            item,
            {opacity: 1},
            "<"
        );
    }
})

tm.to({}, { duration: 0.25 });

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

