let price = 1000;

function getDiscount(discount, price) {
  return price * discount;
  console.log("getting Discount");
}

let discount = getDiscount(0.2, price);
console.log(discount);

let anotherDiscount = getDiscount(0.4, price);
console.log(anotherDiscount);

let greet = "Hello Erika Erika";
let user = "     John      ";
let id = "5";
console.log(user.length);
console.log(greet[1]);
console.log(greet.concat(user));
console.log(user.substring(5, 8));
console.log(user.slice(5, 8));
console.log(user.toUpperCase());
console.log(user.toLowerCase());

console.log(user.trim());
console.log(user.trimStart());
console.log(user.trimEnd());

console.log(id.padStart(5, "0"));
console.log(id.padEnd(5, "0"));
console.log(greet.repeat(3));

console.log(greet.replace("Erika", "Justin"));
console.log(greet.replaceAll("Erika", "Justin"));
console.log(greet.split(" "));

let scores = 10.3453;
console.log(scores.toFixed(2));
