import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

/*

1) ****** How to craete Number in javascript***********

// literal type
const literalNo = 10; // new Number(10)
const literalNo2 = "10";

console.log(literalNo);
console.log(literalNo2);

// function syntax :-
console.log(Number(2));
console.log(Number("222"));
console.log(Number("222px"));
console.log(Number({}));
console.log(Number([1, 2, 3]));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));

// object using function constructor and new keyword

const myNOOBJ = new Number(50);
console.log(myNOOBJ);

2) ****** How to handle decimal Number in javascript***********

// decimal javascript
console.log(0.1 + 0.2);
console.log(100 / 3);

console.log(33.333333333333336 * 3);

const price = 9.33;
const quantity = 3;

console.log(9.33 * 3);



const anotherPrice = 9.33 * 100;
console.log(anotherPrice);
const anotherQty = 3;

console.log((anotherPrice * anotherQty) / 100);

===============================

3) ****** How to parse number in Javascript***********

console.log(parseInt(10.25));
console.log(parseInt("10px"));
console.log(parseInt("10px10"));
console.log(parseInt("px10"));

console.log(parseInt(1011, 10));
console.log(parseInt(1011, 8));
console.log(parseInt(1011, 16));
console.log(parseInt(1011, 2));

console.log(parseFloat(5));
console.log(parseFloat(5.25));
console.log(parseFloat("5.25"));
console.log(parseFloat("5.25px"));

console.log(Number(10.25));
console.log(Number("10.25"));
console.log(Number("10px"));
console.log(Number("10px10"));
console.log(Number("px10"));

console.log(+"9999");
console.log(-"9999");

console.log(10 + +"9999");
==========================

4) ****** How to handle NAN in js***********

//Number.isNaN(NAN);

console.log(Number.isNaN(10));
console.log(Number.isNaN("sarang jain"));
console.log(Number.isNaN(5 * "sarang"));

console.log(Number.isInteger(10));


5) ****** ****** all premituve type , number are immutable , means originol value can not be changed that will be lost in memory*****

let immutableNo = 10;
let otherNO = immutableNo;

immutableNo = 10 + 20;
otherNO = otherNO + 1;

console.log(immutableNo);
console.log(otherNO);

=====================================
6) ****** How to type checking of number type***********

//type check with number

console.log(typeof 100);
console.log(new Number(10) instanceof Number);
console.log(Number(10) instanceof Number);
console.log(99 instanceof Number);

7) ****** number prototype property***********

//Number prototype property (methods)

console.log(Number.prototype);

console.log((99).toFixed());
console.log((99.66).toFixed());
console.log((99.1234).toFixed());

console.log((99.456).toPrecision(3));
console.log((99.456).toString());
console.log((5).toString());

console.log(new Number(100).valueOf());


*/
