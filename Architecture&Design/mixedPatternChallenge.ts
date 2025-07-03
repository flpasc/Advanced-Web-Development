type CartItem = {
	name: string
	price: number
}

interface Subscriber {
	(): void
}

// Observer
class CartObserver {
	private subscribers: Subscriber[] = []

	subscribe(sub: Subscriber): void {
		this.subscribers.push(sub)
	}

	unsubscribe(sub: Subscriber): void {
		this.subscribers = this.subscribers.filter(
			(subscriber) => subscriber !== sub,
		)
	}

	notify(): void {
		this.subscribers.forEach((sub) => sub())
	}
}
//
//
// Factory
//
//
class Paypal {
	static pay(price: number): void {
		console.log(`Paying via Paypal: ${price}`)
	}
}

class Bank {
	static pay(price: number): void {
		console.log(`Paying via Bank: ${price}`)
	}
}

class Stripe {
	static pay(price: number): void {
		console.log(`Paying via Stripe: ${price}`)
	}
}

interface PaymentMethod {
	pay(price: number): void
}

type AvailablePaymentmethods = 'stripe' | 'paypal' | 'bank'

class PaymentProcessor {
	pay(method: AvailablePaymentmethods, price: number) {
		switch (method) {
			case 'paypal':
				return Paypal.pay(price)
			case 'stripe':
				return Stripe.pay(price)
			case 'bank':
				return Bank.pay(price)
		}
	}
}

const payment = new PaymentProcessor()
// Strategy
interface TaxMethod {
	getTax(prioce: number): number
}

class FlatTaxing implements TaxMethod {
	getTax(price: number): number {
		return price + 100
	}
}

class ProgressivTaxing implements TaxMethod {
	getTax(price: number): number {
		return price * 1.2
	}
}

class NoTaxing implements TaxMethod {
	getTax(price: number): number {
		return price
	}
}

class TaxCalc {
	constructor(private method: TaxMethod) {}
	calculate(price: number): number {
		return this.method.getTax(price)
	}
}
const flatTax = new TaxCalc(new FlatTaxing())

class ShoppingCart {
	private cart: CartItem[] = []
	private static instance: ShoppingCart | null = null
	private observer = new CartObserver()

	private constructor() {}

	static getInstance(): ShoppingCart {
		if (!this.instance) this.instance = new ShoppingCart()
		return this.instance
	}

	subscribe(fn: Subscriber): void {
		this.observer.subscribe(fn)
	}

	unsubscribe(fn: Subscriber): void {
		this.observer.unsubscribe(fn)
	}

	add(name: string, price: number): void {
		this.cart.push({ name: name, price: price })
		this.observer.notify()
	}

	remove(name: string): void {
		this.cart = this.cart.filter((item) => item.name !== name)
		console.log(`Removed ${name} from cart`)
		this.observer.notify()
	}

	listCart(): void {
		this.cart.forEach((item) => console.log(item))
	}

	getTotalPrice(): number {
		const total = this.cart.reduce(
			(sum, item) => sum + flatTax.calculate(item.price),
			0,
		)
		console.log('Cart total: ' + total)
		return total
	}
}

const cart = ShoppingCart.getInstance()
cart.subscribe(() => {
	console.log('[Observer] Cart was changed. New total: ' + cart.getTotalPrice())
})
cart.listCart()
cart.add('bread', 4)
cart.add('tomato', 2)
cart.add('tv', 100)
cart.add('water', 1)
cart.listCart()
cart.remove('water')
cart.listCart()
const totalCart = cart.getTotalPrice()
payment.pay('paypal', totalCart)
