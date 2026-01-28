const username = "Alice";
let age = 30;

const person = {
  name: "Bob",
  age: 25,
  isStudent: true,
};

console.log(person.isStudent);
console.log(username);
console.log(age);

const hobbies = ["running", "coding", "reading"];
console.log(hobbies);
console.log(hobbies[1]);
console.log("what hobbies are there?");
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

function sayHello() {
  console.log("Hello!");
}
sayHello();

function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Charlie");

//function
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(4, 7));

const result = addNumbers(10, 15);
console.log(result);

console.log("another way to write function");
//another way to write function
const add = (a, b) => {
  return a + b;
};
console.log(add(100, 200));

//if condition
let yourage = 13;
if (yourage > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//async, other processes will keep running
console.log("Start");
setTimeout(() => {
  console.log("This is delayed by 2 seconds");
}, 2000);
console.log("End");
