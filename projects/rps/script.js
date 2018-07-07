/*jshint esversion: 6 */

let elImg = null;
let getComputerType = null;
let player = null;
let playerTitle = null;
let computer = null;
let computerTitle = null;
let playerPoints = 0;
let computerPoints = 0;
let maxScore = 20;
let winner = "";
let pick = ["rock", "paper", "scissors"];

function startGame(userPick, computerPick) {

      player.src = "img/" + userPick + ".png";
      computer.src = "img/" + computerPick + ".png";

      if ((userPick == "rock" && computerPick == "scissors") || (userPick == "paper" && computerPick == "rock") || (userPick == "scissors" && computerPick == "paper")) {
            playerPoints++;
      } else if (userPick == computerPick) {
            console.log("tie");
      } else {
            computerPoints++;
      }

      if (playerPoints == maxScore) {
            winner = "Player";
            playerPoints = 0;
            computerPoints = 0;
            console.log("The winner is " + winner);
      } else if (computerPoints == maxScore) {
            winner = "Computer";
            playerPoints = 0;
            computerPoints = 0;
            console.log("The winner is " + winner);
      }
      changePoints(playerPoints, computerPoints);

}

function computerPick() {
      return Math.floor(Math.random() * 3);
}

function changePoints(playerPoints, computerPoints) {
      playerTitle.textContent = "You(" + playerPoints + ")";
      computerTitle.textContent = "Computer(" + computerPoints + ")";

}

document.addEventListener("DOMContentLoaded", function () {
      player = document.querySelector(".player");
      computer = document.querySelector(".computer");
      playerTitle = document.querySelector(".playerTitle");
      computerTitle = document.querySelector(".computerTitle");

      document.addEventListener("keydown", function (e) {
            let key = e.which || e.keyCode;
            if (key === 49) {
                  getComputerType = computerPick();
                  startGame(pick[0], pick[getComputerType]);
            } else if (key === 50) {
                  getComputerType = computerPick();
                  startGame(pick[1], pick[getComputerType]);
            } else if (key === 51) {
                  getComputerType = computerPick();
                  startGame(pick[2], pick[getComputerType]);
            }
      });

});
