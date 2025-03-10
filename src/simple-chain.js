const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr: [],
    getLength() {
        const result = this.arr.length;
        return result;
    },
    addLink(value = '') {
        this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        // `You can't remove incorrect link!`
        if (this.arr[position - 1] === undefined) {
            this.arr = [];
            throw new Error(`You can't remove incorrect link!`);
        } else {
            this.arr.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        const result = this.arr.join('~~');
        this.arr = [];
        return result;

    },
};

module.exports = {
    chainMaker
};