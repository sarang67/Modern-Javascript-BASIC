import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// function in depth

//  1 first way function declration / function statemanet

function add() {
  console.log("I am a function statemanet");
}

// 2 anonymous function , function expression

let addExpression = function () {
  console.log("I am a function expression");
};

// 3 fat arrow function, arrow function , shorthand function

let addFatFunction = () => {
  // multiple statemant
  console.log("i am fat arrow function");
};

let addFatFunction2 = () => console.log("i am fat addFatFunction2");

let addFatFunction3 = (a, b) => console.log(a + b);
/*
// 5 time function you will write 
   myfamily (yourname) => console.log(yourname)
   myfamily (yourname, wisfename , childname) => console.log(yourname)
   myfamily (yourname, wisfename , childname) => {
    //console.log(age)
    // //console.log(name)
   }

*/

add();
addExpression();
addFatFunction();
addFatFunction2();
addFatFunction3(5, 5);

console.log(add.name);
console.log(addExpression.name);

// 4th way  , dont even check how it is working

//function test() {}

let numberA = "numberA";
let numberB = "numberB";

const addFunction = new Function(numberA, numberB, "return numberA + numberB");
console.log(addFunction);
console.log(addFunction(10, 10));

var myname = "sarang jain"; // STring
var test = function () {}; // Funstion


==========================================

// hoisting
// 1) variable will be available in undefined state in case we use before declration
// 2) function stataement will be completely available in case we use before iniltilization

add();
console.log(add);
console.log(addExpression);
console.log(addExpression);
console.log(addFatFunction);
//addFatFunction();

//  1 first way function declration / function statemanet
function add() {
  console.log("I am a function statemanet");
}

// 2 anonymous function , function expression
let addExpression = function () {
  console.log("I am a function expression");
};

// 3 fat arrow function, arrow function , shorthand function
let addFatFunction = () => {
  // multiple statemant
  console.log("i am fat arrow function");
};

============================================
// default parameter

// parameter
function makeCar(name = "BMW") {
  // scnerio 1
  // if (name) {
  //   console.log(`car is making name of car is ${name.toUpperCase()}`);
  // }

  // scnerio 2
  // if (!name) {
  //   name = "BMW"; // bydefault car is BMW
  // }
  // console.log(`car is making name of car is ${name.toUpperCase()}`);

  // scnerio 3
  console.log(`car is making name of car is ${name.toUpperCase()}`);
}

// argument
makeCar("maruti");
makeCar("maruti");
makeCar();

=============================================================
// function return value

var add = (a, b) => {
  let result = a + b;
  console.log(result);
  return result;
  // implicit return undefined
  //return;
};

let addResult;
// addResult = 10;
addResult = add(10, 20);
console.log(addResult);

