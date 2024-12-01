const convertToCelsius = function (tempInF) {
  let celcius = ((tempInF - 32) * 5) / 9;
  return Number(celcius.toFixed(1));
  // console.log(celcius.toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  let fahrenheit = tempInC * (9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
  // console.log(fahrenheit.toFixed(1));
};

convertToCelsius(0);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
