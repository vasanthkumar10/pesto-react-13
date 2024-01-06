import { carReducer } from "./cars/carReducer";
import { combineReducers } from "redux";
import { postsReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
  car: carReducer,
  posts: postsReducer,
});
