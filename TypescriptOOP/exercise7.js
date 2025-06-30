"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} makes WOOF`;
    }
}
// Test
const dog = new Dog('Rex');
console.log(dog.makeSound()); // "Rex says Woof!"
