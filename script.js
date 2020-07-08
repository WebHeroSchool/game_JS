const levels = document.querySelectorAll('.section__level');
const button = document.querySelector('.section__button');
let game, number;
function removeAndAddClasses(level1, level2) {
  levels[level1].classList.remove('active');
  levels[level2].classList.remove('active');
  levels[level1].classList.add('section__hover');
  levels[level2].classList.add('section__hover');
}

function checkBoolean(level) {
  switch(false) {
    case levels[level].classList.contains('active'):
      levels[level].classList.add('section__hover');
      break;
  }
}
const addEvent = event => {
  event.target.classList.remove('section__hover');
  event.target.classList.toggle('active');
  game = event.target.innerHTML;
  if(game === 'Простой') {
    removeAndAddClasses(1, 2);
    checkBoolean(0);
  }
  else if(game === 'Средний') {
    removeAndAddClasses(0, 2);
    checkBoolean(1);
  }
  else if(game === 'Сложный') {
    removeAndAddClasses(0, 1);
    checkBoolean(2);
  }
}

levels[0].addEventListener('click', addEvent);
levels[1].addEventListener('click', addEvent);
levels[2].addEventListener('click', addEvent);

function removeEvents() {
  levels[0].removeEventListener('click', addEvent);
  levels[1].removeEventListener('click', addEvent);
  levels[2].removeEventListener('click', addEvent);  
}
button.addEventListener('click', event => {
  if (game === 'Простой') {
    removeEvents();
    document.location.href = './easyLevel.html';
  }
  else if(game === 'Средний') {
    removeEvents();
    document.location.href = './mediumLevel.html';
  }
  else if(game === 'Сложный') {
    removeEvents();
    document.location.href = './highLevel.html';
  }
});
