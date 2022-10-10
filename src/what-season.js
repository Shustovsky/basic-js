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

getSeason = (date) => {
    if (!date) return `Unable to determine the time of year!`;
    if (Object.getOwnPropertyNames(date).length > 0 || typeof date === 'number') throw new Error("Invalid date!");

    const spring = [2, 3, 4];
    const summer = [5, 6, 7];
    const autumn = [8, 9, 10];
    const winter = [11, 0, 1];

    if (spring.includes(date.getMonth())) return 'spring';
    if (summer.includes(date.getMonth())) return 'summer';
    if (autumn.includes(date.getMonth())) return 'autumn';
    if (winter.includes(date.getMonth())) return 'winter';
}
module.exports = {
    getSeason
};