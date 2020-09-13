import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  UserReducer,
  userInitialState,
  UserProvider,
} from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={userInitialState} reducer={UserReducer}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
