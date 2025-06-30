"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super('Rectangle');
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    getArea() {
        return 3.14 * this.radius ** 2;
    }
}
// Test
const shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach((shape) => console.log(`${shape.name} area: ${shape.getArea()}`));
