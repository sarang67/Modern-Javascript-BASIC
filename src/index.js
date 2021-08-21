import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;


// object propety add and update **********************

let courseTrainer = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  // city: "pune",
  // currentCOurse: "js",
  // courseswithfee: { js: 5000, react: 5000, angular: 5000 },
};

// // add property
// courseTrainer.city = "pune";
// courseTrainer.currentCOurse = "js";
// courseTrainer.courseswithfee = { js: 5000, react: 5000, angular: 5000 };

// // update
// courseTrainer.city = "mumbai";
// courseTrainer.currentCOurse = "javascript";
// courseTrainer.courseswithfee = { js: 15000, react: 15000, angular: 15000 };
// courseTrainer.courseswithfee.js = 20000;

function addorUpdateProperty(propertyName, propertyvalue) {
  // either add property or update the property
  courseTrainer[propertyName] = propertyvalue;
}

// add property
addorUpdateProperty("city", "pune");
addorUpdateProperty("currentCOurse", "js");
addorUpdateProperty("courseswithfee", { js: 5000, react: 5000, angular: 5000 });

// update property
addorUpdateProperty("city", "mumbai");
addorUpdateProperty("currentCOurse", "javascript");
addorUpdateProperty("courseswithfee", {
  js: 15000,
  react: 15000,
  angular: 15000,
});
console.log(courseTrainer);


// object remove property

let courseTrainer = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCOurse: "js",
  courseswithfee: { js: 5000, react: 5000, angular: 5000 },
};

// delete key word , avod if you can

// delete courseTrainer.city;
// delete courseTrainer.name;
// delete courseTrainer.phoneNo;

const { id, name, phoneNo, ...updatedCoureeTrainer } = courseTrainer;

console.log(courseTrainer);
console.log(updatedCoureeTrainer);


// spread operator**********************

console.log("..............Spread operator.......................");
//let completeInfo = { ...info1, ...info2, ...courseswithfee };

//console.log(completeInfo);

// let courseTrainer = {
//   name: "sarang jain",
//   id: "webtrainer",
//   phoneNo: 9405034908,
//   city: "pune",
//   currentCOurse: "js",
//   courseswithfee: { js: 5000, react: 5000, angular: 5000 },
// };

let courseTrainer1 = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
};

let courseTrainer2 = {
  city: "pune",
  currentCOurse: "js",
};

let courseswithfee = { js: 5000, react: 5000, angular: 5000 };

let courseTrainerInfo11 = {
  city: "mumbai",
  ...courseTrainer1,
  ...courseTrainer2,
  courseswithfee,
};

console.log(courseTrainerInfo11);


// ************shallow copy and deep copy

// Object in depth
// How to break refrence
// object cloning // shallow and deep copy
console.log("..............shallow copy and deep copy.......................");

let courseTrainer = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCOurse: "js",
  courseswithfee: { js: 5000, react: 5000, angular: 5000 },
  address: { strtee: "Gwalior" },
};

//let cloneCourseTrainer = courseTrainer;

// cloning using Object.assign ***************

// this will fail on deep level
//let cloneCourseTrainer = Object.assign({}, courseTrainer);

// shalow
// cloneCourseTrainer.city = "mumbai";
// cloneCourseTrainer.currentCOurse = "javascript";

// deep
// cloneCourseTrainer.courseswithfee.js = 15000;

// cloning using spread concept ***************
// this will fail on deep level
//const cloneCourseTrainer = { ...courseTrainer };

//cloneCourseTrainer.city = "mumbai";
//cloneCourseTrainer.currentCOurse = "javascript";

// deep
//cloneCourseTrainer.courseswithfee.js = 15000;

// how to break deep linking

let cloneCourseTrainerString = JSON.stringify(courseTrainer);
let cloneCourseTrainerStringObj = JSON.parse(cloneCourseTrainerString);

cloneCourseTrainerStringObj.city = "Mumbai";
cloneCourseTrainerStringObj.currentCOurse = "javascript";

//deep
cloneCourseTrainerStringObj.courseswithfee.js = 15000;
console.log(courseTrainer);
console.log(cloneCourseTrainerStringObj);



// object merging  Object.assign and spread operato **********************************

// let courseTrainer = {
//   name: "sarang jain",
//   id: "webtrainer",
//   phoneNo: 9405034908,
//   city: "pune",
//   currentCOurse: "js",
//   courseswithfee: { js: 5000, react: 5000, angular: 5000 },
//   address: "201, vimay nagar behing ganesh temple";
// };

let courseTrainer1 = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
};

let courseTrainer2 = {
  city: "pune",
  currentCOurse: "js",
};

let courseswithfee = { js: 5000, react: 5000, angular: 5000 };

let courseTrainerInfo11 = {
  city: "mumbai",
  ...courseTrainer1,
  ...courseTrainer2,
  courseswithfee,
  address: "201, vimay nagar behing ganesh temple",
};

let courseTrainerInfo22 = Object.assign({}, courseTrainer1, courseTrainer2, {courseswithfee,});

let courseTrainerInfo33 = Object.assign(
  {},
  {
    name: "sarang jain",
    id: "webtrainer",
    phoneNo: 9405034908,
  },
  {
    city: "pune",
    currentCOurse: "js",
  },
  { courseswithfee: { js: 5000, react: 5000, angular: 5000 } }
);

console.log(courseTrainerInfo11);

console.log(courseTrainerInfo22);

console.log(courseTrainerInfo33);



// object type checking *****************************

let courseTrainer = {
  name: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCOurse: "js",
  courseswithfee: { js: 5000, react: 5000, angular: 5000 },
  address: "201, vimay nagar behing ganesh temple",
};

console.log(typeof courseTrainer);
console.log(courseTrainer instanceof Object);
console.log(typeof {});
console.log({} instanceof Object);

console.log(typeof []);
console.log([] instanceof Object);
console.log([] instanceof Array);

console.log(typeof null);
console.log(null instanceof Object);

console.log(new Object() instanceof Object);
console.log(new Array() instanceof Object);
console.log(new Array() instanceof Array);

function checkType(context) {
  const type = Object.prototype.toString.call(context);
  return type.slice(8, -1);
}

console.log("...................");
console.log(checkType({}));
console.log(checkType([]));
console.log(checkType(function () {}));
console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType(new Date()));
console.log(checkType(5));
console.log(checkType("sarang"));
