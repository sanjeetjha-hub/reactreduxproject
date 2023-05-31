import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { accountReducer } from "./reducers/acountReducer";
import { bonusReducer } from "./reducers/bonusReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
