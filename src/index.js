import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;


// rest parameter

// p1 = 10 , p2=20, p3=30
// function makePrice() {
//   console.log(arguments);
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total = total + arguments[i];
//     console.log(total);
//   }

//   console.log(Array.isArray(arguments));
// }

// makePrice(10, 20, 30, 40, 50, 60);

// function makePrice2(...allPrises) {
//   console.log(allPrises);
//   console.log(Array.isArray(allPrises));
//   let total = 0;
//   for (let i = 0; i < allPrises.length; i++) {
//     total = total + allPrises[i];
//     console.log(total);
//   }
// }

// makePrice2(10, 20, 30, 40, 50, 60);

===============================================

// function are object
function test() {}

console.dir(test);

test.stuedennam = "kk shrivastava";
test.getStudentName = function () {
  console.log(this.getStudentName);
};

console.log(test.stuedennam);
test.getStudentName();


=================================
// function scope

// scope 1
const anotherId = "1234abcd";

function makeCardPartID(id) {
  // scope 2
  console.log(id);

  function anotherFunction() {
    // scope 3
    const someId = "wq99";
    //  const anotherId = 100;
    console.log(someId, anotherId);
  }

  anotherFunction();
}

makeCardPartID("xy78645");

===========================

// function behaviours as a parameter and return

function logParam(param) {
  console.log(param);
  return () => console.log("another fn called");
}

const retFn = logParam(function test() {
  console.log("I am called");
});
console.log(retFn());

logParam({});

logParam(() => {});

=====================
// function testing 2

function test() {
  return function () {
    return function () {
      console.log("i am called");
    };
  };
}

const fn1 = test();
const fn2 = fn1();

console.log(fn1);
console.log(fn2);
fn2();

==============================================
/* 
closure, is the behaviour of function in javascript,
child function can access the property(variable or functon) of its parent function , 
when its parent execution context already poped up from the stack
*/

// function closure
function makeCarPartID(id) {
  const theID = `CAR_PART_${id}`;
  console.log(theID);

  return function (name) {
    return `${theID}_${name.toUpperCase()}`;
  };
}

const carPartName = makeCarPartID("x1213uu");
/*
  carPartName = function (name) {
    return `${theID}_${name.toUpperCase()}`;
  };

*/
console.log(carPartName);
console.log(carPartName("Left door"));
console.log(carPartName("wind screen"));
console.log(carPartName("wipper"));
console.log(carPartName("break"));

function test() {
  return function () {
    let one = 1;
    return function () {
      let two = 2;
      return function () {
        let three = 3;
        console.log(one + two + three);
      };
    };
  };
}

let fn1 = test();
console.log(fn1);

let fn2 = fn1();
console.log(fn2);

let fn3 = fn2();
console.log(fn3);

fn3();

// assignemt
// 5 level depth for into and subtraction

============================================

//iife  Immediately Invoked Functions Expressions (IIFEs):=
/*
IIFES(imediate invoked function execution statement ):- we can call our function efter juts writing it immediatly, so the purpose of this we can hide or do data privacy using the concept of IIFE. iife is executed only once, there is no concept of reuse the purpose of iife only is data privacy of global execution contecxt so accidently our variable will not be changed because they are only scoped inside the iife.


(function(aValue){
	var a = aValue || 10;
	console.log(a);
})();

*/




// global scope
(function () {
  // scope 2
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

  // iife // immediatly invoked function expression

  (function () {
    console.log("I am called");
  })();

  // react lib
  let result = (function (a, b) {
    return {
      createComponent: function () {},
      useState: function () {},
    };
  })(10, 20);

  console.log(result);
})();

(function () {
  // code
})();

======================================
// callback this is a design pattern you write function where another function is being called , which you have passedin the parameter , in terms of api , setTimeout ,click etc thy are taking afunctionand executing them call back , after finishing own works
/*
Callback function :- such function that are not being called by you , this is called by another function. means that function is passed in another function as a parameter , and that function will call them instead you,called callback function.

callback function:-  A function you give to another function, to be run when the other function is finished. so the function you will call (i.e invoke), 'Calls back' by calling the function you gave it when it finishes.	
*/


// function callback
// const anotherfn = () => {
//   console.log("I am run after 5 sec");
// };

// //anotherfn();
// setTimeout(anotherfn, 5000);

function getCarID(name, fn) {
  const theID = `${name}_xyz`;
  return fn(theID); // callback happening there
}

const carID = getCarID("maruti", function (id) {
  return id;
});

console.log(carID);