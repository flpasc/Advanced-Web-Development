abstract class Shape {
	abstract getArea(): number
	name: string

	constructor(name: string) {
		this.name = name
	}
}

class Rectangle extends Shape {
	height: number
	width: number

	constructor(height: number, width: number) {
		super('Rectangle')
		this.height = height
		this.width = width
	}

	getArea(): number {
		return this.height * this.width
	}
}

class Circle extends Shape {
	radius: number

	constructor(radius: number) {
		super('Circle')
		this.radius = radius
	}
	getArea(): number {
		return 3.14 * this.radius ** 2
	}
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)]
shapes.forEach((shape) => console.log(`${shape.name} area: ${shape.getArea()}`))
