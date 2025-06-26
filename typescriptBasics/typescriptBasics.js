"use strict";
const age = 33;
for (let i = 0; i < age; i++) {
    console.log(i);
    if (age > 18)
        console.log('Is 18');
}
const score = 0;
if (score !== 0)
    console.log('Score is available');
if (score)
    console.log('Score is evaluated as truthy');
const username = '';
if (username)
    console.log('Username is available');
if (!username)
    console.log('Username is avaluated falsy');
const isAdmin = false;
if (isAdmin)
    console.log('isAdmin is evaluated truthly');
if (!isAdmin)
    console.log('isAdmin is evaluated falsy');
// Christmas Tree
const createChristmasTree = (n) => {
    let christmasTree = '';
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const stars = '*'.repeat(i * 2 - 1);
        christmasTree += spaces + stars + '\n';
    }
    return christmasTree;
};
console.log(createChristmasTree(10));
