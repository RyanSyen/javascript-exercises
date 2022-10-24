const add = function (value1, value2) {
  if (Number.isInteger(value1) && Number.isInteger(value2)) {
    return value1 + value2;
  } else {
    return 'ERROR';
  }
};

const subtract = function (value1, value2) {
  if (Number.isInteger(value1) && Number.isInteger(value2)) {
    return value1 - value2;
  } else {
    return 'ERROR';
  }
};

const sum = function (arr) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function (arr) {
  return arr.reduce((partialSum, a) => partialSum * a, 1);
};

const power = function (value, power) {
  if (Number.isInteger(value) && Number.isInteger(power)) {
    return Math.pow(value, power);
  } else {
    return 'ERROR';
  }

};

const factorial = function (num) {
  if (Number.isInteger(num)) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  } else {
    return 'ERROR';
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
