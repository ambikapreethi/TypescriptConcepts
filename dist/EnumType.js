"use strict";
// enums represents group of constants (number and string)
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log("(enum - numeric values starting with 0)");
console.log(`north:${directions.north},south:${directions.south}`);
(function (directions) {
    directions[directions["North"] = 23] = "North";
    directions[directions["East"] = 24] = "East";
    directions[directions["West"] = 25] = "West";
    directions[directions["South"] = 26] = "South";
})(directions || (directions = {}));
console.log("(enum - numeric values with starting value)");
console.log(`north:${directions.North},south:${directions.South}`);
var person;
(function (person) {
    person["name"] = "ambika";
    person["age"] = "thirty";
    person["street"] = "new st";
})(person || (person = {}));
console.log("(enum - string values)");
console.log(`person name: ${person.name},person.age: ${person.age}`);