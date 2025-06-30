"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    get details() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
// Test
const myCar = new Car('Toyota', 'Corolla', 2022);
console.log(myCar.details);
