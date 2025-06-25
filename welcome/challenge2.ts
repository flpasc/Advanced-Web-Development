// Example input
const maskedInput: string = 'Password'

const maskify = (input: string): string => {
	// Early return in case the input is to short
	if (input.length < 4) return ''

	const visiblePart = input.slice(-4)
	const maskedPartLength = input.length - 4
	return '#'.repeat(maskedPartLength) + visiblePart
}

console.log(maskify(maskedInput))
