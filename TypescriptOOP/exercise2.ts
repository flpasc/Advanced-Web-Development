class BankAccount {
	private _balance: number
	public readonly accountNumber: string

	constructor(accountNumber: string, balance: number) {
		this._balance = balance
		this.accountNumber = accountNumber
	}

	public deposit(amount: number): void {
		this._balance = this._balance += amount
	}

	public withdraw(amount: number): void {
		this._balance = this._balance -= amount
	}
	public get balance(): number {
		return this._balance
	}
}

// Test
const account = new BankAccount('123ABC', 500)
account.deposit(200)
account.withdraw(100)
console.log(account.balance) // Should log: 600
