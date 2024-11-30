const sumAll = function (...numbers) {
  let sum = 0;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  //if min is a negative number
  if (min < 0) {
    return "ERROR";
  }

  //if some of the array elements in ...numbers are not numbers
  else if (numbers.some((num) => typeof num !== "number")) {
    return "ERROR";
  }

  //if some of the array elements in ...numbers are not integers
  else if (numbers.some((num) => !Number.isInteger(num))) {
    return "ERROR";
  }

  //run code if no errors
  else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
