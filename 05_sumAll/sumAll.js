const sumAll = function (...numbers) {
  let sum = 0;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  if (min < 0) {
    return "ERROR";
  } else if (min % 1 != 0 || max % 1 != 0) {
    return "ERROR";
  } else if (numbers.some((num) => typeof num !== "number")) {
    return "ERROR";
  } else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
