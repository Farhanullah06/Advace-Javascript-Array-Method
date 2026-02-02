// mul each Number by 3
// task 1
let numbers = [1, 2, 3, 4, 5];

let mul = numbers.map(num => num * 3);
console.log("task1");


console.log(mul); // [3, 6, 9, 12, 15]



// task 2 
let arr = [12, 5, 8, 130, 44];

let result = arr.filter(num => num > 10);
console.log("task2");
console.log(result); // [12, 130, 44]



// 3) forEach
let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit}`);
  console.log("task3");
});



// Task: 
// Create a new array that contains only the names. 
const mans = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

let names = mans.map(user => user.name);
console.log("task4");
console.log(names); // ["Ali", "Sara", "Ahmed"]


// Task: 
// Return only users who are 18 or older. 
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

let adults = users.filter(user => user.age >= 18);
console.log("task5");
console.log(adults);

// Task: 
// Find the product with id === 2
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];
let product = products.find(item => item.id === 2);
console.log("task6");
console.log(product); // { id: 2, name: "Phone" }

// Task: 
// Check if all scores are above 50
const scores = [70, 85, 90, 60];
let allAbove50 = scores.every(score => score > 50);
console.log("task7");
console.log(allAbove50); // true


// Task: 
// Check if at least one email is a Gmail account

const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];
let hasGmail = emails.some(email => email.includes("@gmail.com"));
console.log("task8");
console.log(hasGmail); // true




