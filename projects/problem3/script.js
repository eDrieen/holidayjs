/*jshint esversion: 6 */

let answer = null;
let number = 100;
let sumOfTheSquares = [];
let squareOfTheSum = [];

function numSquare(num) {
    return num * num;
}

document.addEventListener("DOMContentLoaded", function () {
    answer = document.querySelector(".answer");

    for (let i = 1; i <= number; i++) {
        const element = numSquare(i);
        sumOfTheSquares.push(element);
        squareOfTheSum.push(i);
    }

    const resultFirst = sumOfTheSquares.reduce((a, b) => a + b, 0);
    const resultSecond = squareOfTheSum.reduce((a, b) => a + b, 0);

    const getSum = numSquare(resultSecond);

    const numbers = getSum - resultFirst;

    answer.textContent = numbers;

});