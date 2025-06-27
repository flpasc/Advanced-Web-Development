const applyOperator = (
	a: number,
	b: number,
	operator: (x: number, b: number) => number,
): number => {
	return operator(a, b)
}

const sum = (a: number, b: number) => a + b
const substract = (a: number, b: number) => a - b
const mult = (a: number, b: number) => a * b
const divide = (a: number, b: number) => a / b

console.log(applyOperator(10, 20, sum))
console.log(applyOperator(10, 20, substract))
console.log(applyOperator(10, 20, mult))
console.log(applyOperator(10, 20, divide))
