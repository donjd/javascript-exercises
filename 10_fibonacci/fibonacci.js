const fibonacci = function (index) {
  let sum = 0;
  let sequence = [0, 1];
  if (index < 0) {
    return "OOPS";
  } else {
    for (let i = 1; i <= index; i++) {
      let last = sequence.at(-1);
      let secondLast = sequence.at(-2);
      sum = last + secondLast;
      sequence.push(sum);
    }
  }
  return sequence[Number(index)];
};

// Do not edit below this line
module.exports = fibonacci;
