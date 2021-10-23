import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
   <h1>Modern JavaScript: DOM</h1>
  `;

/*
03-setting-getting-inline-styles
=================================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button" >Click Me</button>
`;

//style="padding:20px; font-size:20; color:red; border-left:2px solid green"
const btn = document.querySelector("button");
console.dir(btn.style);

btn.style.cssText =
  "padding:20px; font-size:20px; color:red; border-left:2px solid green";

btn.style.padding = "30px";
btn.style.fontSize = "30px";
btn.style.color = "yellow";
btn.style.borderLeft = "5px solid green";


04-setting-getting-classes-classlist
=====================================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button" class="one two">
      Click Me !!
  </button>
`;

const button = document.querySelector("button");

// old way set class
button.className += " three";

// old wau get class
console.log(button.className);

console.log(button.className.split(" "));
console.log(button);

//new way classList

button.classList.add("four");
button.classList.remove("one");

button.classList.toggle("six");

setTimeout(() => {
  button.classList.toggle("six");
}, 2500);

button.classList.remove("one", "nine");


********************** Events and Event Listeners******************************************
// 01-adding-event-listeners

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button>Click me</button>
`;

const btn = document.querySelector("button");
console.dir(btn);

// Avoid it does not allow multiple events
// btn.onclick = function () {
//   console.log("i am clicked");
// };

// btn.onclick = function () {
//   console.log("i am clicked again");
// };

// btn.onfocus = function () {
//   console.log("I am focused");
// };

// btn.onblur = function () {
//   console.log("I am blurred");
// };

// btn.oncopy = function () {
//   console.log("I am copied");
// };

function handleClick(event) {
  console.log(event);
  console.log(this);
  console.log(event.target);
  //console.log("I am handle clicked");
}

btn.addEventListener("click", handleClick);
// btn.addEventListener("click", function () {
//   console.log("i am handle clicked twice");
// });

// arrow function

btn.addEventListener("dblclick", (event) => {
  console.log(this);
  console.log(event);
  console.log(event.target);
  console.log("dbl-clicked");
});


02-removing-event-listeners
=================================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button>Click me</button>
`;

const btn = document.querySelector("button");
console.dir(btn);

function handleClick(event) {
  console.log("clicked hapened");
}

// adding event listner
btn.addEventListener("click", handleClick);

setTimeout(() => {
  // removing event listner
  btn.removeEventListener("click", handleClick);
}, 5000);

// removehandler will work only named function , 
// it wont with arrow and anonuymous function


btn.addEventListener(
  "dblclick",
  () => {
    console.log("I am dbl clicked");
  },
  { once: true }
);

*/
