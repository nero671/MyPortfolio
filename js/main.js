// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href')

//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'center'
//     })
//   })
// }
const about = document.getElementById('about');
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
  console.log(event.code);
};

document.addEventListener('keydown', closeModal);
document.addEventListener('click', closeModal);


arrow.addEventListener('click', toContent);

conectionLogoIcon.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

menuModal.addEventListener('click', changeArrow);

// menuModal.addEventListener('click', openModal, changeArrow);



