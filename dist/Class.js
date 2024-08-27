"use strict";
// class type with access modifiers (private,public,protected)
class Staff {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
}
class Salary extends Staff //inheritance
 {
    getSalary() {
        return this.salary;
    }
}
const staff = new Staff("ambika", 45, 20000);
const salary = new Salary("preethi", 23, 30000);
console.log("(class type:)");
console.log(`staff name: ${staff.getName()}`); //doesn't throw error because it is declared as public
console.log(`staff salary: ${salary.getSalary()}`);
// staff.name="preethi";          //throws error because it is private
// staff.age=78;                  //throws error because it is readonly
