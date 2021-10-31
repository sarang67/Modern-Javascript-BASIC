import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
   <h1>Modern JavaScript: DOM</h1>
  `;

//**********************Forms and Events********************************

/*
  1-access-forms-and-elements:-
================================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
   <label>
    Full Name
    <input type="text" name="fullName"/>
   </label>
`;

//const form = document.querySelector("form");
//console.log(form);

//const orderForm = document.forms[0];
//console.log(orderForm);

console.log(document.forms);

const orderForm = document.forms.order;
console.log(orderForm);

console.log(orderForm.elements);

const fullName = orderForm.elements.fullName;

console.log(fullName);

//const { fullName, email } = orderForm.elements;
//console.log(fullName, email);

function handleInput(event) {
  // access the value
  console.log(event.target.value);
  //access the form
  console.log(event.target.form);
}
// bind the input event
fullName.addEventListener("input", handleInput);
fullName.addEventListener("change", handleInput);
   */

/*****
02-submit-event-formdata:-
=========================

import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
    <form  name="order">
      <label>
        Your Name
        <input type="text" name="fullname" />
      </label>
      <label>
        Which pizza would you like?
        <select name="pizza">
          <option value="peproni">Peproni</option>
          <option value="cheesy">Cheesy</option>
          <option value="meety">Meety</option>
        </select>
      </label>
      <input type="submit">
      </form>


`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  new FormData(event.target);
  //console.log([...new FormData(event.target)]);
}

function handleformdata(event) {
  //  console.log(event.formData);
  //  console.log([...event.formData]);
  //  console.log([...event.formData.values()]);
  //  console.log([...event.formData.entries()]);

  const entries = event.formData.entries();
  for (const entry of entries) {
    console.log(entry);
  }
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("formdata", handleformdata); 

*/

/****
 * 03-transform-formdata (using query string and json):-
=======================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
    <form  name="order">
      <label>
        Your Name
        <input type="text" name="fullname" />
      </label>
      <label>
        Which pizza would you like?
        <select name="pizza">
          <option value="peproni">Peproni</option>
          <option value="cheesy">Cheesy</option>
          <option value="meety">Meety</option>
        </select>
      </label>
      <div>
      What Size ?
      <label>
        <input type="radio" name="size" value="small" checked/>
      </label>
      <lable>
        <input type="radio" name="size" value="medim" checked/>
      </label>
      <lable>
        <input type="radio" name="size" value="large" checked/>
      </label>
      <label>
      Quantity?
        <input type="number" name="quanitity" value="1"/>
      </label>
      </div>
      <input type="submit">
      </form>


`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = [...formData.entries()];
  
  // url string
  // fullname=sarang%20jain&pizza=meety&size=large&quanitity=1


  // Another way to create url query string form sending form data
  const asString2 = new URLSearchParams(formData);
  console.log(asString2);
  console.log(asString2.toString());

  // second way to sending data ---> json approach

  const asJson = JSON.stringify(Object.fromEntries(formData));
  console.log(asJson);
}

form.addEventListener("submit", handleSubmit);

 */

/***

04-fetch-api-formdata (send form data):-
=====================================

import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
    <form  name="order">
      <label>
        Your Name
        <input type="text" name="fullname" />
      </label>
      <label>
        Which pizza would you like?
        <select name="pizza">
          <option value="peproni">Peproni</option>
          <option value="cheesy">Cheesy</option>
          <option value="meety">Meety</option>
        </select>
      </label>
      <div>
      What Size ?
      <label>
        <input type="radio" name="size" value="small" checked/>
      </label>
      <lable>
        <input type="radio" name="size" value="medim" checked/>
      </label>
      <lable>
        <input type="radio" name="size" value="large" checked/>
      </label>
      <label>
      Quantity?
        <input type="number" name="quanitity" value="1"/>
      </label>
      </div>
      <input type="submit">
      </form>


`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = [...formData.entries()];
  // url string
  // fullname=sarang%20jain&pizza=meety&size=large&quanitity=1

  // Another way to create url query string form sending form data
  const asString2 = new URLSearchParams(formData).toString();
  // console.log(new URLSearchParams(formData));
  // console.log(asString2);

  // second way to sending data ---> json approach

  const asJson = JSON.stringify(Object.fromEntries(formData));
  console.log(asJson);

  fetch("/fakeApi", {
    method: "post",
    body: asString2,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  fetch("/fakeApi2", {
    method: "post",
    body: asJson,
    headers: { "Content-Type": "application/json" },
  });
}

form.addEventListener("submit", handleSubmit);


 */
