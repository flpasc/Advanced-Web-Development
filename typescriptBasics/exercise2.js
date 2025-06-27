"use strict";
const isActive = (account) => {
    const { username, status, lastLogin } = account;
    return status === 'active';
};
const Peter = {
    username: 'Petern',
    status: 'inactive',
};
console.log(isActive(Peter));
