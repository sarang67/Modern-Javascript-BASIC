import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

// Function in depth 3

// Function in depth
// Nature of this keyword and call apply bind

/*
        
        1) any function ---> this ---> global object
        2) any method  ----> this ----> self object
        3) short function  (this behaviour free) ---> this ---> it will take this behaviour from where this is written 
        (check in above line where this is written)


        in case of strict mode 
        1) any function ---> this ---> undefined
         
  */

// Function in depth
// Nature of this keyword and call apply bind

console.log(this); // window , global object

var checkagainthis5 = () => {
  console.log(this); // window , global object
};

checkagainthis5();

function checkthis() {
  console.log(this); // window , global object
}

checkthis();

let checkthis2 = function () {
  console.log(this); // window , global object
};

checkthis2();

let obj = {
  myName: "sarang",
  age: 30,
  getInfo: function () {
    console.log(this); // self object
    console.log(this.myName, this.age);

    // solution  till 2015
    var self = this;

    function checkagainthis() {
      console.log(this); // window , global object
      console.log(self.myName, self.age);
    }

    checkagainthis();

    // short function

    var checkagainthis1 = () => {
      console.log(this); // self object
      console.log(this.myName, this.age); // self object
    };

    checkagainthis1();
  },
};

console.log(obj.getInfo());

/*
// call apply bind
// when we use function as a object we use these methdo, we can change the context for which function will call for which context

  call(context) --> immediate call the function , argument is given simple form
  apply(context) --> immediate call the function , argument is given array form
  bind(context) --> will not immediate call the function, this will give new defination of function for later call

      first argument would be ---> will be context object


      you are changing the behaviour of this, using call apply bind.
  */

function sayHello() {
  console.log("Hello students");
}

sayHello();
sayHello.call();
sayHello.apply();
let newBindDefination = sayHello.bind();
console.log(newBindDefination);
newBindDefination();

function add(a, b) {
  console.log(a + b);
}

add(10, 10);
add.call(this, 10, 20);
add.apply(this, [10, 20]);

let newAdd = add.bind(this, 10, 20);
console.log(newAdd);
newAdd();

// what is context , what is parameter

function checkThis() {
  console.log(this);
}

checkThis();
checkThis.call(undefined);
checkThis.call("amit");
checkThis.call([]);
checkThis.call({});
checkThis.call(true);
checkThis.call(null);
checkThis.apply(new Date());
checkThis.apply({ name: "sarang", age: 35 });
checkThis.apply([1, 2, 3, 4]);

let myInformation = {
  name: "sarang jain",
  age: 35,
  getInfo: function () {
    console.log(this.name, this.age);
  },
};

let amitInformation = {
  name: "amit",
  age: 32,
  getInfo: function () {
    console.log(this.name, this.age);
  },
};

let darshanformation = {
  name: "darshan",
  age: 25,
  getInfo: function () {
    console.log(this.name, this.age);
  },
};

myInformation.getInfo();
amitInformation.getInfo();
darshanformation.getInfo();

let myInformation1 = {
  name: "sarang jain",
  age: 35,
};

let amitInformation1 = {
  name: "amit",
  age: 32,
};

let darshanformation1 = {
  name: "darshan",
  age: 25,
};

function getInfo() {
  console.log(this.name + this.age);
}

getInfo.apply(myInformation1);
getInfo.apply(amitInformation1);
getInfo.apply(darshanformation1);

let myInformation2 = {
  name: "sarang jain",
  age: 35,
  getInfo() {
    console.log(this.name + this.age);
  },
};

let amitInformation2 = {
  name: "amit",
  age: 32,
};

let darshanformation2 = {
  name: "darshan",
  age: 25,
};

myInformation2.getInfo();

myInformation2.getInfo.call(amitInformation2);

myInformation2.getInfo.apply(darshanformation2);

// genric function for call apply bind
function iterateArray() {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
}

let noarr = [1, 2, 3, 4, 5];
let namearr = ["sarang", "kk", "govind"];
let objarr = [1, 2, 3];

iterateArray.call(noarr);
iterateArray.apply(namearr);
iterateArray.bind(objarr)();

/// callback function

/*
 when you are calling a function that is call a function call
 when one function is calling another function , this terminology called a callback function call

*/

function sayHello() {
  console.log("Hello");
}

sayHello();

function sayHiLater(fn) {
  console.log(
    "Here sayHiLater function will call another function, that is called cb"
  );

  fn();
}

sayHiLater(function () {
  console.log("say hello");
});

var sayHelloAgain = function () {
  console.log("heyyyyyyyyyyyyy");
};

sayHiLater(sayHelloAgain);

setTimeout(callBackFunction, 5000);

function callBackFunction() {
  console.log("i will run after 5 sec");
}
