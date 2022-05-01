const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  let sum =0;
  const count = matrix[0].length;
  for (let item of matrix) {
    for (let el of item) {
      arr.push(el)
    };
  };
  for (let i=0; i<arr.length; i++) {
    if (arr[i-count] != 0) {
      sum += arr[i]
    };
  };
  return sum
};

module.exports = {
  getMatrixElementsSum
};
