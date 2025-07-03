interface TaxCalculatorSchema {
	getTax(price: number): number
}

class TaxCalculator {
	constructor(private strategy: TaxCalculatorSchema) {}

	calculate(price: number) {
		return this.strategy.getTax(price)
	}
}

class FlatTax implements TaxCalculatorSchema {
	getTax(price: number) {
		return price + 100
	}
}

class NoTax implements TaxCalculatorSchema {
	getTax(price: number) {
		return price
	}
}

class ProgressivTax implements TaxCalculatorSchema {
	getTax(price: number) {
		return price * 1.2
	}
}

const calculatorFlatTax = new TaxCalculator(new FlatTax())
console.log(calculatorFlatTax.calculate(1000)) // $100 flat tax

const calculatorNoTax = new TaxCalculator(new NoTax())
console.log(calculatorNoTax.calculate(1000)) // $100 flat tax

const calculatorProgressivTax = new TaxCalculator(new ProgressivTax())
console.log(calculatorProgressivTax.calculate(1000)) // $100 flat tax
