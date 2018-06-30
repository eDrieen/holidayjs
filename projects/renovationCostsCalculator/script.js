/*jshint esversion: 6 */

let functionContainer = null;
let pageTitle = null;
let inputUserSurface = null;
let supMain = null;

let elementContainer = null;
let element = null;
let checkboxElement = null;
let title = null;
let content = null;
let inputContentCost = null;
let addonInput = null;

let finalContainer = null;
let finalValue = null;

let chckbx = null;
let surface = null;

let userSurface = null;
let cost = null;

let arr = [0, 0];
let textArr = ["Płytki na podłogę", "Fuga na podłogę"];
const add = (a, b) => a + b;
let sum = null;
let elementCost = null;

let hr = null;

function getElementValue(surface, cost) {
   return surface * cost;
}

function getFinalValue(sum) {
   finalValue.value = sum;
}

function addMoney(i) {
   const inputContentCost = document.getElementById(i);
   surface = document.querySelector(".inputUserSurface");

   cost = inputContentCost.value;
   elementCost = getElementValue(userSurface, cost);
   arr[i] = elementCost;
   sum = arr.reduce(add);
   getFinalValue(sum);

   inputContentCost.addEventListener("input", function () {
      cost = inputContentCost.value;

      elementCost = getElementValue(userSurface, cost);
      arr[i] = elementCost;
      sum = arr.reduce(add);
      getFinalValue(sum);
      console.log(arr);
   });

   surface.addEventListener("input", function () {
      userSurface = inputUserSurface.value;

      elementCost = getElementValue(userSurface, cost);
      arr[i] = elementCost;
      sum = arr.reduce(add);
      getFinalValue(sum);
      console.log(arr);
   });

}

function removeMoney(i) {
   content.style.display = "none";
   arr.fill(0, i, i + 1);
   elementCost = getElementValue(userSurface, cost);
   sum = arr.reduce(add);
   getFinalValue(sum);
}

document.addEventListener("DOMContentLoaded", function () {
   functionContainer = document.getElementById("functionContainer");
   elementContainer = document.getElementById("elementContainer");
   finalContainer = document.getElementById("finalContainer");

   inputUserSurface = document.createElement("input");
   inputUserSurface.setAttribute("type", "number");
   inputUserSurface.setAttribute("value", 25);
   inputUserSurface.classList.add("inputUserSurface");

   functionContainer.appendChild(inputUserSurface);

   hr = document.createElement("hr");

   addonInput = document.createElement("span");
   addonInput.classList.add("add-onInput");
   addonInput.textContent = "m";

   supMain = document.createElement("sup");
   supMain.textContent = 2;

   addonInput.appendChild(supMain);
   functionContainer.appendChild(addonInput);
   functionContainer.appendChild(hr);

   for (let i = 0; i <= 1; i++) {

      element = document.createElement("div");
      element.classList.add("element");

      checkboxElement = document.createElement("input");
      checkboxElement.setAttribute("type", "checkbox");
      checkboxElement.classList.add("checkboxElement");

      element.appendChild(checkboxElement);

      title = document.createElement("div");
      title.classList.add("title");
      title.textContent = textArr[i];

      element.appendChild(title);

      content = document.createElement("div");
      content.classList.add("content");

      inputContentCost = document.createElement("input");
      inputContentCost.setAttribute("type", "number");
      inputContentCost.setAttribute("value", 45);
      inputContentCost.classList.add("inputContentCost");
      inputContentCost.id = i;

      content.appendChild(inputContentCost);

      addonInput = document.createElement("span");
      addonInput.classList.add("add-onInput");
      addonInput.textContent = "zł";

      content.appendChild(addonInput);

      element.appendChild(content);
      elementContainer.appendChild(element);

   }

   finalValue = document.createElement("input");
   finalValue.setAttribute("type", "number");
   finalValue.classList.add("finalValue");

   finalContainer.appendChild(finalValue);

   userSurface = inputUserSurface.value;

   chckbx = document.querySelectorAll(".checkboxElement");

   [].forEach.call(chckbx, function (el, i) {

      el.addEventListener("change", function () {
         const checkThis = this;
         const elem = checkThis.parentElement;
         content = elem.querySelector(".content");
         const titleElem = el.nextElementSibling;

         if (el.checked) {
            addMoney(i);
            content.style.display = "block";
            titleElem.style.color = "#fe6a11";
         } else {
            removeMoney(i);
            content.style.display = "none";
            titleElem.style.color = "black";
         }

      });

   });





});