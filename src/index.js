import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;
// Object in depth

// Object in depth
// object literal
const myobj = {};
console.log(myobj);

const personalInformation = {
  name: "sarang jain",
  age: 32,
  phoneNo: 9405034908,
  isMaried: true,
  profession: "Teacher",
  friends: ["kk", "amar", "adarsh"],
  address: {
    flatNo: 201,
    street: "Gwalior",
    state: "MP",
    pincode: "411014",
    landmark: ["jain temple", "gwalior uravai gate"],
  },
  getPerdonalInformation: function () {
    console.log(this.name, this.age, this.phoneNo);
  },
};

console.log(personalInformation);

// using function constructor
var info1 = new Object();
console.log(info1);

var info2 = Object();
console.log(info2);

console.log(Object(3));
console.log(Object("sarang"));
console.log(Object(true));
console.log(Object([]));
console.log(Object(() => {}));

// immutability with object

let myInfo = { name: "sarang", age: 30 };

let amitInfo = myInfo;

console.log(myInfo);
console.log(amitInfo);

amitInfo.lastname = "bablekar";

console.log(myInfo);
console.log(amitInfo);

let kkInfo = amitInfo;
kkInfo.name = "kk";

console.log(myInfo);
console.log(amitInfo);
console.log(kkInfo);

// *************Object properties and method value
let personlInfo = {
  name: "sarang",
  age: 30,
  getInfo: function () {
    console.log(this.name + this.age);
  },
  getInfo1() {
    console.log(this.name + this.age);
  },
  "abc 123": "I am a valid property",
  100: "i am also a valid property",
};

console.log(personlInfo);

console.log(personlInfo.name);
console.log(personlInfo.age);

console.log(personlInfo["abc 123"]);
console.log(personlInfo["100"]);

// ************Object properties and method value
let personlInfo = {
  name: "sarang",
  age: 30,
  getInfo: function () {
    console.log(this.name + this.age);
  },
  getInfo1() {
    console.log(this.name + this.age);
  },
  100: "no name property is also valid",
  "my propery one": "this string is a valid property",
  "my propery array": [1, 2, 3],
};

console.log(personlInfo);

console.log(personlInfo.name);
console.log(personlInfo.age);

console.log(personlInfo[100]);
console.log(personlInfo["100"]);
console.log(personlInfo["my propery array"][2]);

// Object keys and shorthand

/*
  whene ever key and value are coming from same variable you can make short object
  dynamic key , you can cretae key uisng variable like value , but using [] notation
*/

// let perosnalInfo = {
//   name: "sarang",
//   id: 123,
//   age: 30,
//   getInfo() {
//     console.log(this.name, this.id, this.age);
//   },
// };

// api , progrmattical way you are getting some value

// let myName = "sarang";
// let myId = "xyz";
// let myage = 32;

// let perosnalInfo2 = {
//   name: myName,
//   id: myId,
//   age: myage,
// };

// console.log(perosnalInfo2);

// // shorthand object , key and value are coming from same variable

// let perosnalInfo3 = {
//   myName, // myName:myName
//   myId, // myId:myId
//   myage,
// };

// console.log(perosnalInfo3);

let myName = "sarang";
let myId = "xyz";
let myage = 32;

let mykey = "salary";
let key = "keyfrom api";

let personInfo5 = {
  myName,
  myId,
  myage: myage,
  [mykey]: 30000,
  [key]: "value",
};

console.log(personInfo5);

// Object in depth
// object destructuring

// const trainName = courseInformation.trainer;
// const trainId = courseInformation.id;
// const fullFees = courseInformation.courseFess.full;
//console.log(trainName, trainId, fullFees);

// destructuring
/*
let { trainer, id, courseFess } = {
  trainer: "sarang jain",
  id: "webTrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCourseName: "Javascript",
  courseFess: { JS: 5000, react: 5000, full: 10000 },
};

*/

let courseInformation = {
  trainer: "sarang jain",
  id: "webTrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCourseName: "Javascript",
  courseFess: { JS: 5000, react: 5000, full: 10000 },
};

//let { trainer, id, courseFess:{full} } = courseInformation;

// let { trainer, id, courseFess } = courseInformation;
// let { full } = courseFess;

// console.log(trainer);
// console.log(id);
// console.log(courseFess);
// console.log(full);

// const id = "xyz";

// const { trainer, id: rename, phoneNo, courseFess, ...rest } = courseInformation;

// console.log(trainer);
// console.log(id);
// console.log(rest);
// console.log(rename);

const { full } = courseInformation.courseFess;
console.log(full);

const { courseFess } = courseInformation;

const { full: renamefull } = courseFess;
console.log(renamefull);

// const {
//   courseFess: { full, react },
// } = courseInformation;
// console.log(full, react);

// **************Object property value existence

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 9405034908,
};

console.log(courseInformation);

// property check
if (courseInformation.id) {
  // if id exist then so something
}

// property value check
if (courseInformation.id === "web trainer") {
  // if id exist then so something
}

// Object.keys() , Object.values()

// value check
console.log(Object.values(courseInformation));
const objectValues = Object.values(courseInformation);
console.log(objectValues.includes("web trainer"));

// if(Object.values(courseInformation).includes(9405034908)){}

// keys check

console.log(Object.keys(courseInformation).includes("trainer"));
