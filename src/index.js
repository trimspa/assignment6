const cards = document.querySelectorAll(".flip-card");

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

/*  code adapted from freeCodeCamp tutorial :https://www.youtube.com/watch?v=ZniVgo8U7ek  */

function flipCard () {
 if (lockBoard) return;
 if (this === firstCard) return;

 this.classList.add("flip");
 
 if(!hasFlipped) {

    hasFlipped = true;
    firstCard = this;

    return;
}
    hasFlipped = false;
    secondCard = this;
    checkForMatch(); 
 } 


function checkForMatch () {

    let isMatch = firstCard.dataset.framework === 
    secondCard.dataset.framework; 

    isMatch ? disableCards(): unFlipCards();
    
 }

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard ();

}

function unFlipCards(){
    lockBoard = true;
    
    setTimeout(() => {
     firstCard.classList.remove("flip");
     secondCard.classList.remove("flip");

     lockBoard = false;
   
    }, 1500);

}

function resetBoard() {
 [hasFlipped, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];


}

(function shuffle() {
  
 cards.forEach(card => {

    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;

 });

})();


/* JS library: http://albert-gonzalez.github.io/easytimer.js/  
code adapted to create simple timer with stop and start mechanism */

var timer = new Timer();
$('#chronoExample .startButton').click(function () {
    timer.start();
});

$('#chronoExample .stopButton').click(function () {
    timer.stop();
});

timer.addEventListener('secondsUpdated', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('started', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});






cards.forEach(card => card.addEventListener("click", flipCard)); 