class Car {
	make: string
	model: string
	year: number

	constructor(make: string, model: string, year: number) {
		this.make = make
		this.model = model
		this.year = year
	}

	get details() {
		return `${this.year} ${this.make} ${this.model}`
	}
}

// Test
const myCar = new Car('Toyota', 'Corolla', 2022)
console.log(myCar.details)
