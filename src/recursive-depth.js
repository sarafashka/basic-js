const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return this.rec(arr, 1)
  }

  rec(arr, deep) {
    let deepMax = deep;
    for (let item of arr) {
      let elementDeep = deep;
      if (Array.isArray(item)) {
        elementDeep += this.rec(item, deep)
      };
      if(elementDeep > deepMax) {
        deepMax = elementDeep
      }
    };

    return deepMax
  }
}
   


module.exports = {
  DepthCalculator
};
