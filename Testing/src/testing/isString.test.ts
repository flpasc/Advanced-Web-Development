import { isString } from '../isString'

test('is "hello" string', () => {
	expect(isString('hello')).toBe(true)
})

test('is 123 string', () => {
	expect(isString(123)).toBe(false)
})

test('is {} string', () => {
	expect(isString({})).toBe(false)
})

test('is "" string', () => {
	expect(isString('')).toBe(true)
})

test('is undefined string', () => {
	expect(isString(undefined)).toBe(false)
})
