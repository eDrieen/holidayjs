/*jshint esversion: 6 */

let age = null;
let inputRadio = null;
let kg = null;
let cm = null;
let element_submit = null;
let userGender = null;
let result = null;
let bmr = null;
let cpm = null;
let outcome = null;
let commonPhysical = null;

document.addEventListener("DOMContentLoaded", function () {

      age = document.getElementById("age");
      inputRadio = document.querySelectorAll(".inputRadio");
      kg = document.getElementById("kg");
      cm = document.getElementById("cm");
      element_submit = document.getElementById("element_submit");
      outcome = document.getElementById("outcome");
      commonPhysical = document.getElementById("commonPhysical");

      element_submit.addEventListener("click", function () {

            if (age.value !== "" && kg.value !== "" && cm.value !== "") {
                  let userAge = age.value;
                  let userWeight = kg.value;
                  let userHeight = cm.value;
                  let userPhysical = commonPhysical.options[commonPhysical.selectedIndex].id;
                  for (let i = 0; i < inputRadio.length; i++) {
                        if (inputRadio[i].checked) {
                              userGender = inputRadio[i].id;
                        }
                  }
                  if (userGender == "male") {
                        result = (9.99 * userWeight) + (6.25 * userHeight) - (4.92 * userAge) + 5;
                  } else {
                        result = (9.99 * userWeight) + (6.25 * userHeight) - (4.92 * userAge) - 161;
                  }
                  bmr = parseInt(result) / 1000;

                  if (userPhysical == "lack") {
                        cpm = bmr * 1.2;
                  } else if (userPhysical == "low") {
                        cpm = bmr * 1.4;
                  } else if (userPhysical == "average") {
                        cpm = bmr * 1.6;
                  } else if (userPhysical == "high") {
                        cpm = bmr * 1.8;
                  } else if (userPhysical == "veryHigh") {
                        cpm = bmr * 2.2;
                  }

                  let cpmConvert = cpm.toFixed(3);

                  outcomeBmr.textContent = "BMR = " + bmr + " kcal/dzień";
                  outcomeCpm.textContent = "CPM = " + cpmConvert + " kcal/dzień";
            } else {
                  console.log("Podaj prawidłowe wartości");
            }


      });

});