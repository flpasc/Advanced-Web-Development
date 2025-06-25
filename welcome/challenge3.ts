const input2: string = 'is2 Thi1s T4est 3a'

const sortByNumberInString = (input: string): string => {
	const stringArray: string[] = input.split(' ')
	const sortedArray: string[] = []

	stringArray.forEach((word: string) => {
		const number = word.split('').find((char) => char >= '0' && char <= '9')

		//Early return in case numer is undefined
		if (number === undefined) return

		const index: number = parseInt(number) - 1
		sortedArray[index] = word
	})

	return sortedArray.join(' ')
}

console.log(sortByNumberInString(input2))
