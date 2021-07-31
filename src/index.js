import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// function declration

function add() {
  console.log("I am add funcion");
}

add();
console.log(add);

function add2(no1, no2) {
  return no1 + no2;
}

let add2Result = add2(10, 20);
console.log(add2Result);

// function expression (annonymous)

let addExpression = function () {
  console.log("I am add Expression");
};

addExpression();
console.log(addExpression);
console.log(addExpression.name);

// function expression (with  name)
let addExpression2 = function makeAdd() {
  console.log("I am add2 Expression");
};

addExpression2();
console.log(addExpression2.name);
// console.log(makeAdd()); error

//arrow function Shorthand function

/*
let greet = function () {
  console.log("hello all");
};

let add = function(a,b){
    return a+b;
}
*/

let greet = () => {
  console.log("hello all from greet");
};

greet();

let greet2 = () => console.log("hello all from greet 2");
greet2();

let addArrow = (a, b) => {
  let c = a + b;
  return c;
};

addArrow(10, 20);

let addArrow2 = (a, b) => console.log(a + b);

addArrow2(50, 50);
// ===========================================================

// function constructor declration
let numberA = "numberA";
let numberB = "numberB";
const sumFunction = new Function(numberA, numberB, "return numberA + numberB");
console.log(sumFunction(10, 15)); // => 25

const greetFn = new Function("return 'hello'");
console.log(greetFn());

/*
The function object type has a constructor: Function.
When Function is invoked as a constructor new Function(arg1, arg2, ..., argN, bodyString), a new function is created. The arguments arg1, args2, ..., argN passed to constructor become the parameter names for the new function and the last argument bodyString is used as the function body code.

sumFunction created with Function constructor invocation has parameters numberA and numberB and the body return numberA + numberB.

The functions created this way don’t have access to the current scope, thus closures cannot be created. They are always created in the global scope.

Remember that functions almost never should be declared using new Function(). Because the function body is evaluated on runtime, this approach inherits many eval() usage problems: security risks, harder debugging, no way to apply engine optimizations, no editor auto-complete.
*/

//============================================================
