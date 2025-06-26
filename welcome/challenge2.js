"use strict";
// Example input
const maskedInput = 'Password';
const unmaskedPart = 4;
const maskify = (input) => {
    // Early return in case the input is to short
    if (input.length < unmaskedPart)
        return '';
    const visiblePart = input.slice(-unmaskedPart);
    const maskedPartLength = input.length - unmaskedPart;
    return '#'.repeat(maskedPartLength) + visiblePart;
};
console.log(maskify(maskedInput));
