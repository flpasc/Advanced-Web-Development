const menu: string[] = [
	'Burger',
	'Fries',
	'Chicken',
	'Pizza',
	'Sandwich',
	'Onionrings',
	'Milkshake',
	'Coke',
]

const formatOrder = (input: string) => {
	const result: string[] = []
	let i = 0
	while (i < input.length) {
		for (const item of menu) {
			if (input.startsWith(item.toLowerCase(), i)) {
				result.push(item)
				i += item.length
				break
			}
		}
	}

	return result
}

console.log(
	formatOrder(
		'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza',
	),
)
console.log(formatOrder('pizzapizzapizza'))
console.log(formatOrder('burgerfriesburgerfriesburgerfries'))
console.log(formatOrder('onionringsmilkshakeonionringsmilkshake'))
console.log(formatOrder('cokecokecoke'))
