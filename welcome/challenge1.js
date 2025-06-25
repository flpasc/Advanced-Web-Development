// Given Users array
var usersMeta = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    },
];
// Function to sort users in status groups depending on online status and last activity
var getAllUserStatus = function (usersMeta) {
    return usersMeta.reduce(function (acc, user) {
        if (user.status === 'online' && user.lastActivity > 100) {
            acc.away.push(user.username);
        }
        else if (user.status === 'online') {
            acc.online.push(user.username);
        }
        else if (user.status === 'offline') {
            acc.offline.push(user.username);
        }
        return acc;
    }, { online: [], offline: [], away: [] });
};
console.log(getAllUserStatus(usersMeta));
