// var, let and const
// hoisting

// hof -> higher order function ->
// takes other fn as arg or returns another fn

// map, filter, reduce, forEach, sort

// const nums = [1, 2, 3, 4, 5, 6, 7];
// // const array = nums.map((num) => num * 2);

// Array.prototype.vasanth = function (callback) {
//   let newArray = [];
//   //   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i]));
//   }

//   return newArray;
// };

// const array = nums.vasanth((num) => num * 2);
// // console.log(array);
// // console.log("nums", nums);

// // const data = [2, 3, 4, 5];
// console.log(data.vasanth((num) => num * 5));

// const person = {
//   name: "vasanth",
//   age: 20,
// };

// const nums = [1, 2, 3, 4, 5];
// nums.__proto__ = person;
// console.log(nums, nums.name, nums.age);
// nums.map((num) => num * 2);

// REACT -> library -> declarative programming
// to render some content on UI

// If a child node is changing, that only will be updated
// If a parent node is changing, the entire subtree will be replaced

// Child changes -> parent will not re-render
// parent changes -> child also re-renders

// function borrowing methods
const vasanth = {
  name: "vasanth",
  age: 10,
};

const virat = {
  name: "virat",
  age: 20,
};

function display(place, country) {
  console.log(
    `My name is ${this.name} and my age is ${this.age}. I'm from ${place}, ${country}`
  );
}

// call
// display.call(vasanth, "chennai", "India");
// display.call(virat, "Delhi", "Pakistan");

// // apply
// display.apply(vasanth, ["chennai", "India"]);
// display.apply(virat, ["Delhi", "Pakistan"]);

// bind
// const vasanthFn = display.bind(vasanth, "chennai", "India");
// vasanthFn();
// vasanthFn();
// vasanthFn();
// vasanthFn();
// vasanthFn();
// vasanthFn();

// function demo() {
//   console.log(this);
// }

//
// const obj = {
//   name: "dasdasda",
//   age: 10,
//   display: function () {
//     function inner() {
//       console.log(this);
//     }

//     inner();
//   },
// };

// obj.display();

// (function (module, __dirname, __pathname, require, exports) {
//   // file code
//   console.log("vasanth");
// })(module, __dirname, __pathname, require, exports);

// console.log("completed");

// require();
// // // IIFE

// function demo() {
//   console.log("dsadasdas");
// }

// demo();

// console.log(module);
// console.log(__dirname);
// console.log(__filename);

// IIFE -> parent -> this -> {}
// function -> parent -> this -> global object
// obj -> parent -> this -> obj
// Arrow fn always points to the parent's object
// const obj = {
//   name: "dasdasda",
//   age: 10,
//   display: function () {
//     const inner = () => {
//       console.log(this);
//     };
//     inner();
//   },
// };

// obj.display();

// function display() {
//   const fn = () => {
//     console.log(this);
//   };

//   fn();
// }

// display();

// const props = {
//   name: "vasanth",
//   age: 20,
// };

// const a = props;
// const b = props;

// a.name = "kumar";

// console.log(a);
// console.log(b);

// const props = 10;
// let a = props;
// const b = props;

// a = 20;
// console.log(a);
// console.log(b);

// const nums = [1, 2, 3, 4, 5];
// const total = nums.reduce((prevValue, currentValue) => {
//   console.log(prevValue, currentValue);
//   return undefined;
// });

// console.log(total);

// function demo() {
//   console.log("demo fn");
// }

// // module.exports = demo; // default

// named export -> export fn
// module.exports = {
//   demo,
// };

function useReducer(reducer, initialState) {
  let count = initialState;

  function dispatch(action) {
    reducer(count, action);
  }
  return [count, dispatch];
}

let [count, dispatch] = useReducer(reducer, 0);

console.log(child());
console.log(child());
console.log(child());
console.log(child());
console.log(child());
console.log(child());
