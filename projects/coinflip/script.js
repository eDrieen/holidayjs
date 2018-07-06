/*jshint esversion: 6 */

let main_settings_number = null;
let main_settings_button = null;
let result = null;
let text_result = null;

let reverse = null;
let obverse = null;

let arr = [];

document.addEventListener("DOMContentLoaded", function () {
      main_settings_number = document.getElementById("main_settings_number");
      main_settings_button = document.getElementById("main_settings_button");
      result = document.getElementById("result");
      text_result = document.getElementById("text_result");

      main_settings_button.addEventListener("click", function () {

            if (arr.length > 0) {
                  for (let i = 0; i < arr.length; i++) {
                        if (arr[i] == 1) {
                              document.getElementById("1").remove();
                        } else {
                              document.getElementById("0").remove();
                        }
                  }
            }
            reverse = 0;
            obverse = 0;
            arr = [];

            let coins = main_settings_number.value;

            if (coins > 15 || coins < 0) {
                  alert("Number must be less or equal 15 and greater than 0");
            } else {

                  for (let i = 0; i < coins; i++) {
                        let mathr = Math.floor(Math.random() * 2) + 1;
                        arr.push(mathr);
                  }

                  for (let i = 0; i < arr.length; i++) {
                        if (arr[i] == 1) {
                              const reverseImg = new Image();
                              reverseImg.src = "reverse.jpg";
                              reverseImg.style.width = "100px";
                              reverseImg.id = "1";
                              result.appendChild(reverseImg);
                              reverse++;
                        } else {
                              const obverseImg = new Image();
                              obverseImg.src = "obverse.jpg";
                              obverseImg.style.width = "100px";
                              obverseImg.id = "0";
                              result.appendChild(obverseImg);
                              obverse++;
                        }
                  }
                  if(arr.length > 0) {
                        text_result.textContent = "reverse: " + reverse + " obverse: " + obverse;
                  } else {
                        text_result.textContent = "";
                  }
            }
      });

});