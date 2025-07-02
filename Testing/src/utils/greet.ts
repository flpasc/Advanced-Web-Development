export const greet = (name: string): string => {
	return name.length === 0 ? `Hello!` : `Hello, ${name}!`
}
