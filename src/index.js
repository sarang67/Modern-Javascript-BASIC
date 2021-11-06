import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
   <h1>Modern JavaScript: DOM</h1>
  `;

/*
05-input-elements:-
====================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <input type="text" name="myInput" value="hello input"/>
  </form>
`;

const form = document.forms.example;
const myInput = form.myInput;

console.dir(myInput);

// 1. properties that are useful.

// set
myInput.value = "Good Bye";

//get
console.log(myInput.value);
//myInput.readOnly = true;
//myInput.disabled = true;

//event

myInput.addEventListener("focus", () => {
  console.log("focus");
});

myInput.addEventListener("blur", () => {
  console.log("blur");
});

myInput.addEventListener("change", () => {
  console.log("change");
});

myInput.addEventListener("input", () => {
  console.log("input");
});

//methods

myInput.focus();
setTimeout(() => {
  myInput.blur();
}, 2500);



06-radio-input-elements
=======================
	import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
  <div id="container">
      <label>
        Red 
        <input type="radio" value="red"  name="color" checked/>
      </label>

      <label>
        Green
        <input type="radio" value="green"  name="color" />
      </label>
      
      <label>
        Yellow
        <input type="radio" value="yellow"  name="color" />
      </label>
  </div>
  </form>
`;

const form = document.forms.example;
const radios = [...form.elements.color];
//console.log(radios);

// 1. properties that are useful

// radios.forEach((radio) => {
//   console.log(radio.value);
//   console.log(radio.checked);
// });

//const checked = radios.find((radio) => radio.checked === true);
//console.log(checked);

// using event delegation
// 2. event // input and change
const container = document.getElementById("container");

container.addEventListener("change", () => {
  const checked = radios.find((radio) => radio.checked === true);
  console.log(checked.value);
  // modern way
  console.log(form.elements.color.value);
});

// 3 methods

radios[2].select();


//07-checkbox-input-elements
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
  <div id="container">
      <label>
        marketing ? 
        <input type="checkbox"   name="marketing" />
      </label>


  </div>
  </form>
`;

const form = document.forms.example;
const checkbox = form.elements.marketing;

checkbox.checked = true;

// .1 property
//console.log(checkbox.checked);
//console.log(checkbox.value);

// 2. event

checkbox.addEventListener("change", () => {
  console.log(checkbox.checked);
  console.log(checkbox.value);
});

// 3 methods

checkbox.select();


08-select-elements
=====================

import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
  <div id="container">
    <select name="framework">
      <option  value=''>select framework</option>
      <option  value='angular' selected>Angular</option>
      <option  value='react'>React</option>
      <option  value='vue'>Vue</option>
    </select>
  
  </div>
  </form>
`;

const form = document.forms.example;
const select = form.elements.framework;

console.dir(select);

// .1 property
console.log(select.value);
select.value = "vue";

// 2 selectedIndex
const id = 2;
console.log(select.selectedIndex);
select.selectedIndex = id;
console.log(select.selectedIndex);

//3 select dom element
console.log(select.options[select.selectedIndex]);

// 4. event

select.addEventListener("change", () => {
  console.log(select.value);
  console.log(select.selectedIndex);
  console.log(select.options[select.selectedIndex]);
});

// 5 methods add new options
const option = document.createElement("option");
option.value = "javascript";
option.innerText = "Javascript";

//select.append(option);
select.add(option, 2);

*/
