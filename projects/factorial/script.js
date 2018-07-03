/*jshint esversion: 6 */

let factorInput = null;
let result = null;

function factorial(n) {
   let num = null;
   if (n == 0 || n == 1) {
      num = 1;
   } else {
      num = 1;
      for (let i = n; i > 1; i--) {
         num = num * i;
      }
   }
   return num;
}

document.addEventListener("DOMContentLoaded", function () {
   factorInput = document.getElementById("factorInput");
   result = document.getElementById("result");

   factorInput.addEventListener("input", function () {

      const returnNumber = factorial(factorInput.value);

      if (factorInput.value != "") {
         result.textContent = returnNumber;
      } else {
         result.textContent = "";
      }
   });
});