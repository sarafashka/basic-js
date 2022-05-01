const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let countOfCats = 0;
  const cat = '^^';
  for (let arr of backyard) {
     arr.forEach(element => {
       if (element == cat) {
         countOfCats++
       };
     });
  };
  return countOfCats;
};

module.exports = {
  countCats
};

