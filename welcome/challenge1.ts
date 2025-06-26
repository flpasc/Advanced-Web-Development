// Typescript schemas
type User = {
	username: string
	status: 'online' | 'offline'
	lastActivity: number
}

// Given Users array
const usersMeta: User[] = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10,
	},
	{
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22,
	},
	{
		username: 'Bob',
		status: 'online',
		lastActivity: 104,
	},
]

type UserStatusGroups = {
	online: string[]
	offline: string[]
	away: string[]
}

// Function to sort users in status groups depending on online status and last activity
const getAllUserStatus = (usersMeta: User[]): UserStatusGroups =>
	usersMeta.reduce<UserStatusGroups>(
		(acc, user) => {
			if (user.status === 'online' && user.lastActivity > 100) {
				acc.away.push(user.username)
			} else if (user.status === 'online') {
				acc.online.push(user.username)
			} else if (user.status === 'offline') {
				acc.offline.push(user.username)
			}
			return acc
		},
		{ online: [], offline: [], away: [] },
	)

console.log(getAllUserStatus(usersMeta))
