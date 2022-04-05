import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import rootReducer from "../_reducers/index";

const initialState = {};
const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

export const store = createStore(
  initialState,
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
