/*jshint esversion: 6 */

let exchange_USD_full = null;
let exchange_USD = null;

let exchange_EUR_full = null;
let exchange_EUR = null;

let exchange_CHF_full = null;
let exchange_CHF = null;

let exchange_GBP_full = null;
let exchange_GBP = null;

let apiCall = null;

/* currencyData[0].rates[1].code/currency/mid */

function currencyCallback(currencyData) {

   let usdCallback = currencyData[0].rates[1];
   let eurCallback = currencyData[0].rates[7];
   let chfCallback = currencyData[0].rates[9];
   let gbpCallback = currencyData[0].rates[10];

   exchange_USD_full.textContent = usdCallback.currency;
   exchange_USD.textContent = "1 " + usdCallback.code + " = " + usdCallback.mid.toFixed(2) + " PLN";

   exchange_EUR_full.textContent = eurCallback.currency;
   exchange_EUR.textContent = "1 " + eurCallback.code + " = " + eurCallback.mid.toFixed(2) + " PLN";

   exchange_CHF_full.textContent = chfCallback.currency;
   exchange_CHF.textContent = "1 " + chfCallback.code + " = " + chfCallback.mid.toFixed(2) + " PLN";

   exchange_GBP_full.textContent = gbpCallback.currency;
   exchange_GBP.textContent = "1 " + gbpCallback.code + " = " + gbpCallback.mid.toFixed(2) + " PLN";

}

document.addEventListener("DOMContentLoaded", function () {
   apiCall = "https://api.nbp.pl/api/exchangerates/tables/a?format=json";
   $.getJSON(apiCall, currencyCallback);

   exchange_USD_full = document.getElementById("exchange_USD_full");
   exchange_USD = document.getElementById("exchange_USD");

   exchange_EUR_full = document.getElementById("exchange_EUR_full");
   exchange_EUR = document.getElementById("exchange_EUR");

   exchange_CHF_full = document.getElementById("exchange_CHF_full");
   exchange_CHF = document.getElementById("exchange_CHF");

   exchange_GBP_full = document.getElementById("exchange_GBP_full");
   exchange_GBP = document.getElementById("exchange_GBP");
});
