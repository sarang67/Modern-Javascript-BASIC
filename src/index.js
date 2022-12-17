import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// number method

/*
// premitive data type --> number
// literal syntax
const literlnumber = 99;
const literlnumber1 = "99";

console.log(literlnumber);
console.log(literlnumber1);

// what is the use of Number() function constructor --> conversion
console.log(Number(100));
console.log(Number("100"));
console.log(Number("100px"));

// constructo syntax to make number object --> not prefrred to create
let myNO = new Number(44);
console.log(myNO);
console.log(new Number("44"));
console.log(new Number("44px"));

// var no = 7    // new Number(7).valueOf() --> primitive value


================
// decimal value

console.log(2 + 3);
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 100);

const price = 9.33;
const quantity = 3;

console.log(9.33 * 3);

const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100);

console.log("-------------------------------------");
// parsing to number
console.log(parseInt("55px"));
console.log(parseInt("55.222222"));
console.log(parseInt(10, 2));

console.log(parseFloat("55"));
console.log(parseFloat("55.88"));
console.log(parseFloat("55.88px"));

console.log(parseInt(555e10));
console.log(Number(555e10));

console.log("-------------------------------------");
console.log(+"999");
console.log(-"999");

console.log(10 + "999");
console.log("10" + "999");
console.log("sa" + "rang");

console.log("999" + "10");
console.log("999" + 10);

==============


// immutability / mutability

//immutability :- all premitive type are immutable  (jiski previous address ki value change naa kiyaa jaa sake)
// all premitive  are pass by value

let immutableNO = 99;
immutableNO = 50;

let refrencenumber = immutableNO;

console.log(immutableNO);
console.log(refrencenumber);

refrencenumber = 11;

console.log(immutableNO);
console.log(refrencenumber);

-----------------------------

// type chcjhecking
console.log(typeof 5);
console.log(typeof 10.5);
console.log(Number("99") instanceof Number);
console.log(new Number("99") instanceof Number);
console.log(typeof Number("99"));
console.log(typeof new Number("99"));


-----------------------------
number method
------------
console.log(Number.prototype);

console.log((99).toFixed());
console.log(Number((99.1245).toFixed(3)));

console.log((99.1245).toPrecision(8));
console.log(new Number(10).valueOf());
console.log((10).toString());

console.log(parseFloat((99.1245).toFixed(3)));
console.log(parseInt((99.1245).toFixed(3)));

*/
