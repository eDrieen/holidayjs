/*jshint esversion: 6 */

let roulette_img = null;
let roulette_bullets = null;
let roulette_submit = null;
let panel_container = null;
let container = null;
let play = null;
let title = null;

let bullets = 0;
let killBullet = [1, 2, 3, 4, 5, 6];
let result = [];
let gameStatus = 0;

const r_img = new Image();
r_img.src = "gun.png";

function shoot(result) {
   bullets++;
   if (bullets > 6) {
      document.removeEventListener("click", shoot);
   } else {
      if (result.includes(bullets)) {
         alert("win");
      } else {
         gameStatus = 1;
      }
   }
   if (gameStatus === 1) {
      panel_container.style.display = "none";
      title.style.display = "block";
      container.style.backgroundColor = "darkred";
   }
}

function startGame() {
   const bulletsValue = roulette_bullets.value;

   for (let a = killBullet, i = a.length; i--;) {
      let random = killBullet.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      result.push(random);
   }

   for (let i = bulletsValue - 1; i >= 0; i--) {
      result.splice(Math.floor(Math.random() * result.length), 1);
   }

   result.sort();


   roulette_submit.remove();
   document.removeEventListener("click", startGame);

   play = document.createElement("button");
   play.setAttribute("type", "submit");
   play.classList.add("submit");
   play.id = "shoot";
   play.textContent = "SHOOT";
   panel_container.appendChild(play);
   play.addEventListener("click", function () {
      shoot(result);
   });


}

document.addEventListener("DOMContentLoaded", function () {
   roulette_img = document.getElementById("roulette_img");
   roulette_bullets = document.getElementById("roulette_bullets");
   roulette_submit = document.getElementById("roulette_submit");
   panel_container = document.getElementById("panel_container");
   title = document.querySelector(".title");
   container = document.querySelector(".container");

   roulette_submit.addEventListener("click", startGame);
   roulette_img.appendChild(r_img);
});