interface Animal {
	name: string
	makeSound(): string
}

class Dog implements Animal {
	name: string

	constructor(name: string) {
		this.name = name
	}
	makeSound() {
		return `${this.name} makes WOOF`
	}
}

// Test
const dog = new Dog('Rex')
console.log(dog.makeSound()) // "Rex says Woof!"
