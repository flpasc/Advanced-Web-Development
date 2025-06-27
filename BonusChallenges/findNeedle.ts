const findNeedle = (input: string[]): string => {
	const needle: string = 'needle'

	const index = input.findIndex((item) => item === needle)
	return index >= 0 ? `Needle found at ${index}` : `Needle not found`
}

console.log(findNeedle(['hay', 'junk', 'random', 'needle', 'more junk']))
console.log(findNeedle(['needle']))
console.log(findNeedle(['foo', 'bar', 'baz', 'needle', 'qux']))
console.log(findNeedle(['one', 'two', 'three', 'four', 'needle']))
console.log(findNeedle(['junk', 'more junk', 'needle', 'even more junk']))
