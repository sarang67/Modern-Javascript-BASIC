import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: DOM</h1>
`;
/*

/*


1) creating dom elements
========================
import "../assets/css/style.css";

const app = document.getElementById("app");


// app.innerHTML = `
//  <h1>JavaScript DOM</h1>
//`;


console.log(app);

const myDiv = document.createElement("div");
const myTextNode = document.createTextNode("JavaScript DOM");
const myCommnet = document.createComment("there is no commnet");

console.log(myDiv);

app.append(myCommnet);
app.append(myDiv);

myDiv.append(myTextNode);


2) changing dom node contents
================================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

// setter dom content......
console.log(app);

//app.innerText = "<h1>JavaScript DOM</h1>";

let h1Tag = document.createElement("h1");
h1Tag.innerText = "This is Dom class";

//later   // h1Tag.style.display = "none";
//later  // h1Tag.innerText += " This is Fun class";

app.append(h1Tag);

// getter dom content......

// gives the full html visible or onvisible.
console.log(app.innerHTML);
// give the text , remove whitespaces. only return visible text
// applies on Elements
console.log(app.innerText);
// give the full text (visible or invisible), inclusing whitespaces etc
// aplies on nodes
console.log(app.textContent);


3 innerHTML(using literal string) versus createelement (using dom createEelement):-
===============================================================================
const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

// using dom createElement
function createInputElem({ label, type = "text" }) {
  const labelElem = document.createElement("label"); //<label></label>;
  const inputElem = document.createElement("input"); //<input />

  inputElem.type = type; //<input type="text"/>
  labelElem.innerText = label; // <label>First Name:</label>;

  labelElem.append(inputElem); // <label>First Name: <input type="text"/></label>;

  return labelElem;
}

const nameField = createInputElem({ label: "First Name:", type: "text" });
app.append(nameField);

// usning string literal
function createInputElem2({ label, type = "text" }) {
  return `
   <label>
       ${label} 
      <input type="${type}"/>
  </label>
  `;
}

const emailField = createInputElem2({ label: "Email ID:", type: "email" });
app.innerHTML += emailField;



4 inserting dom elements
===========================
const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const i = document.createElement("i");
const b = document.createElement("b");

div.append(p);
div.prepend(span);
div.prepend("sarang");

// modern way
//p.before(i);
//p.after(b);

// old way to do after before

//p.parentNode.insertBefore(i, p);
//p.parentNode.insertBefore(b, p.nextSibling);
console.log(div, p, i, b);



5 inserting template string to html templates
===============================

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="myUL">
   <li>1</li>
  </ul>
`;

const ulElement = document.getElementById("myUL");

ulElement.insertAdjacentHTML("beforebegin", "<p>My Unordered list Start</p>");
ulElement.insertAdjacentHTML("afterbegin", "<li>My first list</li>");
ulElement.insertAdjacentHTML("beforeend", "<li>My last list</li>");
ulElement.insertAdjacentHTML("afterend", "<p>My Unordered list Start</p>");

*/
