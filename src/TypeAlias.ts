// a type alias allows you to create a new name for an existing type.

type EmpName=string;            //string
type EmpAge=number;             //number
type DoorNo=number;
type EmpStreet=string;
type EmpCity=string;
type EmpAddress={               //object
    no:DoorNo;
    street:EmpStreet;
    city:EmpCity;
}

let empName:EmpName="ambika";
let emplAge:EmpAge=35;
let doorNo:DoorNo=12;
let empStreet:EmpStreet="kamarajar street";
let empCity:EmpCity="chennai";

let empAddress:EmpAddress={
    no:doorNo,
    street:empStreet,
    city:empCity
}

console.log("(type alias) Employee Name:",empName);
console.log(" Employee Age:",emplAge);
console.log(" Employee Address:",empAddress);