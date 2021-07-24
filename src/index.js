import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

//diffrence : scoping function scope and block scope , and cant access before declaring

console.log(z);
console.log(y);

var z = "test";

let y = "test";

function one() {
  if (true) {
    var a = 123;
  }
  console.log(a);
}

{
  let b = 123;
}

one();
console.log(b);

//for(){}
//if(){}
