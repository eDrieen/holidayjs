/*jshint esversion: 6 */

let userBalace = 100;

let dice_first = null;
let dice_second = null;
let inputs = null;
let balance = null;
let stake = null;
let bet_button = null;
let diceNumber = 6;
let betType = "";
let randomArr = [];
let gameResult = "";

function startGame() {

   stake = document.getElementById("stake");
   let items = document.querySelectorAll(".dice");

   items = [...items];

   let stakeValue = stake.value;

   if (userBalace <= 0) {
      return;
   } else {
      if (randomArr.length === 0) {
         if (betType !== "" && stakeValue !== "" && (stakeValue > 0 && stakeValue <= userBalace)) {

            let randomDiceFirst = Math.floor(Math.random() * diceNumber) + 1;
            let randomDiceSecond = Math.floor(Math.random() * diceNumber) + 1;

            let resultDice = randomDiceFirst + randomDiceSecond;

            randomArr[0] = randomDiceFirst;
            randomArr[1] = randomDiceSecond;

            dice_first.classList.add("slot" + randomArr[0]);
            dice_second.classList.add("slot" + randomArr[1]);

            if (betType == 1 && resultDice >= 2 && resultDice <= 6) {
               userBalace -= stakeValue;
               stakeValue *= 2.2;
               userBalace += stakeValue;
               gameResult = 1;
            } else if (betType == 2 && resultDice == 7) {
               userBalace -= stakeValue;
               stakeValue *= 5.5;
               userBalace += stakeValue;
               gameResult = 1;
            } else if (betType == 3 && resultDice >= 8 && resultDice <= 12) {
               userBalace -= stakeValue;
               stakeValue *= 2.2;
               userBalace += stakeValue;
               gameResult = 1;
            } else if (betType == 4 && randomDiceFirst == randomDiceSecond) {
               userBalace -= stakeValue;
               stakeValue *= 5.5;
               userBalace += stakeValue;
               gameResult = 1;
            } else if (betType == 5 && randomDiceFirst !== randomDiceSecond) {
               userBalace -= stakeValue;
               stakeValue *= 1.15;
               userBalace += stakeValue;
               gameResult = 1;
            } else {
               userBalace -= stakeValue;
               gameResult = 0;
            }

            const blnc = userBalace.toFixed(0);
            balance.textContent = blnc;


         } else {
            alert("Fill in the data correctly");
            gameResult = 3;
         }
         if (gameResult === 1) {
            [].forEach.call(items, function (el) {
               el.style.backgroundColor = "green";
            });
         } else if (gameResult === 0) {
            [].forEach.call(items, function (el) {
               el.style.backgroundColor = "red";
            });
         } else {
            [].forEach.call(items, function (el) {
               el.style.backgroundColor = "white";
            });
         }
      } else {
         dice_first.classList.remove("slot" + randomArr[0]);
         dice_second.classList.remove("slot" + randomArr[1]);
         randomArr.length = 0;
         startGame();
      }
   }
}

document.addEventListener("DOMContentLoaded", function () {
   dice_first = document.getElementById("dice_first");
   dice_second = document.getElementById("dice_second");
   inputs = document.querySelectorAll("input[type=radio]");
   balance = document.getElementById("balance");
   bet_button = document.getElementById("bet_button");

   balance.textContent = userBalace;

   inputs = [...inputs];

   [].forEach.call(inputs, function (el) {
      el.addEventListener("change", function () {
         const _ = this;
         betType = _.id;
      });
   });

   bet_button.addEventListener("click", startGame);
});