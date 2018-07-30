/*jshint esversion: 6 */

let number = 1000;
let arr = [];
let answer = null;

function multiples(num) {
    if (num === 0) {
        return false;
    }
    if (num % 3 === 0) {
        return true;
    } else if (num % 5 === 0) {
        return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    answer = document.querySelector(".answer");

    for (let i = 0; i < number; i++) {
        if (multiples(i)) {
            arr.push(i);
        }
    }

    const reduce = arr.reduce((a, b) => a + b, 0);

    answer.textContent = reduce;

});