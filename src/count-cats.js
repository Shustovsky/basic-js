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
countCats = (arr) => {
    let result = arr.map(item => item.filter(i => i === '^^')).join(',').split(',').filter(i => i !== '');
    return result.length;
}
module.exports = {
    countCats
};