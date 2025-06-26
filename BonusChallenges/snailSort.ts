const snail1: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const snail2: number[][] = [
	[1, 2],
	[3, 4],
]

const snail3: number[][] = [[1]]

const snail4: number[][] = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
]

const snailSort = (array: number[][]) => {
	const arrayLength = array.length
	const result: number[] = []

	for (let i = 0; i < arrayLength; i++) {
		array[i].forEach((val) => {
			result.push(val)
		})
	}

	return `${arrayLength}`
}

console.log(snailSort(snail1))
