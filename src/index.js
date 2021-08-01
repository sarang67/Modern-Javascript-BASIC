import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// hoisting in nature
console.log(add);
console.log(addExpression);
console.log(addArrow);

function add(a, b) {
  return a + b;
}

var addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => console.log(a + b);

// default parameters *************************

// parameter
function makeRecipie(name = "dal bati", param = {}, param2 = []) {
  // if (!name) {
  //   name = "dalbati"; // default value
  // }

  // name = name || "dal bati";

  console.log(`preparaing recipie ${name.toUpperCase()}`);
  console.log(param, param2);
}

// argumant

makeRecipie("Pizza");
makeRecipie("burger");
makeRecipie();

// function ...rest parameter *************************

function makePrice(p1, p2, p3, p4, p5) {
  //  const totalprice = p1 + p2 + p3 + p4 + p5;
  //  console.log(totalprice);
  console.log(Array.isArray(arguments));
  const validArray = Array.from(arguments);
  console.log(validArray);

  console.log(arguments);

  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  console.log(total);
}

makePrice(10, 20, 30, 40, 50);

function makePrice1(p1, p2, p3, p4, ...rest) {
  console.log(p1, p2, rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + arguments[i];
  }
  console.log(total);
}

makePrice1(10, 20, 30, 40, 50, 60, 70, 80);

// function return value (emplicit ---> undefined) *************************

function makePrice1(p1, p2, p3, p4, ...rest) {
  console.log(p1, p2, rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + arguments[i];
  }
  console.log(total);
  // return;
}

const total = makePrice1(10, 20, 30, 40, 50, 60, 70, 80);
console.log(total);

//function are first class function in JS, and they are object *************************

function logParam(param) {
  console.log(param);
}

function test() {}

let testExp = function () {};

logParam(1);
logParam({});
logParam([]);
logParam(new Date());

logParam(test);
logParam(function test2() {});
logParam(testExp);
logParam(() => {});

//=========================
function greet() {
  console.log("Hi");
}

greet();
console.dir(greet);

greet.langugaeofGreet = "english";

greet.whicjLanguageofGreet = function () {
  console.log("the language of greet is english");
  //return;  --> Js implicitlty adding this here return undefined
};

console.log(greet.langugaeofGreet);
console.log(greet.whicjLanguageofGreet());
console.log(greet.name);

///iifes *************************

//iife  Immediately Invoked Functions Expressions (IIFEs):=
/*
IIFES(imediate invoked function execution statement ):- we can call our function efter juts writing it immediatly, so the purpose of this we can hide or do data privacy using the concept of IIFE. iife is executed only once, there is no concept of reuse the purpose of iife only is data privacy of global execution contecxt so accidently our variable will not be changed because they are only scoped inside the iife.

    // <script>
    //   (function () {
    //     var myName = "sarang jain";
    //     function one() {
    //       console.log("one function");
    //     }
    //   })();
    // </script>
    // <script>
    //   (function () {
    //     var myName = "darshan kumar";
    //     function one() {
    //       console.log("one function");
    //     }
    //   })();
    // </script>
    // <script>
    //   // IIFE Immediatly invoked function expression (IIFES)
    //   (function () {
    //     console.log("running");
    //   })();

    //   (function add(a, b) {
    //     console.log(a + b);
    //   })(10, 20);

    //   (function () {
    //     ///--------
    //   })();
    // </script>



// scopes in jS *********************************************** 

//global scope

// scope 1
let id = "abc";

function one() {
  // scope 2
  let id = "def";
  console.log(id);
  two();
  function two() {
    // scope 3
    let id = "xyz";
    console.log(id);
    three();
    function three() {
      // scope 3
      let id = "opi";
      console.log(id);
    }
  }
}

one();

function test() {
  return function () {
    console.log("I am returned function");
  };
}

let callTestfn = test();
console.log(callTestfn);
console.log(callTestfn());

/* 
Whats happening there
callTestfn =  function () {
    console.log("I am returned function");
  };
*/



// hoisting in javascript ***********************************
// function closure

/* 
closure, is the behaviour of function in javascript,
child functioncan access the property of its parent function , when its parent execution context already poped up from the stack
*/

function add(param1, param2) {
  return function (param3) {
    return function (param4) {
      console.log(param1 + param2 + param3 + param4);
    };
  };
}

//console.log(add(50, 50)(50)(50));

let addFn = add(50, 50);
let annyfn1 = addFn(50);
annyfn1(50);

/*
Whats happening there
add(10, 20)
function (param3) {
    return function (param4) {
      console.log(param1 + param2 + param3 + param4);
    };
  };

  add(10, 20)(30)    

 return function (param4) {
      console.log(param1 + param2 + param3 + param4);
    };

     add(10, 20)(30)(40)

     console.log(param1 + param2 + param3 + param4);

*/
