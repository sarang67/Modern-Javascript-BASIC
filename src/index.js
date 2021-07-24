import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

const number = 1;
let result;

switch (number) {
  case 1: {
    const text = "One";
    result = text;
    break;
  }
  case 99: {
    const text = "Ninety-Nine";
    result = text;
    break;
  }
  case 1000:
    result = "One Thousand";
    break;
  default:
    result = "No Match";
}

console.log(result);
