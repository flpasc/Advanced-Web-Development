interface Square {
	kind: 'square'
	size: number
}

interface Rectangle {
	kind: 'rectangle'
	width: number
	height: number
}

type Shape = Square | Rectangle

const getArea = (shape: Shape): number => {
	if (shape.kind === 'square') return shape.size * shape.size
	if (shape.kind === 'rectangle') return shape.width * shape.height

	throw new Error('Invalid shape')
}

const rectangle: Rectangle = {
	kind: 'rectangle',
	width: 10,
	height: 20,
}

const square: Square = {
	kind: 'square',
	size: 20,
}

console.log(getArea(rectangle))
console.log(getArea(square))
