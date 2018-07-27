/*jshint esversion: 6 */

let container = null;
let status = null;
let btns = null;
let calculator_status = "OFF";

function btnClick() {

    const resultText = document.getElementById("resultText");
    const e = eval;

    let pushed = this.textContent;

    if(pushed == "=") {
        resultText.textContent = e(resultText.textContent);
    } else if(pushed == "C") {
        resultText.textContent = "0";
    } else {
        if (resultText.innerHTML == "0") {
            resultText.innerHTML = pushed;

        } else {
            resultText.innerHTML += pushed;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    container = document.getElementById("container");
    status = document.getElementById("status");
    btns = document.querySelectorAll(".num");

    btns = [...btns];

    btns.forEach(btn => {
        btn.addEventListener("click", btnClick);
    });

    status.addEventListener("click", function () {

        if (calculator_status == "ON") {

            status.innerHTML = "OFF";
            calculator_status = "OFF";
            container.className = "disabled";
            status.className = "off";
            resultText.innerHTML = "";

        } else if (calculator_status == "OFF") {

            status.innerHTML = "ON";
            calculator_status = "ON";
            container.removeAttribute("class");
            status.removeAttribute("class");
            status.className = "on";
            resultText.innerHTML = "0";

        }
    });
});