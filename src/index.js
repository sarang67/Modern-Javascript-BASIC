import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basicd</h1>
`;

/*
// string

let greet = "sarang jain";
let greet2 = "jain sarang";

console.log(greet);
console.log(greet2);

console.log('Hello  "sarang"');
console.log("Hello Ma'am");
console.log("Hello Ma'am");

console.log("Hello J\"ava'script");
console.log("Hello Ma'am");

console.log("sarang" + "kumar" + "jain" + "!!!");

console.log(`sarang kumar jain !!!`);

console.log(`
information 
---------------
name ==> sarang jain
age ==> 34

`);

console.log("Hello" + " " + greet);

let isHappy = false;

console.log(`

Hello 
   
${greet}

${test()}

${isHappy ? ":)" : ":("}

`);

function test() {
  return "Hello";
}

------------------------
// how we can use STring function or STring function constructor

// console.log(String(55), 55);
// console.log(String(55 + 10));
// console.log(String(true));
// console.log(String({ name: "sarang" }));
// console.log(String([1, 2, 3, 4]));
// console.log(String(["hi", "hell0"]));

// let myname = String("sarang jain");

// string using function constructor

console.log(new String(555));
//var no = '555' ---> new STring(555).valueOf()

let myName = "sarng jain";
console.log(myName["0"]);
console.log(myName["1"]);
console.log(myName["2"]);

console.log(myName["2"] + myName["3"]);

var obj = {
  name: "sarang jain",
  age: 25,
};

console.log(obj);

// . synta
// [] computed member access
console.log(obj.name);
console.log(obj["name"]);
console.log(obj["age"]);

let studentName = "Amar sharma";
console.log(studentName.length);
console.log(studentName[studentName.length - 1]);

***************

//  premitive types are immutable
// they are pass by value

const immutableString = "I will never change !!!";
const upperCase = immutableString.toUpperCase();
//"I will never change !!!".toUpperCAse
console.log(upperCase);
console.log(immutableString);

//

let myName = "sarang";
let myRefrence = myName; // sarang

myName += " jain"; // myName = myName + ' jain'
myRefrence += " kumar jain"; // myRefrence = myRefrence + ' kumar jain'

console.log(myName);
console.log(myRefrence);

**********************


// type checkking

console.log(typeof "sarang");
console.log(typeof "0");
console.log(typeof String(0));

console.log("sarang" instanceof String);
console.log(new String("kk") instanceof String);

console.log(typeof typeof "sarang");


------------------------------------
*/
