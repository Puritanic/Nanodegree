const cards = document.getElementsByClassName('card');
const grid = document.getElementById('js-grid');
const startBtn = document.getElementById('js-start');

const images = ['css3', 'gulp', 'node', 'postcss', 'react', 'redux', 'gulp', 'sass', 'webpack', 'css3', 'node', 'postcss', 'react', 'redux', 'sass', 'webpack']


// cards are an Array like object, and we cant use forEach directly on them, but we can use Array prototype call
Array.prototype.forEach.call(cards, card => {
  card.addEventListener('click', ev => {
    card.classList.add('active');
  });
});

startBtn.addEventListener('click', startGame);

function generateGrid(src, grid) {
  src.map((image, index) => {
    var el = document.createElement('div');
    el.classList.add('card');
    el.innerHTML = `
      <div class="front" style="background: #267df4">Hello</div>
      <div class="back" style="background: #4c8fea">
        <img src="./images/${image}.svg" alt="game card">
      </div>
    `;
    el.addEventListener('click', ev => {
      el.classList.add('active');
    });
    console.log(el);
    return grid.appendChild(el);
  })
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function startGame() {
  var shuffledCards = shuffle(images);
  grid.innerHTML = '';
  generateGrid(shuffledCards, grid);
}