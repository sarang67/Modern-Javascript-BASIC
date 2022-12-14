import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// truthy/falsy

// console.log(!!1);
// console.log(!!true);
// console.log(!!1.5);
// console.log(!!{});
// console.log(!![]);
// console.log(!!-10);
// console.log(!!"sarang");

console.log("----------------");
// falsy
// console.log(!!false);
// console.log(!!0);
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!"");

// if else statement
//===================

// const number = 100;

// let result;

// if (number === 99) {
//   result = "ninetynine";
// } else if (number === 100) {
//   result = "hundred";
// } else if (number === 1000) {
//   result = "thousand";
// } else {
//   result = "no value match";
// }
// console.log(result);

// ternary stateemet
// exp ? "true wala" : "false wala"

// const number = 100;

// let result;

// result =
//   number === 99
//     ? "ninetynine"
//     : number === 100
//     ? "hundred"
//     : number === 1000
//     ? "thusand"
//     : "value not matched";

// console.log(result);

// switch statement  ---> string / number

const number = "100000";

let result;

switch (number) {
  case "1": {
    result = "one";
    break;
  }
  case "100": {
    result = "hundred";
    break;
  }
  case "1000": {
    result = "thusand";
    break;
  }
  default: {
    result = "nothing found";
  }
}

console.log(result);

var check = true;

switch (check) {
  case true: {
    console.log("i am executed");
    break;
  }
  case false: {
    console.log("i am executed false");
  }
}
