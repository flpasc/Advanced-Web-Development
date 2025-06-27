"use strict";
const getEmail = (profile) => {
    if (profile.contact.email)
        return profile.contact.email;
    return 'No email provided';
};
const person = {
    contact: {
        email: 'blablabla@gmx.de',
    },
};
const person2 = {
    contact: {},
};
console.log(getEmail(person));
console.log(getEmail(person2));
