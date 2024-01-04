// State -> to store some info in the component
// 3 types of state

// 1. local state -> state in the same component
// 2. cross state -> state shared between components -> props drilling
// 3. App state -> state available for entire application -> props drilling

// REDUX -> good to know topic
// Redux -> a predictable state management tool
// (Cross state and App state)

// for small apps -> useContext is enough

// For enterprise apps -> redux
// redux adds more complexity to the code base

/**
 * ------------------------
 * 3 main principles
 * ------------------------
 *
 * 1. Store -> holds the state of entire application -> always use 1 store
 * 2. Action -> event -> what happens in the component
 * 3. Reducer -> connects the component and store -> make changes in the store
 */

// Notes:
// 1. The state of entire app is stored in single store(1 store)
// 2. Only way to change the state is trigger (dispatch) an action
// 3. To specify how the state should change, always inform reducer

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");

const logger = createLogger();

// ACTION TYPES
const BUY_CAR = "BUY_CAR";
const ADD_CAR = "ADD_CAR";
const BUY_BIKE = "BUY_BIKE";
const ADD_BIKE = "ADD_BIKE";
const MAKE_PAYMENT = "MAKE_PAYMENT";

// // Action object
// let obj = {
//   type: BUY_CAR,
//   payload: {
//     quantity: 1,
//     model: "creta",
//     year: 2024,
//     type: "sport",
//   },
// };

// action creator (factory method)
function buyCar() {
  return {
    type: BUY_CAR,
    payload: {
      quantity: 1,
      model: "creta",
      year: 2024,
      type: "sport",
    },
  };
}

function addCar(qty = 1) {
  return {
    type: ADD_CAR,
    payload: {
      quantity: qty,
    },
  };
}

function buyBike(qty = 1) {
  return {
    type: BUY_BIKE,
    payload: {
      quantity: qty,
    },
  };
}

function addBike(qty = 1) {
  return {
    type: ADD_BIKE,
    payload: {
      quantity: qty,
    },
  };
}

function makePayment() {
  return {
    type: MAKE_PAYMENT,
  };
}

// initial state
const initialCarState = {
  noOfCars: 10,
};

const initialBikeState = {
  noOfBikes: 10,
};

// reducer
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return { ...state, noOfCars: state.noOfCars - action.payload.quantity };

    case ADD_CAR:
      return { ...state, noOfCars: state.noOfCars + action.payload.quantity };

    case MAKE_PAYMENT:
      console.log("making payment in car reducer");

    default:
      return state;
  }
};

const bikeReducer = (state = initialBikeState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return { ...state, noOfBikes: state.noOfBikes - action.payload.quantity };

    case ADD_BIKE:
      return { ...state, noOfBikes: state.noOfBikes + action.payload.quantity };

    case MAKE_PAYMENT:
      console.log("making payment in bike reducer");

    default:
      return state;
  }
};

// RootReducer
const rootReducer = combineReducers({
  cars: carReducer,
  bike: bikeReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());

// subscription
// const unsubcribe = store.subscribe(() =>
//   console.log("store changed", store.getState())
// );

// dispatch event
// store.dispatch({
//   type: BUY_CAR,
//   payload: {
//     quantity: 1,
//     model: "creta",
//     year: 2024,
//     type: "sport",
//   },
// });

// store.dispatch(buyCar());
// store.dispatch(buyCar());
// store.dispatch(addCar(5));

// // unsubcribe();

store.dispatch(buyCar());
store.dispatch(addCar(5));
store.dispatch(buyBike());
store.dispatch(addBike(3));

// store.dispatch(makePayment());
