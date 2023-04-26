import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, createStore } from "redux";
import { reducer } from "./Components/Redux/Reducer/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  authReducer: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
