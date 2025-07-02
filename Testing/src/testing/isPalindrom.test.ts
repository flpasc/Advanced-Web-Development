import { isPalindrom } from '../utils/isPalindrom'

describe('Test if word is a palindrom', () => {
	test('Is "level" palindrom', () => {
		expect(isPalindrom('level')).toBe(true)
	})

	test('Is "test" palindrom', () => {
		expect(isPalindrom('test')).toBe(false)
	})

	test('Is "madam" palindrom', () => {
		expect(isPalindrom('madam')).toBe(true)
	})

	test('Is "" palindrom', () => {
		expect(isPalindrom('')).toBe(true)
	})
})
