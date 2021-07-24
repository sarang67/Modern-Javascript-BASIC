import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

//no binding and reassigning allowed

var a = 10;
a = 20;

let b = 20;
b = 10;

const c = 30;
c = 40;

const d = { name: "sarang" };
d.name = "sarang jain";

const e = [1, 2, 3];
e.push(5);
