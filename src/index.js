import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: DOM</h1>
`;

// 1) looping dom element
// 2) finding child element
// 3) find the parent element
// 4) finding sibling element
// =============================
// Attribute , styles and classes
// 1) html attributes vs js properties
// 2) setting  or getting html attributes

// =============================================
// //1) looping dom element

// const ulLiElementList = document.querySelectorAll(".li-list");
// console.log(ulLiElementList);

// console.log("=== fior loop====");
// for (let i = 0; i < ulLiElementList.length; i++) {
//   console.log(ulLiElementList[i]);
//   console.dir(ulLiElementList[i]);
// }

// console.log("=== for .. of====");
// for (let item of ulLiElementList) {
//   console.log(item);
//   console.dir(item);
// }

// console.log("=== convert in valid array object from iterable type object====");
// [...ulLiElementList].forEach((item) => console.log(item));

// Array.from(ulLiElementList).forEach((item) => console.log(item));


// ===
// // finding child element

// app.innerHTML = `
//   <h1>Modern JavaScript: DOM</h1>
//   <ul id="elElem" class="ul=list">
//        <li class="li-list">Sarang</li>
//        <li class="li-list">amit</li>
//        <li class="li-list">sudhanshu</li>
//        <li class="li-list">adarsh</li>
//        <li class="li-list">nikhil</li>
// </ul>
// `;


// const ulElement = document.querySelector("#elElem");
// const liELement = ulElement.querySelectorAll(".li-list");

// console.log("======children, childNodes ==================");
// console.log(ulElement.children);
// console.log(ulElement.childNodes);

// console.log("======first, last ==================");
// console.log(ulElement.firstChild);
// console.log(ulElement.lastChild);

// console.log("======firstElement, lastElement ==================");
// console.log(ulElement.firstElementChild);
// console.log(ulElement.lastElementChild);


// ===
// // find the parent element
// app.innerHTML = `
//   <h1>Modern JavaScript: DOM</h1>
//   <div class="item"></div>
// `;

// const myDIv = document.querySelector(".item");
// // find the parent element
// console.log(app.parentNode); // body
// console.log(app.parentNode.parentNode); // html
// console.log(app.parentNode.parentNode.parentNode); // document



// console.log(app.parentElement);
// console.log(app.parentElement.parentElement);
// console.log(app.parentElement.parentElement.parentElement); // enull

// // closest
// console.log(myDIv.closest("body"));

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>Modern JavaScript: DOM</h1>
//   <ul id="elElem" class="ul=list">
//       <li class="li-list">Sarang</li>
//       <li class="li-list">amit</li>
//       <li class="li-list">sudhanshu</li>
//       <li class="li-list">adarsh</li>
//       <li class="li-list">nikhil</li>
// </ul>
// `;

// //4) finding sibling element
// const list = document.querySelector("#elElem li");

// console.log(list);

// // any dom nodes
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);

// console.log(list.previousSibling);
// console.log(list.previousElementSibling);

// ==================Attribute , styles and classes==================

// //1) html attributes vs js properties

// const myInput = document.querySelector("input");
// console.log(myInput);
// console.dir(myInput);
// // setter
// myInput.value = 5;

// // getter
// console.log(myInput.value);
// myInput.setAttribute("value", 5);




// //Attribute, properties , styles and classes

// //  setting  or getting html attributes

// app.innerHTML = `
//   <h1>Modern JavaScript: DOM</h1>
//   <button data-test="sarangjain" >
//       CLose Me
//   </button>
// `;


// const myBTN = document.querySelector("button");
// console.log(myBTN);
// console.dir(myBTN);

// myBTN.setAttribute("data-test", "amit B");
// console.log(myBTN.getAttribute("data-test"));

// myBTN.setAttribute("aria-label", "please close the popup");
// console.log(myBTN.getAttribute("aria-label"));
// console.log(myBTN.getAttribute("aria-label"));

// console.log(myBTN.attributes["aria-label"]);
