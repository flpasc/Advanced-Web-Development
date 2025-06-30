"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x = this.x += dx;
        this.y = this.y += dy;
    }
}
// Test
const point = new Point(0, 0);
point.move(5, 3);
console.log(point); // Should show updated x and y
