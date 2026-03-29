let numbers = [1, 2, 3, 4, 5, 6, 7];
let secondNumbers = [9, 10];
console.log(numbers.length);
console.log(numbers.toString());
console.log(numbers.join("-"));
console.log(numbers.pop()); //removes the last element

console.log(numbers.push(8)); // adds a new element to the end
console.log(numbers);
console.log(numbers.shift()); // removes the first element of the array and returns it

console.log(numbers.unshift(1)); // adds a new element to the beginning of the array and returns the new length

console.log(numbers.concat(secondNumbers));
console.log(numbers.slice(1, 4));
console.log(numbers.splice(2, 0, 12, 14));
console.log(numbers);

//forEach, when we want to execute a function for each element of the array
numbers.forEach(function (number) {
  //code
  console.log(number);
});

//how forEach works

function myOwnForEach(array, callbackFn) {
  //console.log(callbackFn);
  for (let i = 0; i < array.length; i++) {
    callbackFn(array[i]);
  }
}
myOwnForEach(numbers, function (number) {
  console.log(number);
});

//map, when we want to create a new array based on the original array

let newArray = numbers.map(function (number) {
  return number * 2;
});

console.log(newArray);

//filter, when we want to create a new array based on the original array but only with the elements that satisfy a certain condition
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

//every, when we want to check if all the elements of the array satisfy a certain condition
let allEvenNumbers = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(allEvenNumbers);

//some, when we want to check if at least one element of the array satisfies a certain condition
let containEvenNumbers = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(containEvenNumbers);
