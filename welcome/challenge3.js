var input2 = 'is2 Thi1s T4est 3a';
var sortByNumberInString = function (input) {
    var stringArray = input.split(' ');
    var sortedArray = [];
    stringArray.forEach(function (word) {
        var number = word.split('').find(function (char) { return char >= '0' && char <= '9'; });
        //Early return in case numer is undefined
        if (number === undefined)
            return;
        var index = parseInt(number) - 1;
        sortedArray[index] = word;
    });
    return sortedArray.join(' ');
};
console.log(sortByNumberInString(input2));
