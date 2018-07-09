/*jshint esversion: 6 */

let kg = null;
let cm = null;
let element_submit = null;
let bmi = null;
let container = null;
let outcome = null;
let outcome_text = null;
let calculateAgain = null;

document.addEventListener("DOMContentLoaded", function () {
      kg = document.getElementById("kg");
      cm = document.getElementById("cm");
      element_submit = document.getElementById("element_submit");
      container = document.querySelector(".container");
      outcome = document.querySelector(".result");
      outcome_text = document.getElementById("outcome_text");
      calculateAgain = document.getElementById("calculateAgain");

      element_submit.addEventListener("click", function () {

            if (kg.value !== "" && cm.value !== "") {
                  let weight = kg.value;
                  let height = cm.value / 100;

                  let value = "";

                  let result = (weight) / (height * height);

                  bmi = result.toFixed(2);

                  if (bmi < 16) {
                        value = "wygłodzenie";
                  } else if (bmi >= 16 && bmi <= 16.99) {
                        value = "wychudzenie";
                  } else if (bmi >= 17 && bmi <= 18.49) {
                        value = "niedowaga";
                  } else if (bmi >= 18.5 && bmi <= 24.99) {
                        value = "wartość prawidłowa";
                  } else if (bmi >= 25 && bmi <= 29.99) {
                        value = "nadwaga";
                  } else if (bmi >= 30 && bmi <= 34.99) {
                        value = "I stopień otyłości";
                  } else if (bmi >= 35 && bmi <= 39.99) {
                        value = "II stopień otyłości";
                  } else {
                        value = "otyłość skrajna";
                  }

                  outcome_text.textContent = "BMI: " + bmi + " - " + value;

                  container.style.display = "none";
                  kg.value = "";
                  cm.value = "";
                  outcome.style.display = "block";

                  calculateAgain.addEventListener("click", function () {
                        outcome_text.textContent = "";
                        outcome.style.display = "none";
                        container.style.display = "block";
                  });
            } else {
                  console.log("Podaj odpowiednie wartości!");
            }
      });
});