const ftoc = function (fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9;
  let formattedResult = Math.round(result * 10) / 10
  // return Math.round((result + Number.EPSILON) * 100) / 100;
  return formattedResult;
};

const ctof = function (celsius) {
  let result = celsius * 9 / 5 + 32;
  let formattedResult = Math.round(result * 10) / 10
  // return Math.round((result + Number.EPSILON) * 100) / 100;
  return formattedResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
