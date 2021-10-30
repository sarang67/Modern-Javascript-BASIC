import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
   <h1>Modern JavaScript: DOM</h1>
  `;

// event-bubbling-capturing-propagation
// =========================================
// import "../assets/css/style.css";

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <div class="one" style="border:1px solid red; padding:20px">
//      <div class="two" style="border:1px solid green; padding:20px;margin:20px">
//         <button class="three">click me</button>
//       </div>
//   </div>
// `;

// // We have three phase for our eevent propagate, first phase is capturing phase (event goes down to the element),
// //second phase is target phase(wether the event reaches the target element), third phase is bubbling phase (whether the event up for the elemet)

// //buubling phase is better than capturing phase , so if we make the third option of addEventListner is false (which is by default)
// //means we want to use bubbling phase , or suppose we  make true third parameter , we want to use capturing phase

// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");

// function handleClick(event) {
//   // will stop propagation on next level
//   // event.stopPropagation();
//   // will stop immidiate propagation as well , means only one event handler will call, other attached will be avoided
//   // event.stopImmediatePropagation();
//   console.log(event.target);
// }

// one.addEventListener("click", handleClick);
// two.addEventListener("click", handleClick);
// three.addEventListener("click", handleClick);

// three.addEventListener("click", (event) => console.log("===>", event));

// preventing-default-event-actions
// ====================================
// import "../assets/css/style.css";

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//    <form>
//     <label>
//       Sign-up Email
//       <input type="email">
//     </lable>
//     <label>
//       I agree to the terms
//       <input type="checkbox">
//     </label>
//     <button type="submit">submit</button>
//    </form>

//    <a href="google.com">google</a>;
//   `;

// const form = document.querySelector("form");
// const email = document.querySelector('input[type="email"]');
// const checkbox = document.querySelector('input[type="checkbox"]');

// const ancher = document.querySelector("a");

// function handleSubmit(event) {
//   if (!(email.value && checkbox.checked)) {
//     event.preventDefault();
//     console.log("form is not submitted");
//     console.log(event.defaultPrevented);
//     return;
//   }
//   console.log(event.defaultPrevented);
//   console.log("i agree t&C , now form submitted");
// }

// form.addEventListener("submit", handleSubmit);

// ancher.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// checkbox.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// event-delegation-dynamic-events:-
// ===================================
// import "../assets/css/style.css";

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button>Add Item</button>
//   <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//   </ul>
// `;

// const button = document.querySelector("button");
// const list = document.querySelector("#list");
// //const items = [...document.querySelectorAll("li")];

// function handleCLick(event) {
//   if (event.target.nodeName.toLowerCase() === "li") {
//     console.log(event.target.innerText);
//   }
// }

// // using of event delegation taking the advantage of bubbling effect,
// //  and we are hanling event on parent once , and taking advanctage on child

// list.addEventListener("click", handleCLick);

// // items.forEach((item) => {
// //   item.addEventListener("click", handleCLick);
// // });

// button.addEventListener("click", () => {
//   const items = document.querySelectorAll("li");
//   const li = document.createElement("li");

//   li.innerText = `Item ${items.length + 1}`;

//   // li.addEventListener("click", handleCLick);
//   list.append(li);
// });

/*

06-keyboard-events:-
=====================
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div style="height:1000px;border:1px solid red"></div>

`;

document.addEventListener("keydown", (event) => {
  //console.log(event);
});

document.addEventListener("keyup", (event) => {
  //console.log(event.key, event.code);

  switch (event.key) {
    case "a": {
      console.log("I am key A");
      break;
    }
    case "b": {
      console.log("I am key B");
      break;
    }
    case "ArrowUp": {
      console.log("I am ArrowUp");
      break;
    }
  }
});


*/
