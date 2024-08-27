// Unknown type allows all data types inside the array.
// It instructs the compiler force type-checking.
//Operations cannot be performed without type checks.

var array:any[]=[2,{name:"ambika"},"apple"];     //it doesn't throw any error
console.log(`(Unknown type Array): ${array}`)


var results:unknown;             //it accepts all data types

results=23;
results="ambika";
results={name:"preethi",age:"32"};
results=true;
results=[1,3,4];
console.log(`(Unknown type) results: ${results}`); 

// results.push("ambika");          //it doesn't allows operations w/o type checking
(results as number[]).push(445);    //after writing type it allows operations
console.log(`(Unknown type) results: ${results}`); 