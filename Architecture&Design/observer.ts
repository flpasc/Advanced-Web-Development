type Observer = (n: number) => void

class StockTicker {
	private subscribers: Observer[] = []
	private price: number = 0

	subscribe(observer: Observer) {
		this.subscribers.push(observer)
	}

	private notify(): void {
		this.subscribers.forEach((observer) => observer(this.price))
	}

	unsubscribe(observer: Observer) {
		this.subscribers = this.subscribers.filter((obs) => obs !== observer)
	}

	setPrice(price: number): void {
		this.price = price
		this.notify()
	}
}

const ticker = new StockTicker()

const broker1: Observer = (price: number) => {
	console.log(`New stock price is ${price}}`)
}

const broker2: Observer = (price: number) => {
	console.log(`Stock changed to ${price}`)
}

ticker.subscribe(broker1)
ticker.subscribe(broker2)

let current = 500
const interval = setInterval(() => {
	ticker.setPrice(current++)
	if (current > 510) ticker.unsubscribe(broker1)
	if (current > 520) clearInterval(interval)
}, 1000)
