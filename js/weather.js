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
