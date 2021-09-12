import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Advance</h1>
`;


*** Please upgrade the dependencies. ********* using npm install first

1) prototypes and __proto__ ([[prototype]]), and prototype chain , and inheritance using protype chain
===========================================================================================

A) inheritance using protype chain
B) prototypes and __proto__([[Prototype]])
c) prototype chain

now how you will use the prototype of function not __proto__
===========================================
2) function constructor with new keyword
3) members and classes

###################################################################################################################
/*
A) inheritance using protype chain
Inheritance means one object can access the properties and method of another object, this terminology called inheritance. 
We can achieve inheritance in different language by classical way or other ways, but in JavaScript it is archived by only prototypal way. 

B) Prototype and prototype chain.
Every Object has prototype property , which keep the reference of another object.
Every JavaScript object has a one prototype property (__proto__), which makes inheritance possible in JavaScript. 
When a certain method or property is called , the search starts in the object itself first , if it is not found , the Search moves on the object's prototype(__Proto__), its continue until the method or properties is found that is called prototype chain

Never ever use __proto__ property , it is not for us, it is used by JS internally.
Every function has two prototype property (prototype) and (__prto__).
Developer will always  use prototype property(prototype) property not prototype(__proto__) property , both has same purpose . 
The Prototype property(prototype) in function is where we put methods and properties that we want in other object to inherit.

C) Function constructor and new key word
Constructor, means , it will create something. 
Function constructor(class) is a blueprint. 
You can make multiple object(instance) using this blueprint(function constructor/class) by new keyword.


function Employee(name , lastName){
 this.name = name;
 this.lastName = lastName;
}
Employee.prototype.getInfo = function(){return this.name + this.lastName}
var sarang = new Employee('sarang', "Jain");

When JS compiler see “new keyword” just beside of function call , a new object will be created somewhere in memory, now Employee function executed. inside employee function “this variable”  will be pointing to newly created object in memory(this is the fourth behaviour of this keyword which only work when object is created using new keyword.
And when function completely executed or called, this function will automatically return that newly created object , so that object will be assigned to sarang variable. we can see here, we are not returning the object but it Employee will automatically will return when it will executed with new keyword.

D) How JS handle __proto__

function Employee(){}

var sarang = new Employee();

// behind the scene JS assign it
sarang.__proto__ = Employee.prototype;

// so same kind , 
Employee type function is created by Function constructor .
Employee.__proto__ = Function.prototype
  
// and Function type constructor, is created by
Function.__proto__ = Object.prototype

// now we reached on base object , so this most parent now, if we search again  we will  get null
 							
Object.__proto__ = null;	


*/

***************B) prototypes and __proto__([[Prototype]])***************


let myObj = {};

let myArray = [];

let myFunnction = function () {};

console.log(myObj);
console.log(myObj.__proto__); // base object
console.log(myObj.__proto__.__proto__); // end null

console.log("----------------");
console.log(myArray);
console.log(myArray.__proto__); // base Array
console.log(myArray.__proto__.__proto__); // base Object
console.log(myArray.__proto__.__proto__.__proto__); // end null

console.log("----------------");
console.dir(myFunnction);
console.dir(myFunnction.__proto__); // base function
console.dir(myFunnction.__proto__.__proto__); // base Object
console.dir(myFunnction.__proto__.__proto__.__proto__); // base Object


***************c) prototype chain***************

//c) prototype chain, what it does

let obj_1 = {
  prop1: "I am Property 1",
};


console.log({}.constructor);
console.log([].constructor);

function add() {}
console.log(add.constructor);

let obj_2 = {
  prop2: "I am Property 2",
};

let obj_3 = {
  prop3: "I am Property 3",
};

obj_1.__proto__ = obj_2;
obj_2.__proto__ = obj_3;

// console.log(obj_1);
// console.log(obj_1.prop1);
// console.log(obj_2);
// console.log(obj_2.prop2);
// console.log(obj_3);
// console.log(obj_3.prop3);

console.log(obj_1);
console.log(obj_1.prop1);
console.log(obj_1.prop2);
console.log(obj_1.prop3);
console.log(obj_1.prop4);




console.log({}.constructor);
console.log([].constructor);

function add() {}
console.log(add.constructor);


********** function constructor and new keyword , class. blue print ,for abstrction and resusability****************

function Employee(fn, ln, age) {
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;

  // this.setFirstName = function (eName) {
  //   this.firstName = eName;
  // };

  // this.getFullName = function () {
  //   return this.firstName + this.lastName;
  // };

  return this;
}

Employee.prototype.setFirstName = function (eName) {
  this.firstName = eName;
};

Employee.prototype.getFullName = function () {
  return this.firstName + this.lastName;
};

Employee.prototype.amit = "hureree";
Employee.prototype.hello = "majo aa gaya";
Employee.prototype.hurrrrr = "majo aa gayasssssssssss";

let sarangEmployee = new Employee("sarang", "jain", 30);
/* behind the scene js will set below thin
sarangEmployee.__proto__ == Employee.prototype

*/

let amitEmplo = new Employee("amit", "Bab", 24);
/* behind the scene js will set below thin
amitEmplo.__proto__ == Employee.prototype

*/

console.log(sarangEmployee);
console.log(amitEmplo);

sarangEmployee.setFirstName("sarang kumar");
console.log(sarangEmployee.getFullName());
//console.log(amitEmplo.constructor);

//console.log(sarangEmployee.constructor);

//console.log(sarangEmployee instanceof Employee);
//console.log(amitEmplo instanceof Employee);



************************** function constructor and new keyword , class. blue print ,for abstrction and resusability******************

// classes if the suger syntax of function constructor

export class Employee2 {
  // members
  firstName;
  lastName;
  age;

  constructor(fn, ln, age) {
    // inilizing your members
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
  }
  
  setFistName(eName) {
    this.firstName = eName;
  }

  getFullName() {
    return this.firstName + this.lastName;
  }
}

console.log(typeof Employee2);
console.dir(Employee2);

let sarangEmployee2 = new Employee2("sarang", "jain", 30);
/* behind the scene js will set below thin
sarangEmployee2.__proto__ == Employee.prototype */
console.log(sarangEmployee2);

sarangEmployee2.firstName = "test";
// wrongconsole.log(sarangEmployee2);


