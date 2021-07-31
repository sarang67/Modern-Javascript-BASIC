import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;



// string in depth

// string literal
// let greet = "Hello sarang";

// let isHappy = false;

// function myname() {
//   return "sarang jain";
// }

// const paste = "Italian pasta";
// console.log(greet);

// console.log("i am a string in single quote");
// console.log("i am a string in double quote");
// console.log("Hello ma\"am  saran'g ");

// // ES 6 template literal

// console.log(`I am sarang jain i like ${paste} !!!`);

// console.log("I am sarang jain i like " + paste + "!!!");
// console.log(`${myname()}`);
// console.log(`${greet.toUpperCase()}`);
// console.log(`${isHappy ? ":)" : ":("}`);

// console.log(`

//  Information
//  -----------
//  My name is sarang jain,
//  My age is 32,
//  I like ${paste}

// `);

/// string type conversion

// console.log(String(55));
// console.log(String("sarang jain"));
// console.log(String(true));
// console.log(String(55 + 10));
// console.log(String(55 + "10"));
// console.log(String(10 + 10 + "55"));
// console.log(String({ name: "sarang jain" }));
// console.log(String([1, 2, 3, 4]));
// console.log(String([1, 2, 3, 4]));
// console.log(String(["Hi", "Hello", "Namastey"]));

// string function constructor using new

console.log(new String("sarang jain"));
console.log(new String("sarang jain").length);

// ============================================

// // string properties and indexes

// //string properties and indexes

// let myInfo = {
//   name: "sarang jain",
//   age: 32,
//   subject: {
//     favSub: "Javascript",
//   },
// };

// // Dot notation
// myInfo.age = 33;
// console.log(myInfo.age);
// myInfo.job = "software engineer";

// // computed member acces operator []

// myInfo["name"] = "sarang kumar jain";
// console.log(myInfo["name"]);
// myInfo["city"] = "gwalior";

// console.log(myInfo);

// let key = "city";

// console.log(myInfo[key]);

// let myInfo2 = {
//   name: "sarang jain",
//   age: 32,
//   subject: {
//     favSub: "Javascript",
//   },
// };

// myInfo2["age"] = 50; // updating the property
// myInfo2["newProperty"] = "new value"; // new property adding

// console.log(myInfo2["newProperty"]); // reading
// console.log(myInfo2);

// const teacherName = "sarang kumar jain";

// // console.log(teacherName.length);

// console.log(teacherName[0]);
// console.log(teacherName["0"]);
// console.log(teacherName["2"]);
// console.log(teacherName["3"]);
// console.log(teacherName["4"]);
// console.log(teacherName["5"]);

// console.log(teacherName[teacherName.length - 1]);
// console.log(new String("sarang kumar jain"));



// // immutability in string

// let myName = "sarang jain";
// let myRefName = myName;

// console.log(myName);
// console.log(myRefName);

// myName += " javascript teacher";
// myRefName = myName.toUpperCase();

// console.log(myName);
// console.log(myRefName);


// ========================

// // typechecking string

// console.log(typeof "sarang jain");
// console.log("sarang jain" instanceof String);
// console.log(new String("sarang jain") instanceof String);
// console.log(String("sarang jain") instanceof String);



// string methods

// String.method() ---> utility

/*
 String.prototype
  var muyName = 'sarang jain'
  myname.method();
*/

// console.log(String.prototype);
// let myName = "sarang jain";
// console.log(myName.charAt(5));

// console.log("sarang jain".indexOf("a"));

// console.log("sarang jain".includes("s"));

// console.log("sarang jain".replace("sarang", "sarang kumar"));

// console.log("sarang jain".replace("sarang", "sarang kumar"));
// console.log("sarang jain".replace(/jain/, "sarang kumar"));

// console.log("sarang jain".slice(2, -1));
// console.log("sarang jain".slice(2, 4));
// console.log("sarang jain".slice(-3));
// console.log("sarang jain".slice(2));

// console.log("sarang~kumar~jain".split("~"));
// console.log("sarang~kumar~jain".split(/~/));

// console.log("        sarang~kumar~jain      ".trim());
// console.log("        sarang~kumar~jain      ".replace(/\s/g, ""));

