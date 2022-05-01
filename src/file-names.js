const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renames = names.map(item => item);

  let count = 0;
  let count2 = 0;
    for (let i = 1; i < renames.length; i++) {
      for (let k = 0; k < i; k++ ) {
        if (renames[i] == renames[k]) {
          if (renames[k]==names[k]) {
            count ++
            renames.splice(i,1,`${renames[i]}(${count})`);
         
          } else {
            count2 ++
            renames.splice(i,1,`${renames[i]}(${count2})`);              
          }
        }
      }
  }
  return renames
};

module.exports = {
  renameFiles
};
