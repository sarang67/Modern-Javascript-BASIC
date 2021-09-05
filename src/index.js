import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;


/*
Array Prototype methods
 these all methids accpet one callback function

 1) forEach(callback)  ---> we dont return manually. and function also will not return anything.

 2) map(callback)      ---> we have to return manually for each item. , brand new array.
 3) filter(callback)   ---> we have to return manually for each item. , brand new array.

 4) reduce(callback)   ---> we have to return manually manually which will give one result (as per our requirement)

 5) some(callback)     ---> we will not retuen manually, function will return true and false.
 6) every(callback)    ---> we will not retuen manually, function will return true and false.

 7) find(callback)     -->  we will not retuen manually, function will return finidng item.
 8)findIndex(callback) -->  we will not retuen manually, function will return finidng item index.

*/


let courses = ["angular", "react", "javascript", "typescript"];

courses.forEach((item, index) => {
  if (item === "angular") {
    console.log("my fav framework is angular");
  }
});

console.log(courses);

// function callBack(item, index) {
//   console.log(item);
//   console.log(index);
// }


const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

// let liString = ``;
// items.forEach((item, index) => {
//   liString += `<li>${item.id} ${item.name} - ${item.price}</li>`;
// });
// app.innerHTML += liString;

// console.log(items);

// traditional way
let liString2 = ``;
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  liString2 += `<li>${item.id} ${item.name} - ${item.price}</li>`;
}

app.innerHTML += liString2;

===========================================================

/*
Array Prototype methods
 these all methids accpet one callback function

  2) map(callback)      ---> we have to return manually for each item. , brand new array.

*/

// const brandNewValueArry = [1, 2, 3, 4, 5].map((item, index) => {
//   console.log(item, index);
//   return {};
// });

// const brandNewValueArry2 = ["sasa", "sa", "sss", "sss", "ssssss"].map(
//   (item, index) => {
//     console.log(item, index);
//     return item.length;
//   }
// );

// console.log(brandNewValueArry);
// console.log(brandNewValueArry2);

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

const JumboFries50 = items.map((item, index) => {
  if (item.id === "🍟") {
    return { ...item, price: item.price / 2 };
  }
  return item;
});

console.log(JumboFries50);
console.log(items);

const newArr = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.id === "🍟") {
    newArr.push({ ...item, price: item.price / 2 });
    continue;
  }
  newArr.push(item);
}

console.log(newArr);

===============================================================
//filter(callback)   ---> we have to return manually for each item. , brand new array.

// const value = [true, true, false].filter((item) => Boolean(item));
// const value2 = [true, true, false].filter(Boolean);
// console.log(value2);

// const value3 = [1, 2, 3, 4, 5].filter((item) => item < 1);
// console.log(value3);

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

const expensiveItems = items.filter((item) => {
  if (item.price < 199) {
    return true;
  }
});

console.log(expensiveItems);

console.log(items);

=========================================================

//app.innerHTML += "sarang jain";

// 4) reduce(callback)   ---> we have to return manually manually which will give one result (as per our requirement)

// value , index, arr
// prevValue , currentvalue ,index ,arr
const value = [1, 2, 3, 4, 5].reduce((prev, next) => {
  return prev + next;
}, 10);

console.log(value);
console.log("=============");

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

const finalPrice = items.reduce((prev, next) => {
  console.log(prev, next);
  return prev + next.price;
}, 0);

console.log(finalPrice);

console.log(items);

====================================
// some(callback)  ---> we will not retuen manually, function will return true and false.

// const value = [1, 2, 3, 4].some((item) => {
//   console.log(item);
//   return item > 1;
// });
// console.log(value);

const items = [
  { id: "🍔", name: "Super Burger", price: 399, offer: false },
  { id: "🍟", name: "Jumbo Fries", price: 199, offer: false },
  { id: "🥤", name: "Big Slurp", price: 299, offer: false },
];

const isOfferCodeApplied = items.some((item) => item.offer);

const totalprice = isOfferCodeApplied
  ? 500
  : items.reduce((prev, next) => {
      return prev + next.price;
    }, 0);

console.log(totalprice);
console.log(items);

==========================================
//every(callback)    ---> we will not retuen manually, function will return true and false.

const value = [false, false, false].every((item) => true);
console.log(value);

const value2 = [false, false, false].every(Boolean);
console.log(value);
console.log(value2);

console.log("===================");

const items = [
  { id: "🍔", name: "Super Burger", price: 399, stock: false },
  { id: "🍟", name: "Jumbo Fries", price: 199, stock: true },
  { id: "🥤", name: "Big Slurp", price: 299, stock: true },
];

console.log(items);

const isAllItemInStock = items.every((item) => item.stock);

console.log(isAllItemInStock);

if (!isAllItemInStock) {
  console.log(`Sorry all items ara not avilable in stock`);
} else {
  console.log(`all items are  avilable in stock`);
}

======================================================

const value = [1, 2, 3, 4, 5].findIndex((item) => true);

const value2 = ["sarang", "darshan", "paras"].findIndex(
  (item) => item === "hritik"
);
console.log(value);
console.log(value2);

const valu3 = [1, 2, 3, 4, 5].find((item) => item === 5);

const value4 = ["sarang", "darshan", "paras"].find((item) => true);

console.log(valu3);
console.log(value4);

console.log("=================");

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

const jumboFrised = items.find((item) => item.id === "🍟");
console.log(jumboFrised);

const jumboFrisedIndex = items.findIndex((item) => item.id === "🍟");
console.log(jumboFrisedIndex);
