// any type allows all data types inside the array.
// It instructs the compiler to skip type-checking.
//Operations can be performed without checks

var array:any[]=[2,{name:"ambika"},"apple"];     //it doesn't throw any error
console.log(`(Any type Array): ${array}`)


let result:any;             //it accepts all data types

result=23;
result="ambika";
result={name:"preethi",age:"32"};
result=true;
result=[1,3,4];
console.log(`(Any type) result: ${result}`);       //the last array value is print in console

result.push("ambika");  //it allows operations w/o type checking
console.log(`(Any type) result: ${result}`); 