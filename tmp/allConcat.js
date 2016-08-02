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
