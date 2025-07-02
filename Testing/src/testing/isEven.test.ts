import { isEven } from '../math/isEven'

test('Is 2 even', () => {
	expect(isEven(2)).toBe(true)
})

test('is 3 even', () => {
	expect(isEven(3)).toBe(false)
})

test('is 0 even', () => {
	expect(isEven(0)).toBe(true)
})

test('is -4 even', () => {
	expect(isEven(-4)).toBe(true)
})

test('is 2.5 even', () => {
	expect(isEven(2.5)).toBe(false)
})
