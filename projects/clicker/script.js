/*jshint esversion: 6 */

let clicker = null;
let money = null;
let money_info = null;
let autoclicker_buy = null;
let speedup = null;
let x2 = null;

let element_lvl_autoclicker = null;
let element_lvl_speedup = null;
let element_lvl_x2 = null;

let rateAddon = 20;

let game_info = {
      money: 0,
};

let addons = {
      auto_clicks: 0,
      click_rate: 1000,
      click_increment: 1,
      autoclicker_lvl: 0,
      speedup_lvl: 0,
      x2_lvl: 0
};

const autoclicker_lvlArr = [1, 2, 5, 10, 20, 50, 100, 150, 200, 300, 400, 600, 800, 1000];
const speedup_lvlArr = [100, 200, 300, 500, 700, 1000, 1300, 1600, 2000, 2500];
const x2_lvlArr = [50, 100, 300, 600, 1000];

function autoclickerUp() {

      if (game_info.money < autoclicker_lvlArr[addons.autoclicker_lvl]) {
            console.log("za mało pieniędzy");
      } else {
            game_info.money -= autoclicker_lvlArr[addons.autoclicker_lvl];
            money.textContent = `Money ${game_info.money}`;
            addons.autoclicker_lvl++;
            element_lvl_autoclicker.textContent = `lvl ${addons.autoclicker_lvl}`;
            autoclicker_buy.value = `Buy for ${autoclicker_lvlArr[addons.autoclicker_lvl]}`;

            let t = setInterval(function () {
                  game_info.money += addons.auto_clicks;
                  money.textContent = `Money ${game_info.money}`;
            }, addons.click_rate);

            if (addons.auto_clicks > 0) {
                  clearInterval(t);
            }

            if (addons.autoclicker_lvl > autoclicker_lvlArr.length - 1) {
                  autoclicker_buy.value = "max";
                  autoclicker_buy.style.background = "gray";
                  addons.auto_clicks++;
                  autoclicker_buy.removeEventListener("click", autoclickerUp);
            } else {
                  addons.auto_clicks++;
            }
            money_info.textContent = `Money per ${addons.click_rate / 1000} sec: ${addons.auto_clicks}`;
      }
}

function speedupUp() {
      if (game_info.money < speedup_lvlArr[addons.speedup_lvl]) {
            console.log("za mało pieniędzy");
      } else {
            game_info.money -= speedup_lvlArr[addons.speedup_lvl];
            money.textContent = `Money ${game_info.money}`;
            addons.speedup_lvl++;
            element_lvl_speedup.textContent = `lvl ${addons.speedup_lvl}`;
            speedup_buy.value = `Buy for ${speedup_lvlArr[addons.speedup_lvl]}`;

            if (addons.speedup_lvl > speedup_lvlArr.length - 1) {
                  speedup_buy.value = "max";
                  speedup_buy.style.background = "gray";
                  addons.click_rate -= rateAddon;
                  speedup_buy.removeEventListener("click", speedupUp);
            } else {
                  addons.click_rate -= rateAddon;
            }
            money_info.textContent = `Money per ${addons.click_rate / 1000} sec: ${addons.auto_clicks}`;
      }
}

function x2Up() {
      if (game_info.money < speedup_lvlArr[addons.speedup_lvl]) {
            console.log("za mało pieniędzy");
      } else {
            game_info.money -= x2_lvlArr[addons.x2_lvl];
            money.textContent = `Money ${game_info.money}`;
            addons.x2_lvl++;
            element_lvl_x2.textContent = `lvl ${addons.x2_lvl}`;
            x2_buy.value = `Buy for ${x2_lvlArr[addons.x2_lvl]}`;

            if (addons.x2_lvl >= x2_lvlArr.length) {
                  x2_buy.value = "max";
                  x2_buy.style.background = "gray";
                  x2_buy.removeEventListener("click", x2Up);
            } else {
                  addons.click_increment *= 2;
            }
      }
}

function clickerPush() {
      game_info.money += addons.click_increment;
      money.textContent = `Money ${game_info.money}`;
}

document.addEventListener("DOMContentLoaded", function () {
      clicker = document.querySelector(".clicker");
      money = document.getElementById("money");
      money_info = document.getElementById("money_info");
      autoclicker_buy = document.getElementById("autoclicker_buy");
      speedup_buy = document.getElementById("speedup_buy");
      x2_buy = document.getElementById("x2_buy");
      element_lvl_autoclicker = document.querySelector(".element_lvl_autoclicker");
      element_lvl_speedup = document.querySelector(".element_lvl_speedup");
      element_lvl_x2 = document.querySelector(".element_lvl_x2");

      money.textContent = `Money ${game_info.money}`;
      autoclicker_buy.value = `Buy for ${autoclicker_lvlArr[addons.autoclicker_lvl]}`;
      speedup_buy.value = `Buy for ${speedup_lvlArr[addons.speedup_lvl]}`;
      x2_buy.value = `Buy for ${x2_lvlArr[addons.x2_lvl]}`;

      element_lvl_autoclicker.textContent = `lvl ${addons.autoclicker_lvl}`;
      element_lvl_speedup.textContent = `lvl ${addons.speedup_lvl}`;
      element_lvl_x2.textContent = `lvl ${addons.x2_lvl}`;

      money_info.textContent = `Money per ${addons.click_rate / 1000} sec: ${addons.auto_clicks}`;

      clicker.addEventListener("click", clickerPush);
      autoclicker_buy.addEventListener("click", autoclickerUp);
      speedup_buy.addEventListener("click", speedupUp);
      x2_buy.addEventListener("click", x2Up);
});
