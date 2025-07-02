import { divide } from '../math/divide'

test('divide 10 by 2', () => {
	expect(divide(10, 2)).toBe(5)
})

test('divide 7 by -1', () => {
	expect(divide(7, -1)).toBe(-7)
})

test('divide 0 by 10', () => {
	expect(divide(0, 10)).toBe(0)
})

test('divide 1 by 0', () => {
	expect(() => divide(1, 0)).toThrow('Cannot divide by zero')
})
