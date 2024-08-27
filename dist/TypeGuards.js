"use strict";
// Type Guards allow you to narrow down the type of a variable within a conditional block.
function additionFunc(a, b) {
    if (typeof a === 'number' && typeof b === 'number') { //if a and b are numbers
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') { //if a and b are strings
        return a.concat(b);
    }
}
console.log(`add with numbers:`);
console.log(additionFunc(10, 20));
console.log(`add with strings:`);
console.log(additionFunc("ambika", "preethi"));
