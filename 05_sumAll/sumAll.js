const sumAll = function (...numbers) {
  const sum = numbers.reduce((previous, next) => previous + next);
  console.log(sum);
};

sumAll(1, 4);

// Do not edit below this line
// module.exports = sumAll;
