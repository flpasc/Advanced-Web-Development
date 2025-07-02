import { capitalize } from './capitalize'

test('capitalizes a single lowercase word', () => {
	expect(capitalize('hello')).toBe('Hello')
})

test('capitalizes a single lowercase letter', () => {
	expect(capitalize('l')).toBe('L')
})

test('capitalizes "" ', () => {
	expect(capitalize('')).toBe('')
})

test('capitalizes "javaScript" ', () => {
	expect(capitalize('javaScript')).toBe('JavaScript')
})

test('capitalizes " " ', () => {
	expect(capitalize(' ')).toBe('')
})

test('capitalizes a single lowercase word', () => {
	expect(capitalize(' test')).toBe('Test')
})
