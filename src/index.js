import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { rrtableReducer } from "react-redux-table";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

export const rootReducer = combineReducers({
  rrtable: rrtableReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
