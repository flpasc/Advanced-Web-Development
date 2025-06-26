// Example input
const maskedInput: string = 'Password'
const unmaskedPart = 4

const maskify = (input: string): string => {
	// Early return in case the input is to short
	if (input.length < unmaskedPart) return ''

	const visiblePart = input.slice(-unmaskedPart)
	const maskedPartLength = input.length - unmaskedPart
	return '#'.repeat(maskedPartLength) + visiblePart
}

console.log(maskify(maskedInput))
