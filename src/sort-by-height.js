const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
sortByHeight = (arr) => {
    let result = [];
    let minusIndex = []

    arr.forEach((item, index) => {
        if (item === -1) {
            minusIndex.push(index);
        } else {
            result.push(item)
        }
    })

    result.sort((a, b) => a - b);

    for (let item of minusIndex) {
        result.splice(item, 0, -1);
    }

    return result;
}

module.exports = {
    sortByHeight
};