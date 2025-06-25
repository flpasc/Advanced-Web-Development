var maskedInput = 'Password';
var maskify = function (input) {
    if (input.length < 4)
        return '';
    var visiblePart = input.slice(-4);
    var maskedPartLength = input.length - 4;
    return '#'.repeat(maskedPartLength) + visiblePart;
};
console.log(maskify(maskedInput));
