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
    el.id = `${image}-${index}`;
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
  console.log(e);
  if (cardsToMatch.length === 2) {
    cardsToMatch = [];
    resetClass(grid);
  }

  displayCard(el);
  console.log(el.getAttribute('data-card'));

  if (cardsToMatch.length === 2) {
    checkMatch(cardsToMatch) ? matched(cardsToMatch) : null;
  }
}

function checkMatch(arr) {
  const [a, b] = arr;
  console.log(a.data === b.data && !(a.id === b.id));
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
  const first = document.getElementById(a.id);
  const second = document.getElementById(b.id);
  first.classList.remove('active');
  second.classList.remove('active');
  first.classList.add('matched');
  second.classList.add('matched');
  console.log(a, b);
}

function resetClass(el) {
  console.dir(el);
  console.log(el.childNodes);
  console.log(typeof el.childNodes);
  el.childNodes.forEach(el => el.classList.remove('active'));
}

function lockGrid(el) {
  el.forEach.childNodes(card => card.classList.add('locked'));
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
  var shuffledCards = shuffle(images);
  grid.innerHTML = '';
  generateGrid(shuffledCards, grid);
}
