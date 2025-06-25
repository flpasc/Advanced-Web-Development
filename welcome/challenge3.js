var input2 = 'is2 Thi1s T4est 3a'
var sortByNumberInString = function (input) {
	var stringArray = input.split(' ')
	var sortedArray = []
	stringArray.forEach((word) => {
		var number = word.split('').find((char) => {
			return char >= '0' && char <= '9'
		})
		var index = parseInt(number) - 1
		sortedArray[index] = word
	})
	return sortedArray.join(' ')
}
console.log(sortByNumberInString(input2))
