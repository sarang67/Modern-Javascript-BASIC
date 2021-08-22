import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;
// iteration of object loop : traditinal way

let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  courseandFees: { js: 5000, react: 5000, full: 5000 },
};

// for in loop (traditinal way)

/*
  for(cons prop in objectname){}
*/

for (const prop in courseInformation) {
  console.log("first level key property--->  ", prop);
  console.log(" first level value--->  ", courseInformation[prop]);

  console.log("========================================");
  // nested loop
  if (
    Object.prototype.toString.call(courseInformation[prop]) ===
    "[object Object]"
  )
    for (const key in courseInformation[prop]) {
      console.log("second level key property--->  ", key);
      console.log(" secon level value--->  ", courseInformation[prop][key]);
    }
}

console.log(courseInformation);


// object in depth

// iteration of object loop : modern way using Object.keys

let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  phoneNo: 9405034908,
  courseandFees: { js: 5000, react: 5000, full: 5000 },
};

const keys = Object.keys(courseInformation);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(courseInformation[key]);
}