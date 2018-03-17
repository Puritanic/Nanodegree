const cards = document.getElementsByClassName('card');

// cards are an Array like object, and we cant use forEach directly on them, but we can use Array prototype call
Array.prototype.forEach.call(cards, card => {
  card.addEventListener('click', ev => {
    card.classList.add('active');
  });
});
