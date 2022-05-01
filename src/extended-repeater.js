const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
  const arr = [];

  let strNew = '';
  let repeat = 0;
  let separator = '';
  let addition = '';
  let additionRepeat = 0;
  let additionSeparator = '';

  str === null ? strNew = 'null' : strNew = str;
  options.repeatTimes == undefined ? repeat = 1 : repeat = options.repeatTimes;
  options.separator == undefined ? separator = '+' : separator = options.separator;
  options.addition == undefined ? addition = '' : addition = options.addition.toString();
  options.addition === null ? addition = 'null' : addition = options.addition;
  options.additionRepeatTimes == undefined ? additionRepeat = 1 : additionRepeat = options.additionRepeatTimes;
  options.additionSeparator == undefined ? additionSeparator = '|' : additionSeparator = options.additionSeparator;

  for (let i = 0; i < repeat; i++) {
    arr.push(strNew);
    for (let j =0; j < additionRepeat; j++) {
      arr.push(addition);
      if (j < additionRepeat - 1) {
        arr.push(additionSeparator);
      };
    };
    if (i < repeat - 1) {
      arr.push(separator);
    };
  };
  return arr.join('')
};

module.exports = {
  repeater
};
