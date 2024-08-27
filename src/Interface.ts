//interface (seperate type and use it in code) used only in object
// They also provide explicit names for type checking.

interface Employee {readonly name:string;               //redaonly                
    age?:number;                              //optional value
    isMajor:boolean
    }

    var employees:Employee = {               //object
        name:"ambika",      
        age:34,               
        isMajor:true
    }  

    console.log("(interface) Employees:",employees);
    // employees.name="preethi";                //throws error because name is read only.