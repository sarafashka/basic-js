const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arrWithMines =[];
  for(let i = 0; i < matrix.length; i++) {
    arrWithMines.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      arrWithMines[i].push(0)
    };
  };
  matrix.forEach((item,i)=> {
    item.forEach((el, k) => {
      if(el) {
        if (matrix[i + 1] !== undefined) {
          matrix[i+1][k] ? arrWithMines[i+1][k] = 1 : arrWithMines[i+1][k] ++
        };
        if (matrix[i-1] !== undefined) {
          matrix[i-1][k]  ? arrWithMines[i-1][k] = 1 : arrWithMines[i-1][k] ++
        };
        if (matrix[i][k+1] !== undefined) {
          matrix[i][k+1] ? arrWithMines[i][k+1] = 1 : arrWithMines[i][k+1] ++
        };
        if (matrix[i][k-1] !== undefined) {
          matrix[i][k-1] ? arrWithMines[i][k-1] = 1 : arrWithMines[i][k-1] ++
        };
        if (matrix[i + 1][k + 1] !== undefined) {
          matrix[i+1][k+1] ? arrWithMines[i+1][k+1] = 1 : arrWithMines[i+1][k+1] ++
        };
        if (matrix[i+1][k-1] !== undefined) {
          matrix[i+1][k-1] ? arrWithMines[i+1][k-1] = 1 : arrWithMines[i+1][k-1] ++
        };
        if (matrix[i-1] !== undefined) {
          matrix[i-1][k-1] ? arrWithMines[i-1][k-1] = 1 : arrWithMines[i-1][k-1] ++
        };
        if (matrix[i-1] !== undefined) {
        matrix[i-1][k+1] ? arrWithMines[i-1][k+1] = 1 : arrWithMines[i-1][k+1] ++
        };
      };
    });
  });
  return arrWithMines

};

module.exports = {
  minesweeper
};
