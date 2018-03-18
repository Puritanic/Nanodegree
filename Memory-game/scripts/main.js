const grid = document.getElementById('js-grid');
const startBtn = document.getElementById('js-start');

const images = ['css3', 'gulp', 'node', 'postcss', 'react', 'redux', 'gulp', 'sass', 'webpack', 'css3', 'node', 'postcss', 'react', 'redux', 'sass', 'webpack']


// cards are an Array like object, and we cant use forEach directly on them, but we can use Array prototype call
// useful snippet
// Array.prototype.forEach.call(cards, card => {
//   card.addEventListener('click', ev => {
//     card.classList.add('active');
//   });
// });

startBtn.addEventListener('click', startGame);

function generateGrid(src, grid) {
  src.map((image, index) => {
    var el = document.createElement('div');
    el.classList.add('card');
    el.id = `${image}`;
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

// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t, i;

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