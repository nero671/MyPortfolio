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



document.addEventListener('DOMContentLoaded', () => {
  const btnAdd = document.querySelector('#add'),
    headerInput = document.querySelector('.header-input'),
    todo = document.querySelector('#todo'),
    completed = document.querySelector('#completed');

  let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
  };

  const addToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(todoList);
  };

  const newTodo = todoText => {
    const moveTodo = () => {
      const elem = event.target.parentNode.parentNode;
      if (elem.parentNode.className === 'todo') {
        todoList.todo.splice([].indexOf.call(elem.parentNode.children, elem), 1);
        todoList.completed.unshift(elem.textContent);
        completed.insertBefore(elem, completed.childNodes[0]);
      } else {
        todoList.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
        todoList.todo.unshift(elem.textContent);
        todo.insertBefore(elem, todo.childNodes[0]);
      }
      addToStorage();
    };

    const removeTodo = () => {
      const elem = event.target.parentNode.parentNode;
      if (elem.parentNode.className === 'todo') {
        console.log([].indexOf.call(elem.parentNode.children, elem));
        todoList.todo.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      } else {
        todoList.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      }
      elem.parentNode.removeChild(elem);

      addToStorage();
    };

    const todoItem = document.createElement('li'),
      todoButtons = document.createElement('div'),
      todoRemove = document.createElement('button'),
      todoComplete = document.createElement('button');

    todoItem.className = 'todo-item';
    todoButtons.className = 'todo-buttons';
    todoRemove.className = 'todo-remove';
    todoComplete.className = 'todo-complete';

    todoRemove.addEventListener('click', removeTodo);
    todoComplete.addEventListener('click', moveTodo);
    todoButtons.appendChild(todoRemove);
    todoButtons.appendChild(todoComplete);
    todoItem.textContent = todoText;
    todoItem.appendChild(todoButtons);

    return todoItem;
  };

  const addTodo = () => {
    event.preventDefault();
    todo.insertBefore(newTodo(headerInput.value.trim()), todo.childNodes[0]);
    todoList.todo.unshift(headerInput.value.trim());
    headerInput.value = '';

    addToStorage();
  };

  for (let i = todo.children.length - 1; i >= 0; i--) {
    todo.removeChild(todo.children[i]);
    todo.textContent = '';
  }
  for (let i = completed.children.length - 1; i >= 0; i--) {
    completed.removeChild(completed.children[i]);
    completed.textContent = '';
  }

  for (let i = 0; i < todoList.todo.length; i++) {
    todo.appendChild(newTodo(todoList.todo[i]));
  }
  for (let i = 0; i < todoList.completed.length; i++) {
    completed.appendChild(newTodo(todoList.completed[i]));
  }

  btnAdd.addEventListener('click', addTodo);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnAdd = document.querySelector('#add'),
    headerInput = document.querySelector('.header-input'),
    todo = document.querySelector('#todo'),
    completed = document.querySelector('#completed');

  let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
  };

  const addToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(todoList);
  };

  const newTodo = todoText => {
    const moveTodo = () => {
      const elem = event.target.parentNode.parentNode;
      if (elem.parentNode.className === 'todo') {
        todoList.todo.splice([].indexOf.call(elem.parentNode.children, elem), 1);
        todoList.completed.unshift(elem.textContent);
        completed.insertBefore(elem, completed.childNodes[0]);
      } else {
        todoList.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
        todoList.todo.unshift(elem.textContent);
        todo.insertBefore(elem, todo.childNodes[0]);
      }
      addToStorage();
    };

    const removeTodo = () => {
      const elem = event.target.parentNode.parentNode;
      if (elem.parentNode.className === 'todo') {
        console.log([].indexOf.call(elem.parentNode.children, elem));
        todoList.todo.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      } else {
        todoList.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      }
      elem.parentNode.removeChild(elem);

      addToStorage();
    };

    const todoItem = document.createElement('li'),
      todoButtons = document.createElement('div'),
      todoRemove = document.createElement('button'),
      todoComplete = document.createElement('button');

    todoItem.className = 'todo-item';
    todoButtons.className = 'todo-buttons';
    todoRemove.className = 'todo-remove';
    todoComplete.className = 'todo-complete';

    todoRemove.addEventListener('click', removeTodo);
    todoComplete.addEventListener('click', moveTodo);
    todoButtons.appendChild(todoRemove);
    todoButtons.appendChild(todoComplete);
    todoItem.textContent = todoText;
    todoItem.appendChild(todoButtons);

    return todoItem;
  };

  const addTodo = () => {
    event.preventDefault();
    todo.insertBefore(newTodo(headerInput.value.trim()), todo.childNodes[0]);
    todoList.todo.unshift(headerInput.value.trim());
    headerInput.value = '';

    addToStorage();
  };

  for (let i = todo.children.length - 1; i >= 0; i--) {
    todo.removeChild(todo.children[i]);
    todo.textContent = '';
  }
  for (let i = completed.children.length - 1; i >= 0; i--) {
    completed.removeChild(completed.children[i]);
    completed.textContent = '';
  }

  for (let i = 0; i < todoList.todo.length; i++) {
    todo.appendChild(newTodo(todoList.todo[i]));
  }
  for (let i = 0; i < todoList.completed.length; i++) {
    completed.appendChild(newTodo(todoList.completed[i]));
  }

  btnAdd.addEventListener('click', addTodo);
});