/*jshint esversion: 6 */

let currency_BTC = null;
let currency_BCC = null;
let currency_LTC = null;
let currency_ETH = null;

let btcVwap = null;
let bccVwap = null;
let ltcVwap = null;
let ethVwap = null;

document.addEventListener("DOMContentLoaded", function () {
   const apiCallBTC = "https://bitbay.net/API/Public/BTCPLN/ticker.json";
   const apiCallBCC = "https://bitbay.net/API/Public/BCCPLN/ticker.json";
   const apiCallLTC = "https://bitbay.net/API/Public/LTCPLN/ticker.json";
   const apiCallETH = "https://bitbay.net/API/Public/ETHPLN/ticker.json";

   currency_BTC = document.getElementById("currency_BTC");
   currency_BCC = document.getElementById("currency_BCC");
   currency_LTC = document.getElementById("currency_LTC");
   currency_ETH = document.getElementById("currency_ETH");

   $.when($.getJSON(apiCallBTC), $.getJSON(apiCallBCC), $.getJSON(apiCallLTC), $.getJSON(apiCallETH)).then(function (btc, bcc, ltc, eth) {

      btcVwap = btc[0].vwap;
      bccVwap = bcc[0].vwap;
      ltcVwap = ltc[0].vwap;
      ethVwap = eth[0].vwap;

      currency_BTC.textContent = "1 BTC = " + btcVwap + " PLN";
      currency_BCC.textContent = "1 BCC = " + bccVwap + " PLN";
      currency_LTC.textContent = "1 LTC = " + ltcVwap + " PLN";
      currency_ETH.textContent = "1 ETH = " + ethVwap + " PLN";
   });

});