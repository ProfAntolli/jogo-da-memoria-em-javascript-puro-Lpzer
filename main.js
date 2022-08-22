const cardBoard = document.querySelector("#cardboard");
const imagens = [
'angular.svg',
'aurelia.svg',
'vue.svg',
'react.svg',
'backbone.svg',
'ember.svg',
];

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
    <div class="memory-card" data-card="${img}">
      <img class="front-face" src="img/${img}">
      <img Class="back-face" src="img/js-badge.svg">
    </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim renderização HTML */

const cards = document.querySelectorAll('.memory-card');
let firstcard, secondcard;
let lockcard = false


function flipcard() {
    if(lockcard) return false;
    this.classList.add("flip");
if(!firstcard){
    firstcard = this;

    return false;
}
    secondcard = this;

    checkForMath();
}

function checkForMath(){
    let isMatch = firstcard.dataset.card === secondcard.dataset.card;

    !isMatch ? disablecards(): resetcards(isMatch);
}
function disablecards() {
    lockcard = true;

    setTimeout(() => {
    firstcard.classList.remove("flip");
    secondcard.classList.remove("flip"); 

 
    resetcards();
} , 1000);
    
}


(function shuffle(){
    cards.forEach( card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    } );
})();



function resetcards(isMatch = false) {
        if(isMatch){
        firstcard.removeEventListener('click', flipcard);
        secondcard.removeEventListener('click', flipcard);
    }
    [firstcard, secondcard, lockcard] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipcard))
