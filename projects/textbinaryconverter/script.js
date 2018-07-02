/*jshint esversion: 6 */

let inputText = null;
let inputUnicode = null;
let inputBinary = null;

document.addEventListener("DOMContentLoaded", function () {
   inputText = document.getElementById("inputText");
   inputUnicode = document.getElementById("inputUnicode");
   inputBinary = document.getElementById("inputBinary");

   inputText.addEventListener("input", function () {
      if (inputText.value === "") {
         inputUnicode.value = "";
         inputBinary.value = "";
      } else {
         let valueText = inputText.value;

         inputUnicode.value = valueText.split("").map(vT => vT.charCodeAt(0)).join(" ");

         let valueUnicode = inputUnicode.value;

         inputBinary.value = valueUnicode.split(" ").map(vU => Number(vU).toString(2)).join(" ");
      }

   });

   inputBinary.addEventListener("input", function () {
      if (inputBinary.value === "") {
         inputText.value = "";
         inputUnicode.value = "";
      } else {
         let valueBinary = inputBinary.value;

         inputUnicode.value = valueBinary.split(" ").map(vB => Number.parseInt(vB, 2)).join(" ");

         let valueUnicode = inputUnicode.value;

         inputText.value = valueUnicode.split(" ").map(vU => String.fromCharCode(vU)).join("");
      }

   });


});
