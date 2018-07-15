/*jshint esversion: 6 */

const colors = ["orange", "orange", "citrin", "citrin", "lightblue", "lightblue", "coral", "coral", "cadetblue", "cadetblue", "violet", "violet"];

let cards = null;
let pairsLeft = null;
let timer = null;

let gameTime = 60;
let currentTime = gameTime;
let clicked = "";
const activeCards = [];

const endGame = colors.length / 2;
let gameResult = 0;
let moves = 0;

function resultUpdate(gameResult, moves) {
   pairsLeft.textContent = `Pairs found: ${gameResult}, Moves: ${moves} `;
}

function time() {

   if (currentTime < 0) {
      alert("You lose");
      clearInterval(t);
      currentTime = 0;
      location.reload();
   }

   timer.textContent = `Time left: ${currentTime} sec`;
   currentTime--;

}

function cardClick() {
   clicked = this;

   if (clicked == activeCards[0]) return;

   clicked.classList.remove("hidden");

   if (activeCards.length === 0) {
      activeCards[0] = clicked;
      return;
   } else {
      [].forEach.call(cards, function (el) {
         el.removeEventListener("click", cardClick);
      });
      activeCards[1] = clicked;

      setTimeout(() => {
         if (activeCards[0].className === activeCards[1].className) {
            [].forEach.call(activeCards, function (el) {
               el.classList.add("off");
            });
            cards = cards.filter(card => !card.classList.contains("off"));
            gameResult++;
            resultUpdate(gameResult, moves);
            if (gameResult == endGame) {
               clearInterval(t);
               const resultTime = gameTime - currentTime;
               alert(`Your time: ${resultTime} sec`);
               location.reload();
            }
            moves++;
            resultUpdate(gameResult, moves);

         } else {
            [].forEach.call(activeCards, function (el) {
               el.classList.add("hidden");
            });
            moves++;
            resultUpdate(gameResult, moves);
         }
         clicked = "";
         activeCards.length = 0;
         [].forEach.call(cards, function (el) {
            el.addEventListener("click", cardClick);
         });

      }, 500);

   }

}

function initialize() {

   [].forEach.call(cards, function (el) {
      const randomPosition = Math.floor(Math.random() * colors.length);

      el.classList.add(colors[randomPosition]);
      colors.splice(randomPosition, 1);
   });

   setTimeout(() => {
      [].forEach.call(cards, function (el) {
         el.classList.add("hidden");
         el.addEventListener("click", cardClick);
      });
   }, 2000);

}

const t = setInterval(time, 1000);

document.addEventListener("DOMContentLoaded", function () {

   cards = document.querySelectorAll(".container div");
   pairsLeft = document.getElementById("pairsLeft");
   timer = document.getElementById("timer");

   cards = [...cards];

   initialize();
   resultUpdate(gameResult, moves);

});
