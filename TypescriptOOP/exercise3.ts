class UserProfile {
	private _email: string

	constructor(email: string) {
		this._email = email
	}

	get email(): string {
		return this._email
	}

	set email(email: string) {
		if (!email.includes('@')) throw new Error('Wrong Email')
		this._email = email
	}
}

// Test
const user = new UserProfile('john@example.com')
console.log(user.email) // Should return valid email
user.email = 'wrongemail' // Should throw an error
