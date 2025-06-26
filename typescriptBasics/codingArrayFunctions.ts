const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194]

const sortArray = (inputArray: number[]): number => {
	return [...inputArray]
		.sort((a, b) => b - a)
		.map((val) => val * val)
		.slice(4, -2)
		.filter((val) => val % 4 !== 0)
		.reduce((sum, val) => sum + val, 0)
}

console.log(sortArray(list))
