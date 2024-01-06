const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  noOfBikes: 20,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    buyBike: (state, action) => {
      state.noOfBikes = state.noOfBikes - action.payload.quantity;
    },
    addBike: (state, action) => {
      state.noOfBikes = state.noOfBikes + action.payload.quantity;
    },
  },
});

module.exports = {
  bikeActions: bikeSlice.actions,
  bikeReducer: bikeSlice.reducer,
};
