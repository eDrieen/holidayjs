/*jshint esversion: 6 */

function clock() {

      let hours = document.getElementById("hours");
      let minutes = document.getElementById("minutes");
      let seconds = document.getElementById("seconds");
      let periods = document.getElementById("periods");

      let now = new Date();

      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      let hourPeriods = null;

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      hourPeriods = (h > 12) ? "PM" : "AM";

      hours.textContent = h + " :";
      minutes.textContent = m + " :";
      seconds.textContent = s + "";
      periods.textContent = hourPeriods;

      setTimeout(clock, 1000);
}

clock();