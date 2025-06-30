"use strict";
class MathHelper {
    static circleArea(radius) {
        return this.pi * radius ** 2;
    }
}
MathHelper.pi = 3.14;
// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5
