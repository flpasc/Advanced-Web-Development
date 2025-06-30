"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        return `${this.name}`;
    }
}
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getDetails() {
        return `${this.name} is head of: ${this.department}`;
    }
}
// Test
const manager = new Manager('Alice', 'Engineering');
console.log(manager.getDetails());
