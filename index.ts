const addNum = (a: number, b: number) => {
    return a + b;
}

console.log(addNum(6, 45));

// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
let number = 4;

// functions
// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// it knows the type
//greet(34);


//showing return types
function getFavoriteNumber(): number {
    return 26;
}

//object types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//you can have optional properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//union types
function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

  // Number: Represents numeric values
let num: number = 10;

// String: Represents textual data
let str: string = "Hello, world!";

// Boolean: Represents true or false values
let isDone: boolean = false;

// Null: Represents an intentional absence of any object value
let n: null = null;

// Undefined: Represents a variable that has not been assigned a value
let u: undefined = undefined;

// Symbol: Represents unique identifiers
const sym1: symbol = Symbol("key");
const sym2 = Symbol("key"); // unique symbols

