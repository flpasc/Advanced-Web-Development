"use strict";
const cake1 = {
    recipe: { flour: 500, sugar: 200, eggs: 1 },
    stock: { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
};
const cake2 = {
    recipe: { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    stock: { sugar: 500, flour: 2000, milk: 2000 },
};
const cake3 = {
    recipe: { flour: 100, sugar: 50 },
    stock: { flour: 1000, sugar: 300 },
};
const cake4 = {
    recipe: { eggs: 2 },
    stock: { eggs: 1 },
};
const cake5 = {
    recipe: { flour: 200, sugar: 100, cocoa: 50 },
    stock: { flour: 1200, sugar: 500, cocoa: 300 },
};
const cakes = (cake) => {
    const { recipe, stock } = cake;
    const possibleCakes = Object.keys(recipe).map((ingredient) => {
        var _a;
        const needed = recipe[ingredient];
        const available = (_a = stock[ingredient]) !== null && _a !== void 0 ? _a : 0;
        return Math.floor(available / needed);
    });
    return Math.min(...possibleCakes);
};
console.log(cakes(cake1));
