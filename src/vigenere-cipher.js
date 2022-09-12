const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(val) {
        this.constructor = val;
    }
    encrypt(message, key) {
        if (!message || !key) throw new Error(`Incorrect arguments!`);

        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let result = [];


        while (message.length > key.length) key += key;
        key = key.toUpperCase();

        let counterNotLetter = 0;
        for (let i = 0; i < message.length; i++) {
            let alphabetCopy = alphabet.slice();
            let searchIndexToChange = alphabetCopy.indexOf(key[i - counterNotLetter]);
            let cut = (alphabetCopy.splice(0, searchIndexToChange));
            alphabetCopy = alphabetCopy.concat(cut);

            let index = alphabet.indexOf(message[i].toUpperCase());
            if (index !== -1) {
                result.push(alphabetCopy[index]);
            } else {
                result.push(message[i])
                counterNotLetter++;
            }
        }
        return this.constructor === false ? result.reverse().join('') : result.join('');
    }


    decrypt(message, key) {
        if (!message || !key) throw new Error(`Incorrect arguments!`);

        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let result = [];

        while (message.length > key.length) key += key;
        key = key.toUpperCase();

        let counterNotLetter = 0;

        for (let i = 0; i < message.length; i++) {
            let alphabetCopy = alphabet.slice();
            let searchIndexToChange = alphabetCopy.indexOf(key[i - counterNotLetter]);
            let cut = (alphabetCopy.splice(0, searchIndexToChange));
            alphabetCopy = alphabetCopy.concat(cut);
            let index = alphabetCopy.indexOf(message[i].toUpperCase()); /////ПОМЕНЯЛ МЕСТАМИ
            if (index !== -1) {
                result.push(alphabet[index]); /////ПОМЕНЯЛ МЕСТАМИ
            } else {
                result.push(message[i])
                counterNotLetter++;
            }

        }
        return this.constructor === false ? result.reverse().join('') : result.join('');
    }

}

module.exports = {
    VigenereCipheringMachine
};