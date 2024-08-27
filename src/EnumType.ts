// enums represents group of constants (number and string)

enum directions{            //numeric enums (starts with default value 0 and add 1 for next values)
    north,
    east,
    west,
    south
}
console.log("(enum - numeric values starting with 0)");
console.log(`north:${directions.north},south:${directions.south}`);


enum directions {                  //we can also give starting value
    North=23,
    East,
    West,
    South
}

console.log("(enum - numeric values with starting value)");
console.log(`north:${directions.North},south:${directions.South}`);

enum person {                  //we can also give string values
name="ambika",
age="thirty",
street="new st"
}

console.log("(enum - string values)");
console.log(`person name: ${person.name},person.age: ${person.age}`);
