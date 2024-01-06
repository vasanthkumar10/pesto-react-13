const { bikeReducer } = require("./bikeSlice");
const { carReducer } = require("./carSlice");
const { postReducer } = require("./postSlice");

const rootReducer = {
  reducer: {
    bike: bikeReducer,
    car: carReducer,
    post: postReducer,
  },
};

module.exports = {
  rootReducer,
};
