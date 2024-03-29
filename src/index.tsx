import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  AppReducer,
  appInitialState,
  AppProvider,
} from "./contexts/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider initialState={appInitialState} reducer={AppReducer}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
