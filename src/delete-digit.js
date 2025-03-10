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
deleteDigit = (num) => {
    let arr = (num + '').split('');
    let max = 0;
    for (i = 0; i < arr.length; i++) {
        let compare = arr.concat();
        compare.splice(i, 1)
        let result = +compare.join('');
        if (result > max) {
            max = result;
        }
    }
    return max;
}
module.exports = {
    deleteDigit
};