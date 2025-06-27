"use strict";
const getArea = (shape) => {
    if (shape.kind === 'square')
        return shape.size * shape.size;
    if (shape.kind === 'rectangle')
        return shape.width * shape.height;
    throw new Error('Invalid shape');
};
const rectangle = {
    kind: 'rectangle',
    width: 10,
    height: 20,
};
const square = {
    kind: 'square',
    size: 20,
};
console.log(getArea(rectangle));
console.log(getArea(square));
