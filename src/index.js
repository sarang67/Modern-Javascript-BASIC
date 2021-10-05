import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: DOM</h1>
`;
/*

DOMContentLoaded event:-
=================
DOMContentLoaded , event is fired our whole html document has been completed to load and parse. it will not wait to to load stylesheet , images amy stylesheet , further js which is being loaded. so meand our complete dom skeltor is loaded and parse then our DOMContent is ready. 

load event:-
==========
load event will be fired when all the resources all js , style images , other pages anything are loaded , then only this event will be fired.

document and page load
=======================
<!DOCTYPE html>
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <header class="header">
      <div class="logo">
        <p class="logo-name">JS-DOM</p>
      </div>
    </header>

    <div id="app"></div>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        alert("DOM LOADED");
      });
	  
	    window.addEventListener("DOMContentLoaded", () => {
        alert("DOM LOADED");
      });

      window.addEventListener("load", (event) => {
        alert("page is fully loaded");
      });
    </script>
  </body>
</html>


//01-dom-nodes-explained
==================================
// document
//console.log(document);
//console.dir(document);

//html
//console.log(document.documentElement);
//console.dir(document.documentElement);

//<head>
console.dir(document.head);
//<body>
console.dir(document.body);

// retrive the constructor name
console.log(document.body.constructor.name);
// new HTMLBodyElement();

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

/* Node Type
https://www.w3schools.com/jsref/prop_node_nodetype.asp
1	Element	
2	Attr	
3	Text	
4	CDATASection	
5	EntityReference	
6	Entity	
7	ProcessingInstruction	
8	Comment	
9	Document	
10	DocumentType	
11 	DocumentFragment	
12	Notation


//Node Type
console.log(document.body.nodeType);
console.log(document.nodeType);

//nodename
console.log(document.body.nodeName);

//tageName
console.log(document.body.tagName);

console.log(document.nodeName);
console.log(document.tagName);


02-creating-dom-elements
========================
import "../assets/css/style.css";

const app = document.getElementById("app");

/*
 app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;


console.log(app);

const myDiv = document.createElement("div");
const myTextNode = document.createTextNode("JavaScript DOM");
const myCommnet = document.createComment("there is no commnet");

console.log(myDiv);

app.append(myCommnet);
app.append(myDiv);

myDiv.append(myTextNode);

*/
