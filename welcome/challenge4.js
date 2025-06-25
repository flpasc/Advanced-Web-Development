var input = ['f', 'g', 'h', 'j', 'k'];
var findMissingLetter = function (input) {
    for (var i = 0; i < input.length - 1; i++) {
        var currentCharCode = input[i].charCodeAt(0);
        var nectCharCode = input[i + 1].charCodeAt(0);
        if (nectCharCode !== currentCharCode + 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return null;
};
console.log(findMissingLetter(input));
