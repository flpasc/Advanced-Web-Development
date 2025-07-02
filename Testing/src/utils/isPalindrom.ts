export const isPalindrom = (value: string): boolean => {
	return value.split('').reverse().join('') === value
}
