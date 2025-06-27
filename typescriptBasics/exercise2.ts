type Status = 'active' | 'inactive' | 'pending'

interface Account {
	username: string
	status: Status
	lastLogin?: Date
}

const isActive = (account: Account): boolean => {
	const { username, status, lastLogin } = account
	return status === 'active'
}

const Peter: Account = {
	username: 'Petern',
	status: 'inactive',
}

console.log(isActive(Peter))
