export const capitalize = (value: string): string => {
	const trimmedValue = value.trim()

	if (trimmedValue.length === 0) return ''

	const firstLetter = trimmedValue[0].toUpperCase()
	const restLetters = trimmedValue.slice(1)

	return `${firstLetter}${restLetters}`
}
