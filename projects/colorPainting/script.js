/*jshint esversion: 6 */

let elementContainer = null;
let element = null;
let getElement = null;
let colorPick = null;

document.addEventListener("DOMContentLoaded", function () {
   elementContainer = document.getElementById("elementContainer");
   colorElement = document.querySelectorAll(".colorElement");


   for (let i = 0; i <= 159; i++) {
      element = document.createElement("div");
      element.classList.add("element");
      elementContainer.appendChild(element);
   }

   [].forEach.call(colorElement, function (cEl, i) {
      cEl.addEventListener("click", function () {
         colorPick = cEl.id;
      });
   });

   getElement = document.querySelectorAll(".element");

   [].forEach.call(getElement, function (el, i) {
      el.addEventListener("click", function () {
         el.style.background = colorPick;
      });
   });
});