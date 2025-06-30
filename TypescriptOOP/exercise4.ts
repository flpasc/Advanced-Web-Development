class Employee {
	public name: string

	constructor(name: string) {
		this.name = name
	}

	getDetails(): string {
		return `${this.name}`
	}
}

class Manager extends Employee {
	department: string

	constructor(name: string, department: string) {
		super(name)
		this.department = department
	}
	getDetails(): string {
		return `${this.name} is head of: ${this.department}`
	}
}

// Test
const manager = new Manager('Alice', 'Engineering')
console.log(manager.getDetails())
