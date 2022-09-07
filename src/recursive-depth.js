const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let result = 0;
        for (let item of arr) {
            if (Array.isArray(item)) {
                let innerMassiveDepth = this.calculateDepth(item);
                if (innerMassiveDepth > result) {
                    result = innerMassiveDepth;
                    result
                }
            }
        }
        return result + 1;
    }
}

module.exports = {
    DepthCalculator
};


/* class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result++
                i = 0;
                arr = arr.flat();
            }
        }

        
        return result;
    }
} */