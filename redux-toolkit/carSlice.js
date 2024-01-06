const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  noOfCars: 20,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    buyCar: (state, action) => {
      state.noOfCars = state.noOfCars - action.payload.quantity;
    },
    addCar: (state, action) => {
      state.noOfCars = state.noOfCars + action.payload.quantity;
    },
  },
});

module.exports = {
  carActions: carSlice.actions,
  carReducer: carSlice.reducer,
};
