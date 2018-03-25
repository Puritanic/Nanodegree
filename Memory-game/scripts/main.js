const grid = document.getElementById('js-grid');
const startBtn = document.getElementById('js-start');

const images = [
  'css3',
  'gulp',
  'node',
  'postcss',
  'react',
  'redux',
  'gulp',
  'sass',
  'webpack',
  'css3',
  'node',
  'postcss',
  'react',
  'redux',
  'sass',
  'webpack'
];

let cardsToMatch = [];
let moveCounter = 0;
let pairs = 8;

// cards are an Array like object, and we cant use forEach directly on them, but we can use Array prototype call
// useful snippet
// Array.prototype.forEach.call(cards, card => {
//   card.addEventListener('click', ev => {
//     card.classList.add('active');
//   });
// });

startBtn.addEventListener('click', startGame);

if (cardsToMatch.length === 2) {
  cardsToMatch = [];
}

function generateGrid(src, grid) {
  src.map((image, index) => {
    var el = document.createElement('div');
    el.classList.add('card');
    el.id = `js-${image}-${index}`;
    el.setAttribute('data-card', image);
    el.innerHTML = `
      <div class="front">Hello</div>
      <div class="back">
        <img src="./images/${image}.svg" alt="game card">
      </div>
    `;
    el.addEventListener('click', handleClick.bind(null, event, el));

    return grid.appendChild(el);
  });
}

function handleClick(e, el) {
  if (cardsToMatch.length === 2) {
    cardsToMatch = [];
    resetClass(grid);
  }

  displayCard(el);
  incrementMoves();

  if (cardsToMatch.length === 2) {
    checkMatch(cardsToMatch) ? matched(cardsToMatch) : null;
  }
}

function incrementMoves() {
  moveCounter++;
  document.getElementById('js-moves').textContent = `Moves: ${moveCounter}`;
}

function checkMatch(arr) {
  const [a, b] = arr;
  return a.data === b.data && !(a.id === b.id);
}

function displayCard(el) {
  el.classList.add('active');
  const card = {
    data: el.getAttribute('data-card'),
    id: el.id
  };
  cardsToMatch.push(card);
}

function matched(arr, onClick) {
  const [a, b] = arr;
  document.getElementById(a.id).classList.add('matched');
  document.getElementById(b.id).classList.add('matched');
  document.getElementById(a.id).classList.remove('active');
  document.getElementById(b.id).classList.remove('active');
  pairs--;
  console.log(a, b, pairs);
  if (pairs < 1) {
    console.log('CONGRATS YOU WON');
    clearTimeout(t);
  }
}

function resetClass(el) {
  el.childNodes.forEach(el => el.classList.remove('active'));
}

// https://stackoverflow.com/a/2450976/7453363
// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function startGame() {
  const shuffledCards = shuffle(images);
  moveCounter = 0;
  grid.innerHTML = '';
  generateGrid(shuffledCards, grid);
  timer();

  startBtn.textContent = 'Restart Game';
}

function restartGame() {
  h1.textContent = '00:00:00';
  seconds = 0;
  minutes = 0;
  hours = 0;
}

// Timer functionality

let timerDisplay = document.getElementById('js-timer'),
  seconds = 0,
  minutes = 0,
  hours = 0,
  t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  timerDisplay.textContent =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}
