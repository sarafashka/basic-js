const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  const arr = [];
  for (let item of domains) {
    let i = item.length;
    arr.push(item);
    while (item.lastIndexOf('.', i) != -1) {
        i = item.lastIndexOf('.', i) - 1;
        arr. push(item.slice(i+1))
    };
  };
  arr.forEach(item => {
    const key = '.'.concat( item.split('.').reverse().join('.').replace( /\.$/gi , "" ) );
    dns[key] ? dns[key] =  dns[key] + 1: dns[key] = 1;  
  });
  return dns
};

module.exports = {
  getDNSStats
};
