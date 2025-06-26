"use strict";
const input2 = 'is2 Thi1s T4est 3a';
const sortByNumberInString = (input) => {
    const stringArray = input.split(' ');
    const sortedArray = [];
    stringArray.forEach((word) => {
        const number = word.split('').find((char) => char >= '0' && char <= '9');
        //Early return in case numer is undefined
        if (number === undefined)
            return;
        const index = parseInt(number) - 1;
        sortedArray[index] = word;
    });
    return sortedArray.join(' ');
};
console.log(sortByNumberInString(input2));
