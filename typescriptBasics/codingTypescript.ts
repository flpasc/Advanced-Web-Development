// Coding 1
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const doubleArrayEntries = (numbersArray: number[]): number[] => {
	const doubledArray = numbersArray.map((number) => {
		return number * 2
	})
	return doubledArray
}
console.log(doubleArrayEntries(numbersArray))

// Coding 2
const wordArray: string[] = ['test', 'autotuer', 'baum', 'hundehalter', 'IHK']
const filterWordsByLength = (inputArray: string[], wordLength: number = 5) => {
	const filteredArray = inputArray.filter((word) => {
		return word.length > wordLength
	})
	return filteredArray
}
console.log(filterWordsByLength(wordArray))

// Coding 3
const numbersArrayToReduce: number[] = [
	12, 6789, 26, 27, 45, 6, 8, 4, 20, 74, 3456,
]
const sumArray = (numbersArray: number[]): number => {
	const sum = numbersArray.reduce((acc, curr) => acc + curr)
	return sum
}
console.log(sumArray(numbersArrayToReduce))

// Coding 4
const numbersArrayToSome: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const isOneNumberGreaterThan = (
	inputArray: number[],
	treshhold: number,
): boolean => {
	return inputArray.some((number) => number > treshhold)
}
console.log(isOneNumberGreaterThan(numbersArrayToSome, 10))
