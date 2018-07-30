/*jshint esversion: 6 */

let answer = null;
let number = 10001;
let arr = [];

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
    answer = document.querySelector(".answer");

    for (let i = 0; arr.length < number; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    answer.textContent = arr[arr.length - 1];
});