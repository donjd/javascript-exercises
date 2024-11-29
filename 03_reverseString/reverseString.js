const reverseString = function (input) {
  chars = input.split("");
  reversedString = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversedString += chars[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
