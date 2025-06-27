interface Profile {
	contact: {
		email?: string
	}
}

const getEmail = (profile: Profile): string => {
	if (profile.contact.email) return profile.contact.email
	return 'No email provided'
}

const person: Profile = {
	contact: {
		email: 'blablabla@gmx.de',
	},
}

const person2: Profile = {
	contact: {},
}

console.log(getEmail(person))
console.log(getEmail(person2))
