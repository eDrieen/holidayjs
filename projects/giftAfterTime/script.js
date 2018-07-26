/*jshint esversion: 6 */

let button_time = null;
let result = null;
let hoursv = null;
let minutesv = null;
let secondsv = null;

let dateInterval = null;
let eventYear = null;
let eventMonth = null;
let eventDay = null;
let eventHour = null;
let eventMinute = null;
let eventSecond = null;

function startTimer() {
    dateInterval = setInterval(checkTime, 1000);
}

function checkTime(y, m, d, h, min, s) {

    if(y !== undefined || m !== undefined || d !== undefined || h !== undefined || min !== undefined || s !== undefined) {
        eventYear = y;
        eventMonth = m;
        eventDay = d;
        eventHour = h;
        eventMinute = min;
        eventSecond = s;
        startTimer();
    }

    let eventDate = new Date(eventYear, eventMonth, eventDay, eventHour, eventMinute, eventSecond);

    let eventTime = eventDate.getTime();

    let date = new Date();

    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth() + 1;
    let nowDay = date.getDate();
    let nowHour = date.getHours();
    let nowMinute = date.getMinutes();
    let nowSecond = date.getSeconds();

    let currentTime = date.getTime();

    let remainingTime = eventTime - currentTime;

    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;

      hoursv.textContent = hours;
      minutesv.textContent = minutes;
      secondsv.textContent = seconds;

    if((nowHour >= eventHour) &&(nowMinute >= eventMinute) && (nowSecond >= eventSecond)) {
        hoursv.textContent = "00";
        minutesv.textContent = "00";
        secondsv.textContent = "00";
        clearInterval(dateInterval);
        result.textContent = "Odbierz nagrodę!";
        button_time.disabled = false;
    }

}

function getCoins() {
    result.textContent = "";
    this.disabled = true;
    let date = new Date();

    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds() + 5;

    checkTime(y, m, d, h, min, s);
}

document.addEventListener("DOMContentLoaded", function() {
    button_time = document.getElementById("button_time");
    result = document.getElementById("result");
    hoursv = document.getElementById("hours");
    minutesv = document.getElementById("minutes");
    secondsv = document.getElementById("seconds");

    result.textContent = "Odbierz nagrodę!";
        hoursv.textContent = "00";
        minutesv.textContent = "00";
        secondsv.textContent = "00";

    button_time.addEventListener("click", getCoins);
});