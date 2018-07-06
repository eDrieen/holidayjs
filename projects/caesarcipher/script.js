/*jshint esversion: 6 */

let plaintext = null;
let ciphertext = null;
let textString = null;
let amount = null;
let step = null;

let cipherAmount = 1;


function caesar(textString, amount) {

      if (isNaN(amount)) {
            alert("the value must be a number");
      }

      let result = "";


      for (let i = 0; i < textString.length; i++) {

            let currentLetter = textString[i];

            if (currentLetter.match(/[a-z]/i)) {
                  let letterCharCode = currentLetter.charCodeAt(0);

                  if (letterCharCode >= 65 && letterCharCode <= 90) {
                        let e = (((letterCharCode - 65 + amount) % 26) + 65);
                        currentLetter = String.fromCharCode(e);
                  } else if (letterCharCode >= 97 && letterCharCode <= 122) {
                        let e = (((letterCharCode - 97 + amount) % 26) + 97);
                        currentLetter = String.fromCharCode(e);
                  }
            }
            result += currentLetter;
      }
      ciphertext.value = result;
}

document.addEventListener("DOMContentLoaded", function () {

      plaintext = document.getElementById("plaintext");
      ciphertext = document.getElementById("ciphertext");
      amount = document.querySelector(".amount");
      step = document.querySelectorAll(".step span");

      for (let i = 0; i < step.length; i++) {
            step[i].addEventListener("click", function () {
                  textString = plaintext.value;
                  if (i == 0) {
                        cipherAmount--;
                        caesar(textString, cipherAmount);
                  } else {
                        cipherAmount++;
                        caesar(textString, cipherAmount);
                  }
                  amount.value = cipherAmount;
            });
      }

      amount.value = cipherAmount;

      plaintext.addEventListener("input", function () {
            textString = plaintext.value;
            caesar(textString, cipherAmount);
      });

});
