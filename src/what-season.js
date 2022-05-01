const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
    /*throw new NotImplementedError('Not implemented');*/
    /* 'Unable to determine the time of year!' */
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  };
  if (typeof date.getMonth !== 'function'){
    throw new Error ("Invalid date!");
  };
  function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }
  if (getClass(date) == Date) {
    throw new Error ("Invalid date!");
  };
  if (date.hasOwnProperty('getMonth')) {
    throw new Error ("Invalid date!");
  };
  if (date.hasOwnProperty('toString')) {
    throw new Error ("Invalid date!");
  };


  const month = date.getMonth();
  if (month <0 || month >=12) {
    throw new Error ("Invalid date!");
  };
  if (month>=2 && month<5) {
    return 'spring'
  };
  if (month>=5 && month<8) {
    return 'summer'
  };
  if (month>=8 && month<11) {
    return 'autumn'
  };
  if (month>=11 || (month>=0 && month<2)) {
    return 'winter'
  };
};

module.exports = {
  getSeason
};
