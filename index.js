const cards = document.gquerySelectorAll(".card")
let picks = [;
]
cards.forEach(card => {
    card.addEventListener("click", pickCard)
})


function pickCard(){
    picks.push(this.textContent);
    console.log(picks)
}
const firstClicked = cards[0].textContent;
const secondClicked = cards[1].textContent;

if(firstClicked === secondClicked){
    console.log("keep the cards flipped")
} else {
    console.log("rotate back");
}

