import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: DOM</h1>
`;

/*

1) replacing-dom-elements
2) cloning-dom-elements
3) removing-dom-elements
4) document-fragments

*****Querying and Traversing the DOM*****************************

5) querying-dom-nodes-htmlcollections  :- it always give live collection/condition. (getElementById, getElementsByClassName,getElementsByTagName)
6) querying-dom-nodes-nodelist :- it will give snapshot condition not live condition. (queruselector , queryselectorAll)




//1  replacing-dom-elements

const divElem = document.getElementById("divElem");

const newDIv = document.createElement("div");
newDIv.innerText = "i have replaced the text";

setTimeout(() => {
  // modern api to replace
  divElem.replaceWith(newDIv);
}, 2000);

const anotherDiv = document.createElement("div");
anotherDiv.innerText = "i have replaced the text again and again !!!";

setTimeout(() => {
  // modern api to replace
  newDIv.parentNode.replaceChild(anotherDiv, newDIv);
}, 5000);

console.log(divElem, newDIv);


// cloning-dom-elements

const div = document.createElement("div");
const span = document.createElement("span");
span.innerText = "can ypu clone me ?";

div.append(span);
console.log(div);

const clone = div.cloneNode(false);
console.log(clone);

const cloneDeep = div.cloneNode(true);
console.log(cloneDeep);

app.append(div);
app.append(clone);
app.append(cloneDeep);


==================
// 3 removing-dom-elements

const div = document.createElement("div");
div.innerText = "I am a message";
app.append(div);

// setTimeout(() => {
//   // new api to remove the nodes.
//   div.remove();
// }, 5000);

setTimeout(() => {
  // old to remove the nodes.
  div.parentNode.removeChild(div);
}, 5000);


// 5 document-fragments

const names = ["sarang", "amit", "adarsh", "sudhanshu", "bhushan"];

const fragment = document.createDocumentFragment();

console.dir(fragment);

names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.innerText = name;
  fragment.append(listItem);
});

console.log(fragment);
app.append(fragment);

//console.log(fragment.nodeName);
//console.dir(fragment);


================================

//*****Querying and Traversing the DOM*****************************

const names = ["sarang", "amit", "adarsh", "sudhanshu", "bhushan"];

const fragment = document.createDocumentFragment();

names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  listItem.className = "li-list";
  fragment.append(listItem);
});

// 1 getElementByID : HTMLElement
const ulElement = document.getElementById("ulElem");
ulElement.append(fragment);
console.log(ulElement);
console.dir(ulElement);

// 2 getElementBYClassName : HTMLCollectionOf<Element> ;
const listItemByClassName = ulElement.getElementsByClassName("li-list");
console.log(listItemByClassName);

// 3 getElementBYTagName :HTMLCollection
const listItemByTagName = ulElement.getElementsByTagName("li");
console.log(listItemByTagName);

const newFriend = `<li class="li-list">sameer</li>`;

ulElement.innerHTML += newFriend;

console.log("----------------------");
console.log(listItemByClassName);
console.log(listItemByTagName);


// querying-dom-nodes-nodelist

const names = ["sarang", "amit", "adarsh", "sudhanshu", "bhushan"];

const fragment = document.createDocumentFragment();

names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  listItem.className = "li-list";
  fragment.append(listItem);
});

// querySelector you can use any valid css selector
const ulElem = document.querySelector("ul");
ulElem.append(fragment);
console.log(ulElem);

//querySelectorAll : nodeList
const ulElementbyQSA = ulElem.querySelectorAll(".li-list");
console.log(ulElementbyQSA);

const newFriend = `<li class="li-list">sameer</li>`;

ulElem.innerHTML += newFriend;

console.log("-------------------");

console.log(ulElementbyQSA);

const newquery = ulElem.querySelectorAll(".li-list");
console.log(newquery);

const newFriend1 = `<li class="li-list">akash</li>`;

ulElem.innerHTML += newFriend1;

console.log(ulElementbyQSA);
console.log(newquery);

*/