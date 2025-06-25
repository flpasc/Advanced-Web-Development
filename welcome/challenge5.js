var likeInput = ['Florian', 'Tom', 'Peter', 'Sam'];
var printLikedBy = function (input) {
    switch (true) {
        case input.length === 0:
            return 'no one likes this';
        case input.length === 1:
            return "".concat(input[0], "} likes this");
        case input.length === 2:
            return "".concat(input[0], " and ").concat(input[1], " like this");
        case input.length === 3:
            return "".concat(input[0], ", ").concat(input[1], " and ").concat(input[2], " like this");
        default:
            return "".concat(input[0], ", ").concat(input[1], " and ").concat(input.length - 2, " others like this");
    }
};
console.log(printLikedBy(likeInput));
