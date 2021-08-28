import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Modern JavaScript: Basic</h1>
`;
// Array in depth


/************
 *  splice -->
dlt the element  from array , and if you want to put element instad dlt elemet you can put new element using splice
// param1 :_index from where you have to start dlt
// param2 :- count how many no element you want dlt
// param3 :- insert this item place of deleted item or place of( param1)

return --> array with dleted item

*/
//console.log(subject3.splice(0));
//console.log(subject3.splice(0, 1));
//console.log(subject3.splice(0, 2));

//console.log(subject3.splice(1, 1, ["s", "s", "s"]));

// add in between using splice


/************
 *  slice -->
 * param --> starting index
 * param2 --> ending index
 *
 * slice is immutable


Must Read deiffrence between splice and slice method 
https://www.tothenew.com/blog/javascript-splice-vs-slice/
https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
https://dev.to/capscode/difference-between-slice-and-splice-in-javascript-4ahg
 *
 * */





//arrays-add-elements****************************
/*

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

*/
/* 
mutable :- means you are modifying the current or original array.

immutable :- original value can not be disturbed , brand new array wiil be returned.

*/

const subjects = ["JS", "React", "Angular"];

//add in begning Mutable way
subjects.unshift("Vue");

//add in last Mutable way
subjects.push("redux");

console.log(subjects);

console.log("------------------------------");

// immutable way
const subjects1 = ["JS", "React", "Angular"];

//add in begning Mutable way
console.log(["Vue", ...subjects1]);

//add in last Mutable way
console.log(["Vue", ...subjects1, "redux"]);

console.log(subjects1);
console.log("------------------------------");


// fisrt demonstrate splice method all the combination.

// param 1 , delt index, second param delte count , thirt what you want to keep on param1 .
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

const subjects2 = ["JS", "React", "Angular"];
// How to add in between mutable way

subjects2.splice(1, 0, "Vue");
console.log(subjects2);

console.log("-----------------------------------");
// How to add in between imutable way
const subjects3 = ["JS", "React", "Angular", "React"];

console.log([...subjects3.splice(0, 2), "Vue", ...subjects3.splice(0)]);

console.log(subjects3);



//array-remove*******************

/*
The slice() method returns a shallow copy of a portion of an array into a new array object 
selected from begin to end (end not included) where begin and end represent the index of items in that array.
The original array will not be modified.

console.log(subjects.slice(0));
console.log(subjects.slice(1));
console.log(subjects.slice(2));
console.log("--------------------------");
console.log(subjects.slice(0, 0));
console.log(subjects.slice(0, 1));
console.log(subjects.slice(0, 2));

console.log("--------------------------");
console.log(subjects.slice(-1));
console.log(subjects.slice(-2));
console.log(subjects.slice(-3));
console.log("--------------------------");

console.log(subjects.slice(0, -1));
console.log(subjects.slice(0, -2));


*/

// Array Remove

const subjects = ["JS", "React", "Angular"];

// removing from begnining -- mutatable way

let removedItem = subjects.shift();
console.log(removedItem);
console.log(subjects);

// removing from ending -- mutable way

const subjects2 = ["JS", "React", "Angular"];
const removedlast = subjects2.pop();

console.log(subjects2);
console.log(removedlast);

// remove from anywhere immutable way using slice method
// so make your mind and you can remove anything using slice method
const subjects3 = ["JS", "React", "Angular", "redux"];

// remove first element
console.log([...subjects3.slice(1)]);
// remove last element
console.log([...subjects3.slice(0, subjects3.length - 1)]);

// remove from enywhere
const index = 2;

console.log([...subjects3.slice(0, index), ...subjects3.slice(index + 1)]);
