let names = ["Alice", "Bob", "Charlie", "Alice"];

names.map((name) => {
  return name + "1";
});

names.filter((name) => {
  return name != "Alice";
});

let myAge = 20;
let isOfAge = false;
isOfAge = myAge > 18 ? true : false;

let color = "green";
let isCorrect = false;

color = isCorrect ? "green" : "red";

// let color = "red";
// let isCorrect = false;

// color = isCorrect && "green";

const fetchData = async (animalName) => {
  const data = await fetch(`imaginaryapi.com/serchterm=(${animalName})`);
  const name = data.person?.name;
};

const calls = [
  { name: "Alice", numOfCalls: 3 },
  { name: "Bob", numOfCalls: 5 },
  { name: "Charlie", numOfCalls: 2 },
  { name: "Jess", numOfCalls: 4 },
  { name: "Jess", numOfCalls: 3 },
  { name: "Alice", numOfCalls: 4 },
  { name: "Bob", numOfCalls: 10 },
  { name: "Hla", numOfCalls: 12 },
];

const totalCallsPerPerson = calls.reduce((callsByName, item) => {
  const currentName = item.name;
  if (callsByName.hasOwnProperty(currentName)) {
    callsByName[currentName] += item.numOfCalls;
  } else {
    callsByName[currentName] = item.numOfCalls;
  }
  return callsByName;
}, {});
console.log(totalCallsPerPerson);

const sortedArray = [];

for (const name in totalCallsPerPerson) {
  sortedArray.push({ name: name, numOfCalls: totalCallsPerPerson[name] });
}
sortedArray.sort((a, b) => {
  return a.numOfCalls - b.numOfCalls;
});

console.log(sortedArray);

const letscall = sortedArray.map((item, index) => {
  return console.log((key = index), item.name, item.numOfCalls);
});
