// Shape Factory
interface Shape {
	draw(): void
}

type ShapeType = 'circle' | 'square' | 'triangle'

class Triangle implements Shape {
	draw(): void {
		console.log('Drawing new triangle')
	}
}

class Circle implements Shape {
	draw() {
		console.log('Drawing new circle')
	}
}

class Square implements Shape {
	draw() {
		console.log('Drawing new Square')
	}
}

class ShapeFactory {
	static create(shape: ShapeType): Shape {
		switch (shape) {
			case 'circle':
				return new Circle()
			case 'triangle':
				return new Triangle()
			case 'square':
				return new Square()
		}
	}
}

const circle = ShapeFactory.create('circle')
circle.draw() // Output: Drawing Circle

const square = ShapeFactory.create('square')
square.draw() // Output: Drawing Circle

const triangle = ShapeFactory.create('triangle')
triangle.draw() // Output: Drawing Circle
