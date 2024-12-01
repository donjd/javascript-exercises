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
  let total = 0;

  total = numbers.reduce((prev, next) => {
    return prev + next;
  });
  return total;
}

const multiply = function (numbers) {
  const total = numbers.reduce((prev, next) => {
    return prev * next;
  });
  return total;
};

const power = function () {};

const factorial = function () {};

// console.log(sum([]));

// // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
