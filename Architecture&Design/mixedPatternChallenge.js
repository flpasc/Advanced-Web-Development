"use strict";
// Observer
class CartObserver {
    constructor() {
        this.subscribers = [];
    }
    subscribe(sub) {
        this.subscribers.push(sub);
    }
    unsubscribe(sub) {
        this.subscribers = this.subscribers.filter((subscriber) => subscriber !== sub);
    }
    notify() {
        this.subscribers.forEach((sub) => sub());
    }
}
//
//
// Factory
//
//
class Paypal {
    static pay(price) {
        console.log(`Paying via Paypal: ${price}`);
    }
}
class Bank {
    static pay(price) {
        console.log(`Paying via Bank: ${price}`);
    }
}
class Stripe {
    static pay(price) {
        console.log(`Paying via Stripe: ${price}`);
    }
}
class PaymentProcessor {
    pay(method, price) {
        switch (method) {
            case 'paypal':
                return Paypal.pay(price);
            case 'stripe':
                return Stripe.pay(price);
            case 'bank':
                return Bank.pay(price);
        }
    }
}
const payment = new PaymentProcessor();
class FlatTaxing {
    getTax(price) {
        return price + 100;
    }
}
class ProgressivTaxing {
    getTax(price) {
        return price * 1.2;
    }
}
class NoTaxing {
    getTax(price) {
        return price;
    }
}
class TaxCalc {
    constructor(method) {
        this.method = method;
    }
    calculate(price) {
        return this.method.getTax(price);
    }
}
const flatTax = new TaxCalc(new FlatTaxing());
class ShoppingCart {
    constructor() {
        this.cart = [];
        this.observer = new CartObserver();
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new ShoppingCart();
        return this.instance;
    }
    subscribe(fn) {
        this.observer.subscribe(fn);
    }
    unsubscribe(fn) {
        this.observer.unsubscribe(fn);
    }
    add(name, price) {
        this.cart.push({ name: name, price: price });
        this.observer.notify();
    }
    remove(name) {
        this.cart = this.cart.filter((item) => item.name !== name);
        console.log(`Removed ${name} from cart`);
        this.observer.notify();
    }
    listCart() {
        this.cart.forEach((item) => console.log(item));
    }
    getTotalPrice() {
        const total = this.cart.reduce((sum, item) => sum + flatTax.calculate(item.price), 0);
        console.log('Cart total: ' + total);
        return total;
    }
}
ShoppingCart.instance = null;
const cart = ShoppingCart.getInstance();
cart.subscribe(() => {
    console.log('[Observer] Cart was changed. New total: ' + cart.getTotalPrice());
});
cart.listCart();
cart.add('bread', 4);
cart.add('tomato', 2);
cart.add('tv', 100);
cart.add('water', 1);
cart.listCart();
cart.remove('water');
cart.listCart();
const totalCart = cart.getTotalPrice();
payment.pay('paypal', totalCart);
