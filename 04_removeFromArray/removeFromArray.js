const removeFromArray = function (array, ...itemsToRemove) {
  const filteredArray = array.filter(
    (element) => !itemsToRemove.includes(element)
  );
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
