"use strict";
class Triangle {
    draw() {
        console.log('Drawing new triangle');
    }
}
class Circle {
    draw() {
        console.log('Drawing new circle');
    }
}
class Square {
    draw() {
        console.log('Drawing new Square');
    }
}
class ShapeFactory {
    static create(shape) {
        switch (shape) {
            case 'circle':
                return new Circle();
            case 'triangle':
                return new Triangle();
            case 'square':
                return new Square();
        }
    }
}
const circle = ShapeFactory.create('circle');
circle.draw(); // Output: Drawing Circle
const square = ShapeFactory.create('square');
square.draw(); // Output: Drawing Circle
const triangle = ShapeFactory.create('triangle');
triangle.draw(); // Output: Drawing Circle
