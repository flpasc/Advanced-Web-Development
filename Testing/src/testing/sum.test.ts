import { sum } from '../math/sum'

describe('add()', () => {
	test('Add two positive numbers', () => {
		expect(sum(1, 2)).toBe(3)
	})

	test('adds one negative number', () => {
		expect(sum(-4, 5)).toBe(1)
	})

	test('adds zero', () => {
		expect(sum(0, 0)).toBe(0)
	})
})
