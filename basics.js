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
