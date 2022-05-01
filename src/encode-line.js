const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encode =[];
  for (let i=0; i<str.length;  i++) {
    if (str[i]==str[i+1] && str[i]!=str[i-1]) {
        const res = [...str.matchAll(str[i])];
        encode.push(res.length, res[0][0]);
    } else if (str[i]!=str[i+1] && str[i]!=str[i-1]) {
     encode.push(str[i]);
    };
  };
  return encode.join('')
};

module.exports = {
  encodeLine
};
