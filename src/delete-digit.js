const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  const arrNoDigit = []
  for (let i = 0; i <= arr.length; i++) {
    arr = n.toString().split('')
    arr.splice(i, 1)
    arrNoDigit.push(arr.join(''));
  }
  return arrNoDigit.map(item => Number(item)).sort((a,b) => a - b).reverse()[0];
}

module.exports = {
  deleteDigit
};
