let inputNumber = null;
let result = null;
let resultHidden = null
let primeArr = [];

function isPrime(num) {
   if (num < 2) return false;
   for (let i = 2; i < num; i++) {
      if (num % i == 0) {
         return false;
      }
   }
   return true;
}

document.addEventListener("DOMContentLoaded", function () {

   inputNumber = document.getElementById("inputNumber");
   result = document.getElementById("result");
   resultHidden = document.getElementById("resultHidden");

   inputNumber.addEventListener("keydown", function (e) {

      const keyCode = e.which | e.keyCode;

      const inputValue = inputNumber.value;

      result.innerHTML = "";
      resultHidden.innerHTML = "";

      if (keyCode === 13 && inputValue <= 70) {
         for (let i = 0; i < inputValue; i++) {
            if (isPrime(i)) {
               primeArr.push(i);
               console.log(i);
               inputNumber.value = "";
            }
         }
         resultHidden.innerHTML += primeArr + ", ";
         let a = resultHidden.innerHTML;
         a = a.replace(/,\s*$/, "");
         result.innerHTML = a;
      } else if (keyCode === 13 && inputValue > 70) {
         console.log("The number must be less or equal than 70");
      }
   });

});