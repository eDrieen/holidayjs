/*jshint esversion: 6 */

let start_game = null;
let button_container = null;
let elements_container = null;
let elements = null;

let lucky = 1;
let find = 0;
let clicks = 0;
let maxCLicks = 5;

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let luckyNumbers = [];

function show(i) {

      clicks++;
      let z = arr.indexOf(i);
      arr.splice(z, 1);

      for (let j = 0; j < luckyNumbers.length; j++) {
            if (i === luckyNumbers[j]) {
                  elements[i].classList.add("treasure");
                  elements[i].classList.remove("element");
                  find++;
            } else {
                  elements[i].classList.add("nothing");
                  elements[i].classList.remove("element");
            }
      }
      if (find === lucky) {
            arr.length = 0;
            alert("You found all the treasures!");
            setTimeout(() => {
                  location.reload();
            }, 2000);
      }
      if (clicks === maxCLicks) {
            arr.length = 0;
            alert("You did not find all the treasures!");
            setTimeout(() => {
                  location.reload();
            }, 2000);
      }
}

function randomNumbers() {
      for (let i = 0; i < lucky; i++) {
            let random = Math.floor(Math.random() * 15);
            luckyNumbers.push(random);
      }

      let a = luckyNumbers.sort();

      let duplicated = [];
      for (let i = 0; i < a.length; i++) {
            if (a[i + 1] == a[i]) {
                  duplicated.push(a[i]);
            }
      }

      if (duplicated.length > 0) {
            duplicated.length = 0;
            luckyNumbers.length = 0;
            randomNumbers();
      }
}

function init() {
      button_container.style.display = "none";
      elements_container.style.display = "flex";

      elements = document.querySelectorAll(".element");

      [].forEach.call(elements, function (el, i) {
            el.addEventListener("click", function () {
                  if (arr.indexOf(i) > -1) {
                        show(i);
                  } else {
                        return;
                  }
            });
      });
}

document.addEventListener("DOMContentLoaded", function () {
      start_game = document.getElementById("start_game");
      button_container = document.querySelector(".button_container");
      elements_container = document.querySelector(".elements_container");

      randomNumbers();

      start_game.addEventListener("click", init);

});