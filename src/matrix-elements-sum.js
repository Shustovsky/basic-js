const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let total = 0;

    for (i = 0; i < matrix[0].length; i++) {
        total += matrix[0][i];
    }

    for (i = 1; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] !== 0 || matrix[i - 1][j] === undefined) total += matrix[i][j];
        }
    }
    console.log(total);
    return total;
}

module.exports = {
    getMatrixElementsSum
};