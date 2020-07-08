const back = document.querySelectorAll('.section__back');
const block = document.querySelectorAll('.section__block');
const section = document.querySelector('.section');
const sectionMain = document.querySelectorAll('.section__main');
const sectionCard = document.querySelectorAll('.section__card');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickCard(valueOfBack, valueOfSection = 0) {
  sectionMain[valueOfSection].children[valueOfBack].firstElementChild.lastElementChild.style.background = 'url("./img/win.png")';
  sectionMain[valueOfSection].children[valueOfBack].firstElementChild.lastElementChild.style.backgroundSize = 'contain';
}

if (back.length < 6) {
  const easyGame = getRandomInt(0, 3);
  pickCard(easyGame);
}
else if (back.length === 6) {
  const mediumGame = getRandomInt(0, 3);
  const stageRandom = getRandomInt(0, 2);
  pickCard(mediumGame, stageRandom);
}
else {
  const highGame = getRandomInt(0, 5);
  const stageRandom = getRandomInt(0, 2);
  pickCard(highGame, stageRandom);
}

document.addEventListener('click', event => {
  const cardType = event.target.dataset.card;
  const blockType = event.target.dataset.block;

  if(cardType === 'card') {
    event.path[3].classList.add('active');
    event.path[3].classList.remove('section__hover');
    event.target.classList.add('click');
    for (let val of sectionCard) {
      switch(false) {
        case val.classList.contains('click'):
          val.style.pointerEvents = 'none';
          break;
      } 
    }
    section.insertAdjacentHTML('afterbegin',
      '<button class = "section__menu">Меню</button>'
    );
    document.querySelector('.section__menu').addEventListener('click', () => document.location.href = './index.html');
  }
  if(blockType === 'block') {
    document.querySelector('.section__menu').remove();
    for (let val of sectionCard) {
          val.classList.remove('click');
          val.style.pointerEvents = 'auto';
    }
    setTimeout(() => {
      for (let val of back) {
        val.style.background = 'url("./img/end.png")';
        val.style.backgroundSize = 'contain';
      }
      switch(true)
      {
        case section.classList.contains('section_easy'):
          pickCard(getRandomInt(0, 3));
          break;
        case section.classList.contains('section_medium'):
          pickCard(getRandomInt(0, 3), getRandomInt(0, 2));
          break;
        case section.classList.contains('section_high'):
          pickCard(getRandomInt(0, 5), getRandomInt(0, 2));
          break;
      }
    }, 250);
    event.path[2].classList.remove('active');
  }
});
