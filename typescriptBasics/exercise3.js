"use strict";
const getLength = (input) => {
    //According to task but unsafe method:
    // if (typeOf inpuo === 'string') return (input as string).length
    // else return input as number
    if (typeof input === 'string')
        return input.length;
    else
        return input;
};
console.log(getLength(9));
console.log(getLength('Ofen'));
