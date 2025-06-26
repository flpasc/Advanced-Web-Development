"use strict";
const input = ['f', 'g', 'h', 'j', 'k'];
const findMissingLetter = (input) => {
    for (let i = 0; i < input.length - 1; i++) {
        const currentCharCode = input[i].charCodeAt(0);
        const nectCharCode = input[i + 1].charCodeAt(0);
        if (nectCharCode !== currentCharCode + 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return null;
};
console.log(findMissingLetter(input));
