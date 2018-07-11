/*jshint esversion: 6 */

let dateInterval = null;

function countdown() {

      let daysValue = document.getElementById("days");
      let hoursValue = document.getElementById("hours");
      let minutesValue = document.getElementById("minutes");
      let secondsValue = document.getElementById("seconds");

      let now = new Date();
      let eventDate = new Date(2018, 07, 28);

      let nowYear = now.getFullYear();
      let nowMonth = now.getMonth();
      let nowDays = now.getDay();

      let eventYear = eventDate.getFullYear();
      let eventMonth = eventDate.getMonth();
      let eventDays = eventDate.getDay();

      let currentTime = now.getTime();
      let eventTime = eventDate.getTime();

      let remainingTime = eventTime - currentTime;

      let s = Math.floor(remainingTime / 1000);
      let m = Math.floor(s / 60);
      let h = Math.floor(m / 60);
      let d = Math.floor(h / 24);

      h %= 24;
      m %= 60;
      s %= 60;

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      if ((nowYear >= eventYear) && (nowMonth >= eventMonth) && (nowDays >= eventDays)) {
            d = "0";
            h = "00";
            m = "00";
            s = "00";
            clearInterval(dateInterval);
      }

      daysValue.textContent = d;
      hoursValue.textContent = h;
      minutesValue.textContent = m;
      secondsValue.textContent = s;


}
dateInterval = setInterval(countdown, 1000);