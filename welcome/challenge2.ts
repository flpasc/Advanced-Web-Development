const maskedInput: string = 'Password'

const maskify = (input: string): string => {
	if (input.length < 4) return ''

	const visiblePart = input.slice(-4)
	const maskedPartLength = input.length - 4
	return '#'.repeat(maskedPartLength) + visiblePart
}

console.log(maskify(maskedInput))
