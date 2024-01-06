// Action type, Action creator, Reducer and Store

// Slice.js -> action type, action creator and reducer
// store -> store

const { store } = require("./store");
const { bikeActions } = require("./bikeSlice");
const { carActions } = require("./carSlice");
const { fetchPosts } = require("./postSlice");

// console.log("initial state", store.getState());
store.subscribe(() => console.log("state changed", store.getState()));

store.dispatch(fetchPosts("https://jsonplaceholder.typicode.com/posts/1"));

// store.dispatch(
//   bikeActions.buyBike({
//     quantity: 2,
//   })
// );

// store.dispatch(
//   bikeActions.addBike({
//     quantity: 5,
//   })
// );

// store.dispatch(
//   carActions.buyCar({
//     quantity: 1,
//   })
// );

// store.dispatch(
//   carActions.addCar({
//     quantity: 3,
//   })
// );
