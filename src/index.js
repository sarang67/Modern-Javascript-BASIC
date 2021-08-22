import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;
// Array in depth


// literal way preferred
const myInformation = [];
console.log(myInformation);

// Obeject , array are pass by refrence and they are mutable
const myInformationRef = myInformation;
myInformation.push(1);
myInformationRef.push(2);

console.log(myInformationRef === myInformation);
console.log([] === []);

console.log(myInformationRef);
console.log(myInformation);

// Array function constructor

console.log(new Array(1, 2, 3)); // below line also same
console.log(Array(1, 2, 3)); // above line also same

console.log(Array(1, 2, 3));
console.log(Array(undefined));
console.log(Array(null));
console.log(Array("sarang"));
console.log(Array({}));

// JS Array is collection of anything

const collection = [
  1,
  true,
  null,
  undefined,
  { name: "sarang", age: 30 },
  [1, 2, 3],
  new Date(),
  function () {},
  new Object(),
];
console.log(collection);


============
// Array in depth

// array indexes and properties
const trainersInformation = ["sarang jain", "pune", "front end devloper"];
console.log(trainersInformation);

console.log(trainersInformation[0]);
console.log(trainersInformation["1"]);
console.log(trainersInformation[2]);

// first element
console.log("first element-->", trainersInformation[0]);

// last element
console.log(
  "first element-->",
  trainersInformation[trainersInformation.length - 1]
);

// emty your array
// trainersInformation = [];
//trainersInformation.length = 0;

trainersInformation.splice(0, trainersInformation.length);

console.log(trainersInformation);


===============================

// multidimenssion Array  : array inside array

const trainercourseandFees = [
  ["javascript", 5000],
  ["React", 5000],
  ["angular", 5000],
];

console.log(trainercourseandFees[0]);
console.log(trainercourseandFees[0][0]);
console.log(trainercourseandFees[0][1]);
console.log(trainercourseandFees[1]);
console.log(trainercourseandFees[1][0]);
console.log(trainercourseandFees[1][1]);
console.log(trainercourseandFees[2]);
console.log(trainercourseandFees[2][0]);
console.log(trainercourseandFees[2][1]);
console.log(trainercourseandFees);



// array is object you can craete propert apart from index
var array = [1, 2, 3, 4];

array["five"] = 5;
array.six = 6;

console.log(array);


====================

// Array in depth
// array destructoiong

const trainerFees = [
  ["Javascript", 5000],
  ["React", 5000],
  ["Angular", 5000],
  ["Vue", 5000],
  ["Node", 5000],
  ["ionic", 5000],
  ["react-native", 5000],
  ["html/css", 5000],
  ["RWD/bootstrap/foundation", 5000],
];

console.log(trainerFees);
const jsInformation = trainerFees[0];
console.log(jsInformation[0], jsInformation[1]);

const ionicInformation = trainerFees[5];
console.log(ionicInformation[0], ionicInformation[1]);

const [, reactInfo, angInfo, [vcourseName, vFees], ...rest] = trainerFees;

console.log(reactInfo, angInfo, vcourseName, vFees, rest);

console.log("----------------------------------");
const arr = [1, 2, 3, 4];

arr["hello"] = "hi";

console.log(arr);

const [one, two, three, four] = arr;
const { hello } = arr;
console.log(one, two, three, four, hello);
