import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

const logger = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
