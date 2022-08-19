const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
createDreamTeam = (arr) => {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                console.log(arr[i]);
                arr[i] = arr[i].split('');
                for (j = 0; j < arr[i].length; j++) {
                    if (arr[i][0] === ' ') {
                        arr[i].shift();
                    }
                }
                arr[i] = arr[i].join('');
                newArr.push(arr[i]);
            } else {
                continue;
            }
        }
        let map = newArr.map(item => item[0].toUpperCase()).sort().join('');
        return map;
    } else {
        return false;
    }

}
module.exports = {
    createDreamTeam
};