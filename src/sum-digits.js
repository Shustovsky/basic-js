const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
getSumOfDigits = (n) => {
    let str = String(n);

    let check = () => {
        let result = 0;
        for (i = 0; i < str.length; i++) {
            result += +str[i];
        }
        str = String(result);
    }
    while (str.length > 1) {
        check(str)
    }

    return +str;
}

module.exports = {
    getSumOfDigits
};