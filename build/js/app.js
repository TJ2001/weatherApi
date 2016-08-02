(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Temperature(kelvin){
  this.kelvin = kelvin;
}

Temperature.prototype.getToF = function (){
  return Math.round((this.kelvin * (9/5)) - 459.67);
};

Temperature.prototype.getToC = function (){
  return Math.round((this.kelvin) - 273.15);
};

exports.temperatureModule = Temperature;

},{}],2:[function(require,module,exports){
var Temperature = require('./../js/weather.js').temperatureModule;
var apiKey = "4f60fe15304aa1ecd7d4083071586eb3";

$('#weatherLocation').click(function() {
  var city = $('#location').val();
  $('#location').val("");
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    console.log(JSON.stringify(response));
    currentKelvin = new Temperature(response.main.temp);
    $('.showWeather').html("The humidity in " + city + " is " + response.main.humidity + "%.");
    $('.showTemperature').html("The temperature in Celcius is " + currentKelvin.getToC() + "&deg;. <br>" + "The temperature in Fahrenheit is " + currentKelvin.getToF() + "&deg;.");
  });
  function update() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('h3#wind_speed').html("Current Speed: " + response.wind.speed);
    });
  }
  setInterval(update, 1000);
});

},{"./../js/weather.js":1}]},{},[2]);
