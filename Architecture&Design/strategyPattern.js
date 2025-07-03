"use strict";
class TaxCalculator {
    constructor(strategy) {
        this.strategy = strategy;
    }
    calculate(price) {
        return this.strategy.getTax(price);
    }
}
class FlatTax {
    getTax(price) {
        return price + 100;
    }
}
class NoTax {
    getTax(price) {
        return price;
    }
}
class ProgressivTax {
    getTax(price) {
        return price * 1.2;
    }
}
const calculatorFlatTax = new TaxCalculator(new FlatTax());
console.log(calculatorFlatTax.calculate(1000)); // $100 flat tax
const calculatorNoTax = new TaxCalculator(new NoTax());
console.log(calculatorNoTax.calculate(1000)); // $100 flat tax
const calculatorProgressivTax = new TaxCalculator(new ProgressivTax());
console.log(calculatorProgressivTax.calculate(1000)); // $100 flat tax
