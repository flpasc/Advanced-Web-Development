"use strict";
const applyOperator = (a, b, operator) => {
    return operator(a, b);
};
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log(applyOperator(10, 20, sum));
console.log(applyOperator(10, 20, substract));
console.log(applyOperator(10, 20, mult));
console.log(applyOperator(10, 20, divide));
