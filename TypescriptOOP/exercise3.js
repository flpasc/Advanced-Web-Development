"use strict";
class UserProfile {
    constructor(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        if (!email.includes('@'))
            throw new Error('Wrong Email');
        this._email = email;
    }
}
// Test
const user = new UserProfile('john@example.com');
console.log(user.email); // Should return valid email
user.email = 'wrongemail'; // Should throw an error
