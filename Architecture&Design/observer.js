"use strict";
class StockTicker {
    constructor() {
        this.subscribers = [];
        this.price = 0;
    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }
    notify() {
        this.subscribers.forEach((observer) => observer(this.price));
    }
    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
    }
    setPrice(price) {
        this.price = price;
        this.notify();
    }
}
const ticker = new StockTicker();
const broker1 = (price) => {
    console.log(`New stock price is ${price}}`);
};
const broker2 = (price) => {
    console.log(`Stock changed to ${price}`);
};
ticker.subscribe(broker1);
ticker.subscribe(broker2);
let current = 500;
const interval = setInterval(() => {
    ticker.setPrice(current++);
    if (current > 510)
        ticker.unsubscribe(broker1);
    if (current > 520)
        clearInterval(interval);
}, 1000);
