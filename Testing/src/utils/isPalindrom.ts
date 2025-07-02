export const isPalindrom = (value: string): boolean => {
	return value.trim().split('').reverse().join('') === value
}
