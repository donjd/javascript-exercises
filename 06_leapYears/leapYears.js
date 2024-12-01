const leapYears = function (year) {
  switch (true) {
    case year % 400 == 0:
      return true;
      break;
    case year % 4 == 0:
      switch (true) {
        case year % 100 == 0:
          return false;
          break;
        default:
          return true;
          break;
      }
    default:
      return false;
      break;
  }
};

// Do not edit below this line
module.exports = leapYears;
