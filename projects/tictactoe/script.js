/*jshint esversion: 6 */

let square = null;
let boxes = null;
let message = null;
let userTurn = "o";
let board = [
   null, null, null,
   null, null, null,
   null, null, null,
];
let gameResult = 0;

function gettet(number) {
   return document.getElementById(number);
}

function displayText(user) {
   if (user == "x") {
      user = "o";
   } else if (user == "o") {
      user = "x";
   } else {
      user = "siema";
   }
   message.textContent = `${user} your turn!`;
}

function turn() {
   const _ = this;
   if (_.textContent === "") {
      if (userTurn == "o") {
         userTurn = "x";
      } else {
         userTurn = "o";
      }
   } else {
      return;
   }

   if (userTurn == "x") {
      board[_.id] = "x";
   } else {
      board[_.id] = "o";
   }

   if (board.length >= 5) {
      if (
         (board[0] == "x" && board[1] == "x" && board[2] == "x") ||
         (board[3] == "x" && board[4] == "x" && board[5] == "x") ||
         (board[6] == "x" && board[7] == "x" && board[8] == "x") ||
         (board[0] == "x" && board[3] == "x" && board[6] == "x") ||
         (board[1] == "x" && board[4] == "x" && board[7] == "x") ||
         (board[2] == "x" && board[5] == "x" && board[8] == "x") ||
         (board[0] == "x" && board[4] == "x" && board[8] == "x") ||
         (board[2] == "x" && board[4] == "x" && board[6] == "x")
      ) {
         gameResult = 1;
         for (let i = 0; i < board.length; i++) {
            if (board[i] == "x") {
               square[i].textContent = "x";
            }
         }
         alert(`Win ${userTurn}`);
         [].forEach.call(square, function (el) {
            el.removeEventListener("click", turn);
         });
      } else if (
         (board[0] == "o" && board[1] == "o" && board[2] == "o") ||
         (board[3] == "o" && board[4] == "o" && board[5] == "o") ||
         (board[6] == "o" && board[7] == "o" && board[8] == "o") ||
         (board[0] == "o" && board[3] == "o" && board[6] == "o") ||
         (board[1] == "o" && board[4] == "o" && board[7] == "o") ||
         (board[2] == "o" && board[5] == "o" && board[8] == "o") ||
         (board[0] == "o" && board[4] == "o" && board[8] == "o") ||
         (board[2] == "o" && board[4] == "o" && board[6] == "o")
      ) {
         gameResult = 1;
         for (let i = 0; i < board.length; i++) {
            if (board[i] == "o") {
               square[i].textContent = "o";
            }
         }
         alert(`Win ${userTurn}`);
         [].forEach.call(square, function (el) {
            el.removeEventListener("click", turn);
         });
      }
   }

   if (gameResult === 0) {
      displayText(userTurn);
      _.textContent = userTurn;
   } else {
      message.textContent = "END";
      setTimeout(() => {
         gameResult = 0;
         for (let i = 0; i < board.length; i++) {
            board[i] = null;
            square[i].textContent = "";
         }
         [].forEach.call(square, function (el) {
            el.addEventListener("click", turn);
         });
         userTurn = "o";
         displayText(userTurn);
      }, 2000);
   }

}

document.addEventListener("DOMContentLoaded", function () {
   square = document.querySelectorAll(".square");
   message = document.getElementById("message");

   square = [...square];

   displayText(userTurn);

   [].forEach.call(square, function (el) {
      el.addEventListener("click", turn);
   });
});