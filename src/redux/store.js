import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];

export const store = configureStore(
  {
    reducer: { auth: auth },
  },
  applyMiddleware(...middleware)
);
