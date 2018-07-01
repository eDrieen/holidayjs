/*jshint esversion: 6 */

let cityName = null;
let getWeather = null;
let weatherInCountry = null;

let apiCall = null;

let title = null;
let iconInfo = null;
let description = null;
let time = null;
let iconImg = null;
let iconTemp = null;

let imagex = null;

let tempInfo = null;

document.addEventListener("DOMContentLoaded", function () {
   cityName = document.getElementById("cityName");
   getWeather = document.getElementById("getWeather");
   weatherInCountry = document.getElementById("weatherInCountry");
   title = document.getElementById("title");
   iconInfo = document.getElementById("iconInfo");
   description = document.getElementById("description");
   time = document.getElementById("time");
   iconImg = document.getElementById("iconImg");
   iconTemp = document.getElementById("iconTemp");
   imagex = document.getElementById("imagex");

   tempInfo = document.createElement("span");

   getWeather.addEventListener("click", function () {

      apiCall = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName.value +'&appid=67d20ab634afb1a96d7b05640015ff7a';

      $.getJSON(apiCall, weatherCallback);

      function weatherCallback(weatherData) {

         let infoName = weatherData.name;
         let infoCountry = weatherData.sys.country;
         title.textContent = "Weather in " + infoName + ", " + infoCountry;

         imagex.src = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';

         let tempConvert = weatherData.main.temp - 273.15;
         let temp = parseInt(tempConvert);
         tempInfo.textContent = temp + "°C";
         iconTemp.appendChild(tempInfo);

         let infoDescription = weatherData.weather[0].description;
         description.textContent = infoDescription;

      }

   });

});
