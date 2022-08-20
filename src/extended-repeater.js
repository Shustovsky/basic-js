const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = '';
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition;
    typeof options.addition === 'boolean' || options.addition === null ? addition = String(options.addition) : addition = (options.addition) || '';
    let addRepeat = options.additionRepeatTimes || 1;
    let addSeparator = options.additionSeparator || '|';
    let calcAddition = '';

    for (i = 0; i < addRepeat; i++) {
        i !== addRepeat - 1 ? calcAddition += addition + addSeparator : calcAddition += addition;
    }

    for (i = 0; i < repeatTimes; i++) {

        i !== repeatTimes - 1 ? result += str + calcAddition + separator : result += str + calcAddition;
    }
    console.log(result);
    return result;
}

module.exports = {
    repeater
};