// union is used when a variable can have more than one data type

function printCode(code:string | number):void{          //if we give boolean input error thrown
    console.log(`print code: ${code} `);
}

console.log("(union example)")  
printCode("four hundred and four");
printCode(404);
// printCode(true);                                 //error throws