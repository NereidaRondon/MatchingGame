const cards = document.querySelectorAll(".card");
let picks = [];
//create an object?
cards.forEach((card) => {
  card.addEventListener("click", pickCard);
});

function pickCard() {
  this.children[1].classList.toggle("show-front");
  picks.push(this.textContent.trim);
}
if (picks.length >= 2) {
  if (picks[picks.length - 1] == picks[picks.length - 2]) {
    console.log("matched");
  } else {
    console.log("not matched");
    //this.children.classList.toggle("show-front");
    const shown = document.querySelectorAll(".shown-front");
    shown.forEach((c) => c.classList.toggle("show-front"));
  }
}
