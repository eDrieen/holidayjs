/*jshint esversion: 6 */


let inputNumber = null;
let result = null;
let arr = [];

arr[0] = 0;
arr[1] = 1;

document.addEventListener("DOMContentLoaded", function () {

   inputNumber = document.getElementById("inputNumber");
   result = document.getElementById("result");

   inputNumber.addEventListener("keydown", function (e) {

      const keyCode = e.which | e.keyCode;

      const inputValue = inputNumber.value;

      result.innerHTML = "";

      if (keyCode === 13 && inputValue <= 70) {
         for (let i = 2; i <= inputValue; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
            console.log(arr[i]);
            result.innerHTML += arr[i] + ", ";
            inputNumber.value = "";
         }
      } else if (keyCode === 13 && inputValue > 70) {
         console.log("The number must be less or equal than 70");
      }
   });

});