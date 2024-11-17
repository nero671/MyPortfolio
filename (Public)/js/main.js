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
const reactWorks = document.querySelector('#react .react-works');
const jsWorks = document.querySelector('#js-services .js-works');
const gamesWorks = document.querySelector('#games .games-work');
const bw = document.body.clientWidth;

window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    animations();
});



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
  document.querySelector('body').classList.add('lock')
}

const closeModal = event => {
  const target = event.target;

  if (target.closest('.modal__close') || target.classList.contains('modal') ||
    event.code == 'Escape') {
    modal.classList.remove('is-open');
    document.removeEventListener('keydown', closeModal);
      document.querySelector('body').classList.remove('lock')
  }

};

document.addEventListener('keydown', closeModal);
document.addEventListener('click', closeModal);


// arrow.addEventListener('click', toContent);

conectionLogoIcon.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

menuModal.addEventListener('click', changeArrow);


////animations
const animations = () => {
    if (bw > 1400) {
        gsap.set(["#bubbles rect", "#bubbles circle", "#bubbles path", "#bubbles2 g, bubble"], {
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
                duration: 2.55,
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
                duration: 1.3,
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
                duration: 2.4,
                y: 1050,
                ease: "elastic.out(.1, 0.1)",
            },
            1
        ).to(
            '.round', {
                duration: 2.4,
                css: {
                    left: "-200px"
                },
                ease: "elastic.out(.1, 0.1)",
            }, 4
        ).to(
            '.round2', {
                duration: 2.4,
                css: {
                    right: "-200px",
                    left: 'initial'
                },
                ease: "elastic.out(.1, 0.1)",
            }, 4
        );

        gsap.utils.toArray('.panel').forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                scrub: 1,
                pin: true,
                pinSpacing: false,
            });
        });

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
                repeat: 0,
                onComplete: () => unLock(),
            }, delay)
        }


        const unLock = () => {
            document.querySelector('body').classList.remove('lock');
            localStorage.setItem('isUnlocked', 'true');
        }

        if (localStorage.getItem('isUnlocked')) {
            document.querySelector('body').classList.remove('lock');
        } else {
            unLock();
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

        TweenLite.from('.bubble-link', {
            opacity: 0,
            scale: 0.25
        }, 5.5);
    }
}

if (bw < 1400) {
    document.querySelector('body').classList.remove('lock');
}

const swiperInit = (selector) => {
    const isSmallScreen = window.matchMedia('(max-width: 1399px)').matches;

    new Swiper(selector, {
        grabCursor: true,
        loop: false,
        pagination: {
            el: selector.nextElementSibling,
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: isSmallScreen ? '.btn-next' : selector.parentNode.querySelector('.btn-next'),
            prevEl: isSmallScreen ? '.btn-prev' : selector.parentNode.querySelector('.btn-prev'),
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
                slidesPerView: 1.5,
            },
            490: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}


// const scrollToNextSection = () => {
//     const nextSection = document.getElementById('section1');
//     const offset = 70;
//     const targetY = nextSection.offsetTop - offset;
//
//     window.scrollTo({
//         top: targetY,
//         behavior: 'smooth',
//     });
// };
// const previewLink = document.querySelector('.preview-link');
// previewLink.addEventListener('click', () => document.body.classList.remove('no-scroll'))
// previewLink.addEventListener('click', scrollToNextSection);

swiperInit(bestWorks);
swiperInit(webWorks);
swiperInit(reactWorks);

if (bw < 490) {
    swiperInit(gamesWorks);
}

// swiperInit(jsWorks);



const togglePopupWindows = () => {
    document.addEventListener('click', ({ target }) => {
        if (target.closest('[data-type]')) {
            const popup = document.querySelector(
                `[data-popup="${target.dataset.type}"]`
            );

            if (document.querySelector('._is-open')) {
                document.querySelectorAll('._is-open').forEach((modal) => {
                    modal.classList.remove('_is-open');
                });
            }

            popup.classList.add('_is-open');
        }

    });
};

togglePopupWindows();

const skillsItemWrapper = document.querySelectorAll('.skills__item-wrapper');

skillsItemWrapper.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('skills__item-wrapper')) {
            item.classList.toggle('shattered');


            setTimeout(() => {
                const skillsItem = item.querySelector('.skills__item');
                if (item.classList.contains('shattered')) {
                    skillsItem.style.cssText = `z-index: -1`;
                } else {
                    skillsItem.style.cssText = `z-index: 1;`;
                    skillsItem.classList.toggle('reverse-shatter-animation');

                    setTimeout(() => {
                        if (skillsItem.classList.contains('reverse-shatter-animation')) {
                            skillsItem.classList.remove('reverse-shatter-animation')
                        }
                    }, 1500)
                }
            }, 500);
        }
    })
});

const startRandomPulse = () => {

    skillsItemWrapper.forEach(item => item.classList.remove('pulse'));

    const validItems = Array.from(skillsItemWrapper).filter(item => !item.classList.contains('no-click'));

    if (validItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * validItems.length);
        const randomItem = validItems[randomIndex];

        randomItem.classList.add('pulse');
    }
}

setInterval(startRandomPulse, 6000);

const sectionLinks = document.querySelector('.section-wrapper-links-wrapper');
const sectionLink = document.querySelectorAll('.section-wrapper-links-wrapper .title');
const sectionContent = document.querySelectorAll('.section-wrapper-anchor');
const tabs = (linkWrapper, link, content) => {
    const toggleTab = (index, link) => {
        for(let i = 0; i < content.length; i++) {
            if (index === i) {
                link[i].classList.add('active');
                content[i].classList.add('active');
            } else {
                link[i].classList.remove('active');
                content[i].classList.remove('active');
            }
        }

        const activeWork = content[index].querySelector('.section-wrapper-anchor.active .works[data-slider-id]');

        if (activeWork) {
            const activeSliderId = activeWork.getAttribute('data-slider-id');
            const buttons = document.querySelectorAll('.arrow-slider-title-wrapper_btn[data-slider-id]');

            buttons.forEach(button => {
                button.setAttribute('data-slider-id', activeSliderId)
            });
        }
    }

    if(linkWrapper) {
        linkWrapper.addEventListener('click', (e) => {
            let target = e.target;
            const linkClass = '.' + link[1].classList[0];
            if (target.matches(linkClass)) {
                link.forEach((item, i) => {
                    if (item === target) {
                        toggleTab(i, link);
                    }
                })
            }
        })
    }
}

tabs(sectionLinks,
sectionLink,
sectionContent);

















































