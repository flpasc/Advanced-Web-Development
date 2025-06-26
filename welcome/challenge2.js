// Example input
var maskedInput = 'Password';
var maskify = function (input) {
    // Early return in case the input is to short
    if (input.length < 4)
        return '';
    var visiblePart = input.slice(-4);
    var maskedPartLength = input.length - 4;
    return '#'.repeat(maskedPartLength) + visiblePart;
};
console.log(maskify(maskedInput));
