const removeFromArray = function (array, ...itemsToRemove) {
  const filteredArray = array.filter((element) => element == itemsToRemove);
  return filteredArray;
};

// const removeFromArray = function (array, ...itemsToRemove) {
//   for (i = 0; i < itemsToRemove.length - 1; i++) {
//     const index = array.indexOf(itemsToRemove);
//     array.splice(index, 1);
//   }
//   return array;
// };

// const removeFromArray = function (array, itemsToRemove) {
//   const index = array.indexOf(itemsToRemove);
//   array.splice(index, 1);
//   return array;
// };

// Do not edit below this line
module.exports = removeFromArray;
