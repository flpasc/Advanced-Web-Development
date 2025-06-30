"use strict";
class BankAccount {
    constructor(accountNumber, balance) {
        this._balance = balance;
        this.accountNumber = accountNumber;
    }
    deposit(amount) {
        this._balance = this._balance += amount;
    }
    withdraw(amount) {
        this._balance = this._balance -= amount;
    }
    get balance() {
        return this._balance;
    }
}
// Test
const account = new BankAccount('123ABC', 500);
account.deposit(200);
account.withdraw(100);
console.log(account.balance); // Should log: 600
