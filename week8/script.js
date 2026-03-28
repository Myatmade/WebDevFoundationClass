console.log("Hello World, JS is working!");

//const, let
let age = 30;
// let age; undefined
let name = "Erika\'s";
name = "Erika";
let nullVariable = null;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

//variable & data types
// stirng, number, boolean, null, undefined

let user = {
  name: "Erika",
  age: 30,
  isStudent: true,
  pet: {
    name: "Mochi",
    type: "cat",
  },
};
let numbers = [
  1,
  null,
  undefined,
  true,
  false,
  2,
  3,
  4,
  5,
  { name: "Helen", age: 30 },
];

//operators
let x = 10;
let y = 5;

console.log(x + y);

//logical operators
// &&, ||, !

let isAdult = age >= 18;
let hasID = true;

isAdult && hasID; // true
isAdult || hasID; // true
!isAdult; // false

//comparison operators
// ==, ===, !=,  >, <, >=, <=

//condition
// if else stateent

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a minor.");
}
// switch
switch (expression) {
  case "A":
    // code block
    break;
  case "B":
    // code block
    break;
  default:
  // code block
}

//loops
let users = [
  {
    name: "Erika",
    age: 30,
  },
  {
    name: "Helen",
    age: 25,
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Erika" && users[i].age === 30) {
    console.log("You are winner!");
  } else {
    console.log("Try again!");
  }
}
