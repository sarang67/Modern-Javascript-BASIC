import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

const number = 1;
const result = number === 1 ? "One" : "No Match";

console.log(result);

const anotherNumber = 99;
const anotherResult =
  anotherNumber === 1
    ? "One"
    : anotherNumber === 99
    ? "Ninety-Nine"
    : anotherNumber === 1000
    ? "One Thousand"
    : "No Match";

console.log(anotherResult);
