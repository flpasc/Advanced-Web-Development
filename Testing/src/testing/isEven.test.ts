import { isEven } from '../math/isEven'

test('returns true for even numbers', () => {
	expect(isEven(4)).toBe(true)
})

test('returns false for odd numbers', () => {
	expect(isEven(3)).toBe(false)
})
