"use strict";
// The never type is a type that holds no value. It is like an empty set.
// let names:never="ambika";    //error throws,we cannot assign value sto never type
var names = "ambika";
//if a function that returns nothing to the caller and always throw error message
// we can use never type
function raiseError(message) {
    throw new Error(message);
}
raiseError("This is never data type");
