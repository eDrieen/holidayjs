/*jshint esversion: 6 */

let number = 10;
let arr = [];
let resultArr = [];
let answer = null;

arr[0] = 1;
arr[1] = 1;

document.addEventListener("DOMContentLoaded", function () {
    answer = document.querySelector(".answer");

    for (let i = 2; i <= number; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }

    arr.forEach(num => {
        if (num % 2 === 0) {
            resultArr.push(num);
        }
    });

    const result = resultArr.reduce((a, b) => a + b, 0);

    answer.textContent = result;

});