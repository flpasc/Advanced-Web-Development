"use strict";
const likeInput = ['Florian', 'Tom', 'Peter', 'Sam'];
const printLikedBy = (input) => {
    switch (true) {
        case input.length === 0:
            return 'no one likes this';
        case input.length === 1:
            return `${input[0]}} likes this`;
        case input.length === 2:
            return `${input[0]} and ${input[1]} like this`;
        case input.length === 3:
            return `${input[0]}, ${input[1]} and ${input[2]} like this`;
        default:
            return `${input[0]}, ${input[1]} and ${input.length - 2} others like this`;
    }
};
console.log(printLikedBy(likeInput));
