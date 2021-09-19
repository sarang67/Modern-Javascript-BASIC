import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Advance</h1>
`;

JS : advanc
1) inheritance in ES5
2) inheriatnce using class and extends and what problem this solbe , abstract class

// 1) inheritance in ES5

function Employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Employee.prototype.getFullname = function () {
  console.log(this.firstName + this.lastName);
};

// =======================================

function EmployeeSal(fn, ln, salary) {
  Employee.call(this, fn, ln);
  this.salary = salary;
}

EmployeeSal.prototype = Object.assign(Employee.prototype);

EmployeeSal.prototype.getFullInfo = function () {
  console.log(this.firstName + this.lastName + this.salary);
};

let sarangEmp = new EmployeeSal("sarang", "jain", 5000);

// behind the scene
// sarangEmp.__proto__ = EmployeeSal.prototype
console.log(sarangEmp);
console.log(sarangEmp.getFullInfo());
console.log(sarangEmp.getFullname());


//  2) inheriatnce using class and extends and what problem this solbe , abstract class

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

class Product {
  id;
  name;
  price;

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  get displayName() {
    return this.id + this.name;
  }
}

class Food extends Product {
  extra = [];
  constructor(id, name, price, extra = []) {
    super(id, name, price);
    this.extra = extra;
  }
}

class Drink extends Product {
  size = "";
  constructor(id, name, price, size) {
    super(id, name, price);
    this.size = size;
  }
}

const cart = new Cart();

//const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };

const hotdog = new Food("🌭", "Posh Dog", 399, ["onion"]);
const burger = new Food("🍔", "super burger", 455, ["onion", "catchup"]);
const pizza = new Food("🍕", "cheese pizza", 999);

const smallDrink = new Drink("🍾", "small dring", 299, "small");
const mediumDrink = new Drink("🍷", "small dring", 299, "medium");
const largeDrink = new Drink("🥂", "large dring", 299, "large");

cart.add(hotdog);
cart.add(burger);
cart.add(pizza);

cart.add(smallDrink);
cart.add(mediumDrink);
cart.add(largeDrink);

console.log(cart.value);

console.log(largeDrink instanceof Drink);
console.log(largeDrink instanceof Product);

