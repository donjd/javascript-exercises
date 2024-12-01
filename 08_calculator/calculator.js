const add = function (...numbers) {
  const total = numbers.reduce((prev, next) => {
    return prev + next;
  });
  return total;
};

const subtract = function (...numbers) {
  const total = numbers.reduce((prev, next) => {
    return prev - next;
  });
  return total;
};

function sum(numbers) {
  if (numbers.length == 0) {
    return 0;
  } else {
    const total = numbers.reduce((prev, next) => {
      return prev + next;
    });
    return total;
  }
}

const multiply = function (numbers) {
  const total = numbers.reduce((prev, next) => {
    return prev * next;
  });
  return total;
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (number) {
  let total = 1;
  if (number == 0) {
    return 1;
  } else {
    for (i = 1; i <= number; i++) {
      total *= i;
    }
    return total;
  }
};

// // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
