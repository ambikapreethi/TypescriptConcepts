//function returns number value.

function add(a:number,b:number):number{         
    let c=a+b;
   return c;
}
console.log("(Function returns number value:)")
console.log(add(4,6));

//void 

function print(): void {            //if we type number instead of void error thrown.
    console.log(`(function returns nothing : void) :`);
    console.log("hi ambika")
}

console.log(print());

// optional parameters
function multiply(a:number,b:number,c?:number):number{     
    if(c!=undefined)
        {
            let d=a*b*c;
            return d;
        }
        return a*b;
    }
console.log(`(function with optional parameter):`);
console.log(multiply(4,6));          //doesn't throw error because c is optional

//default parameters
function addition(a:number,b:number=20):number{         
    let c=a+b;
   return c;
}
console.log("(Function contains default value:)")
console.log(addition(10));                           //we can omit the second value because it is default

//rest parameters
// 1.A function has only one rest parameter.
// 2. The rest parameter appear last in the parameter list.
// 3. The type of the rest parameter is an array type.

function addFunction(...numbers: number[]): number {
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
}
console.log("(Function contains rest parameter:)")
console.log(addFunction(10));
console.log(addFunction(10,67));
console.log(addFunction(10,2,4,6));

















