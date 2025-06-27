"use strict";
const getUserInfo = (user) => {
    const { id, name, email } = user;
    return `User${id}: ${name} (${email})`;
};
const admin = {
    id: 1,
    name: 'AdminArno',
    email: 'admin@admin.com',
};
console.log(getUserInfo(admin));
