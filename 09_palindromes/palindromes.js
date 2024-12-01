const palindromes = function (string) {
  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const acceptableChars = ALPHABET.join(DIGITS);
  let chars = string
    .toLowerCase()
    .split("")
    .filter((element) => acceptableChars.includes(element))
    .reduce((prev, curr) => prev + curr);
  let reversedChars = string
    .toLowerCase()
    .split("")
    .filter((element) => acceptableChars.includes(element))
    .reverse()
    .reduce((prev, curr) => prev + curr);

  console.log(chars);
  console.log(reversedChars);
  if (chars == reversedChars) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("a car, a man, a maraca"));
