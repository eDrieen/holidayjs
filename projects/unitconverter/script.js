/*jshint esversion: 6 */

let input = null;
let output = null;
let inputUnit = null;
let outputUnit = null;

const units = {
      mm: 0.001,
      cm: 0.01,
      dm: 0.1,
      m: 1,
      km: 1000
};

function checkNum() {
      if(Number.isNaN(input.value)) {
            showError();
      } else {
            convert();
      }
}

function showError() {
      console.log("Wpisz poprawną wartość");
      input.value = "";
}

function convert() {
      const unitIn = units[inputUnit.value];
      const unitOut = units[outputUnit.value];

      output.value = (input.value * (unitIn / unitOut))
}

document.addEventListener("DOMContentLoaded", function() {
      input = document.getElementById("input");
      output = document.getElementById("output");
      inputUnit = document.getElementById("inputUnit");
      outputUnit = document.getElementById("outputUnit");

      inputUnit.addEventListener("change", checkNum);
      outputUnit.addEventListener("change", checkNum);
      input.addEventListener("input", checkNum);
});
