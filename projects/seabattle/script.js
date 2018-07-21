/*jshint esversion: 6 */

let guess = null;
let confirm_bet = null;

let ship_position = null;

let tere = null;
let tede = null;
let tr_table = null;
let td_table = null;
let table_container = null;
let shipArr = null;

let ship_size = 3;
let shipDestroyed = 0;
let attempts = 0;


const ships = [{
            locations: null,
            hits: []
      },
      {
            locations: null,
            hits: []
      },
      {
            locations: null,
            hits: []
      },
      {
            locations: null,
            hits: []
      },
      {
            locations: null,
            hits: []
      },
      {
            locations: null,
            hits: []
      },
];

function correctGuess(j, i) {
      tede[ships[j].locations[i]].style.backgroundColor = "gray";
      tede[ships[j].locations[i]].classList.add("boom");
      let git = ships[j].locations;
      git.splice(i, 1);
      ships[j].hits.push("x");
      if (ships[j].hits.length === 3) {
            shipDestroyed++;
            console.log("zatopiony");
      }
      if (shipDestroyed === 6) {
            alert(`WYGRANA! ${attempts} prób`);
            setTimeout(() => {
                  location.reload();
            }, 2000);
      }

}

function userGuess() {
      let guess = guessInput.value;
      let badguess = 0;

      if (guess < 0 || guess > 99) {
            alert("podaj dokładną liczbę");
      } else {
            attempts++;
            for (let i = 0; i <= 2; i++) {
                  for (let j = 0; j <= 5; j++) {
                        if (guess == ships[j].locations[i]) {
                              correctGuess(j, i);
                              badguess = 1;
                        }
                  }
            }
      }
      if (badguess === 0) {
            if (tede[guess].classList.contains("boom")) {
                  attempts--;
            } else {
                  tede[guess].style.backgroundColor = "red";
            }
      }
      guessInput.value = "";
}

function randomLoc() {
      shipArr = [];

      ship_rotate = Math.floor(Math.random() * 2);

      if (ship_rotate === 0) {
            ship_row = Math.floor(Math.random() * 10);
            ship_position = Math.floor(Math.random() * 7);
      } else {
            ship_row = Math.floor(Math.random() * 7);
            ship_position = Math.floor(Math.random() * 10);
      }

      let ship_pos = table_container.rows[ship_row].cells[ship_position].id;

      let conv = Number(ship_pos);

      if (ship_rotate === 0) {
            for (let i = conv; i < conv + ship_size; i++) {
                  shipArr.push(i);
            }
      } else {
            for (let i = conv; i < conv + (ship_size * 10); i += 10) {
                  shipArr.push(i);
            }
      }
      return shipArr;
}

function init() {

      const firstShip = randomLoc();
      const secondShip = randomLoc();
      const thirdShip = randomLoc();
      const fourthShip = randomLoc();
      const fifthShip = randomLoc();
      const sixthShip = randomLoc();

      const arr = [firstShip, secondShip, thirdShip, fourthShip, fifthShip, sixthShip];
      const all = [];

      let z = all.concat(firstShip, secondShip, thirdShip, fourthShip, fifthShip, sixthShip);
      let zConvert = z.slice().sort();

      let allShips = [];
      for (let i = 0; i < zConvert.length - 1; i++) {
            if (zConvert[i + 1] == zConvert[i]) {
                  allShips.push(zConvert[i]);
            }
      }

      let found = false;

      const game = {
            restart: function () {
                  found = false;
                  firstShip.length = 0;
                  secondShip.length = 0;
                  thirdShip.length = 0;
                  fourthShip.length = 0;
                  init();
            }
      };

      if (allShips.length > 0) {
            allShips.length = 0;
            game.restart();
      } else {
            found = true;
      }

      if (found) {
            for (let i = 0; i < arr.length; i++) {
                  ships[i].locations = arr[i];
            }
      } else {
            return;
      }
}

document.addEventListener("DOMContentLoaded", function () {
      table_container = document.querySelector(".table_container");
      guessInput = document.getElementById("guess");
      confirm_bet = document.getElementById("confirm_bet");

      tr_table = document.createElement("tr");
      tr_table.classList.add("row");

      for (let i = 1; i <= 10; i++) {
            tr_table = document.createElement("tr");
            tr_table.classList.add("row");
            for (let j = 1; j <= 10; j++) {
                  td_table = document.createElement("td");
                  td_table.id = j;
                  tr_table.appendChild(td_table);
            }
            table_container.appendChild(tr_table);
      }
      tere = document.querySelectorAll(".row");
      tede = document.querySelectorAll(".row td");

      for (let i = 0; i <= 99; i++) {
            tede[i].id = i;
      }

      tede = [...tede];
      tere = [...tere];

      init();

      confirm_bet.addEventListener("click", userGuess);
      guessInput.addEventListener("keydown", function (e) {
            let key = e.which || e.keycode;
            if (key === 13) {
                  userGuess();
            }
      });
});