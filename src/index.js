import { pitch } from "file-loader";
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Advance</h1>
`;


updated above cart to function constructor
=========================================

function Cart(items = []) {
  this.items = Object.freeze(items);
}

Cart.prototype.add = function (item) {
  const state = [...this.items, item];
  this.items = Object.freeze(state);
};
Cart.prototype.remove = function (id) {
  const state = this.items.filter((item) => item.id !== id);
  this.items = Object.freeze(state);
};

const cart = new Cart();
const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotdog);
console.log(cart);

console.log(cart instanceof Cart)

 Classes and Members
========================

class Cart {
  items;
  constructor(items = []) {
    this.items = Object.freeze(items);
  }
  add(item) {
    const state = [...this.items, item];
    this.items = Object.freeze(state);
  }	
  remove(id) {
    const state = this.items.filter((item) => item.id !== id);
    this.items = Object.freeze(state);
  }
}

const cart = new Cart();
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };

cart.add(hotdog);
console.log(cart);



 Private and Static Class Members
======================================


class Cart {
  
  static name = "My Cart";
  
  #items;
  constructor(items = []) {
    this.#items = Object.freeze(items);
  }
  add(item) {
    const state = [...this.#items, item];
    this.#items = Object.freeze(state);
  }
  remove(id) {
    const state = this.#items.filter(item => item.id !== id);
    this.#items = Object.freeze(state);
  }
}

console.log(Cart.name); // Array.isArray

const cart = new Cart();
const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotdog); // [].filter()
console.log(cart);


Setters and Getters
=========================

class Cart {
  #items;
  constructor(items = []) {
    this.value = items;
  }
  set value(items) {
    this.#items = Object.freeze(items);
  }
  get value() {
    return Object.freeze(this.#items);
  }
  get count() {
    return this.value.length;
  }
  add(item) {
    this.value = [...this.value, item];
  }
  remove(id) {
    this.value = this.value.filter((item) => item.id !== id);
  }
}
const cart = new Cart();
const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };
cart.add(hotdog);
console.log(cart.value);