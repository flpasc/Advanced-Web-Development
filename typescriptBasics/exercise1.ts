type User = {
	id: number
	name: string
	email: string
}

const getUserInfo = (user: User): string => {
	const { id, name, email } = user
	return `User${id}: ${name} (${email})`
}

const admin: User = {
	id: 1,
	name: 'AdminArno',
	email: 'admin@admin.com',
}

console.log(getUserInfo(admin))
