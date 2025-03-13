const convertToCelsius = function(tempInFarenheit) {
  return Math.round( ((tempInFarenheit - 32) * 5/9)*10 )/10;
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round( ((tempInCelsius * 9/5) + 32 )*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
