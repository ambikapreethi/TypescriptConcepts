// readonly allows the properties to be immutable
// prevents the array from being changed

var color:readonly string[]=["red","blue"];  
// color.pop();                                     //throws error pop doesn't exists in readonly
var colors: string[]=["red","blue"];
colors.pop();
console.log(`(Read only) color: ${color}`);
console.log(`(without readonly) colors: ${colors}`);

class persons
{
    readonly personName:string;
    constructor(personName:string)
    {
        this.personName=personName;
    }
}

let newPerson=new persons("ambika");   
// newPerson.personName="preethi";           //throws error because it is readonly.
