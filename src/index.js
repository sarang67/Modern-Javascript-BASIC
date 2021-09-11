import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Advance</h1>
`;


********************2 Object-Oriented Programming********************

1 Procedural Programming
=========================
Prcesural programming means no structure , no immutability maintain , no encapsulation no pattern , just whatever your need write accordingly.

const cart = [];

const addToCart = (item) => {
  cart.push(item);
};

const removeFromCart = (id) => {
  const index = cart.findIndex((item) => item.id === id);
  cart.splice(index, 1);
};

let hotDog = { id: "🌭", name: "posh dog", price: 399 };

addToCart(hotDog);
console.log(cart);

removeFromCart("🌭");
console.log(cart);


02 Object Literals and Encapsulation
=======================================
we can make state , and behaviour wrap one place , which is too easy to understand rather than procedure programming.

const cart = {
  items: [],

  add(item) {
    this.items.push(item);
  },

  remove(id) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
  },
};

//console.log(cart);

let hotDog = { id: "🌭", name: "posh dog", price: 399 };

cart.add(hotDog);
//console.log(cart);

cart.remove("🌭");
console.log(cart);


03 Object Literals and Factory Functions (abstraction , and reusability)
==========================================
A factory function is a pattern which allow us to construct and return a newly created object. it de=oes not use new keyword like  class or function constructor , but still this gives us every time brand new object.

const createCart = (items = []) => {
	 // you can do any thing there and based on that construct object and return it
  return {
    items,
    add(item) {
      this.items.push(item);
    },
    remove(id) {
      const index = this.items.findIndex((item) => item.id === id);
      this.items.splice(index, 1);
    },
  };
};

const cart1 = createCart([{ id: "🌭", name: "posh dog", price: 399 }]);
const miniCart = createCart([
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
]);
const bigCart = createCart([
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
  { id: "🌭", name: "posh dog", price: 399 },
]);

console.log(cart1);
console.log(miniCart);
console.log(bigCart);

let hotDog = { id: "🌭", name: "posh dog", price: 399 };
cart1.add(hotDog);
console.log(cart1);

// problem of muatbality , in this factory  we are getting reusablity ,
//and abstraction but the problem is our state can be mutated outside
// that is the big problem there. our state should not be changed from outside

cart1.items.splice(0, 1);
console.log(cart1);

04  Frozen State and Immutable Patterns
======================================
Here we have solved the problem, where anyonce can not mutate out state , yes here any one can assign any new item , but can not cange existing state means can not be mutated.

const createCart = (items = []) => {
  return {
    //items: Object.freeze(items),
    items,
    add(item) {
      //this.items.push(item);
      const state = [...this.items, item];
      this.items = Object.freeze(state);
    },
    remove(id) {
      // const index = this.items.findIndex((item) => item.id === id);
      // this.items.splice(index, 1);
      const state = this.items.filter((item) => item.id !== id);
      this.items = Object.freeze(state);
    },
  };
};

const cart1 = createCart([{ id: "🌭", name: "posh dog", price: 399 }]);

let hotDog = { id: "🌭", name: "posh dog", price: 399 };
cart1.add(hotDog);

console.log(cart1);
//cart1.items.splice(0, 1);
console.log(Object.isFrozen(cart1.items));
console.log(cart1);
