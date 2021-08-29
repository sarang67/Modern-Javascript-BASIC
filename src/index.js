import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;

//1)  finding-array-elements *******************************

let courses = ["angular", "react", "javascript", "typescript"];
const findingIndexForJS = courses.indexOf("javascript");

if (findingIndexForJS !== -1) {
  console.log("Js is very important");
  console.log(courses[findingIndexForJS]);
}

console.log(courses.includes("angular"));

let courseWithId = [
  {
    id: 1,
    name: "JS",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "react",
  },
  {
    id: 4,
    name: "vue",
  },
];

console.log(courseWithId);

// findIndex  ---like  a indexOf
// find

const index = courseWithId.findIndex(callBackfn);

function callBackfn(element, elementIndex, array) {
  if (element.name === "vue") {
    return true;
  }
}

console.log(index);

console.log("==================");
//using short arrow fn

const index2 = courseWithId.findIndex((element, elementIndex) => {
  if (element.name === "vue") {
    return true;
  }
});

console.log(index2);

const index3 = courseWithId.findIndex((element) => element.name === "vue");
console.log(index3);

// find

const finditem = courseWithId.find((element) => element.name === "vue");
console.log(finditem);





//array-shallow-deep-cloning ********************
// all obje pass by refrence , and mutable

let courses = [
  "angular",
  ["v9", 5000],
  "react",
  ["v16", 5000],
  "javascript",
  ["V6", 5000],
  "typescript",
  ["V3", 5000],
];

// problem
//const coursescopy = courses;
//coursescopy[0] = "Angular12";

const courseCLone1 = [...courses];
courseCLone1[0] = "Angular12";

const courseCLone2 = courses.slice();
courseCLone2[0] = "Angular13";

const courseCLone3 = Array.from(courses);
courseCLone3[0] = "Angular14";

// deep problem*
//courseCLone1[1][0] = "v13";

const courseCLone4String = JSON.stringify(courses);
const courseCLone4ParseObj = JSON.parse(courseCLone4String);

console.log(courseCLone4ParseObj);

courseCLone4ParseObj[0] = "angularchage";
courseCLone4ParseObj[1][0] = "V12";

console.log(courseCLone4ParseObj);
// console.log(courseCLone1);
// console.log(courseCLone2);
// console.log(courseCLone3);
// console.log(courses);


// merging-arrays******************

let courses = [
  ["angular", 5000],
  ["react", 5000],
  ["javascript", 5000],
  ["typescript", 5000],
];

let courseVue = ["vue", 5000];
let courseNode = ["node", 5000];

// traditional way , immutable way

const mergeCourse = courses.concat([courseVue], [courseNode]);
//console.log(mergeCourse);

const mergeCourse1 = [...[courseNode], ...courses, ...[courseVue]];

console.log(mergeCourse1);
console.log(courses);


//array-reverse-sort**********************

let courses = ["angular", "react", "javascript", "typescript"];
console.log(courses.reverse());

console.log(courses);

const numbers = [9, 8, 7, 5, 12, 10];

let courses2 = ["typescript", "angular", "react", "javascript"];

console.log(numbers.sort());

console.log(courses2.sort());

console.log("--------------------------------");

const numbers2 = [9, 8, 7, 5, 12, 10];

numbers2.sort((a, b) => {
  console.log(a, b);
  return b - a;
});

console.log(numbers2);

console.log("--------------------------------");

let courseswithId = [
  { id: 18, name: "angular" },
  { id: 28, name: "react" },
  { id: 3, name: "javascript" },
  { id: 45, name: "typescript" },
];

courseswithId.sort((a, b) => {
  return b.id - a.id;
});

console.log(courseswithId);


//arrays-type-checking****************************

console.log(typeof []);
console.log([] instanceof Array);
console.log(new Array() instanceof Array);
console.log([] instanceof Object);

console.log({} instanceof Array);
console.log({} instanceof Object);

console.log(Object.prototype.toString.call([]));

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("sarang"));




//array-imperative(step by step)-iteration********************

let courses = ["angular", "react", "javascript", "typescript"];

for (let i = 0; i <= courses.length; i++) {
  console.log(i);
  console.log(courses[i]);

  const course = courses[i];
  if (course === "typescript") {
    console.log("i want to learn typescript");
  }
}




//break and continue******************

// break
let courses = ["angular", "react", "javascript", "typescript"];
let counter = 0;

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];

  if (course === "javascript") {
    console.log("I am only intrested in Javascript");
    break;
  }
    counter++;
 
}
 console.log(counter);


  
// continue 
let courses = ["angular", "react", "javascript", "typescript"];
let counter = 0;

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];

  if (course === "javascript") {
    console.log("I am only intrested in Javascript");
    continue;
  }
  counter++;
}
console.log(counter);
 

//iteration-for-of

let courses = ["angular", "react", "javascript", "typescript"];

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];
  if(course) {
    console.log(course);
  }
}