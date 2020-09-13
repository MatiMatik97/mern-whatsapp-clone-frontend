import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import Chat from "./layout/Chat/Chat";
import LoginPage from "./pages/LoginPage/LoginPage";

const App: React.FC = () => {
  const user = null;

  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/">
              {!user ? (
                <LoginPage />
              ) : (
                <>
                  <Sidebar />
                  <Chat />
                </>
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
