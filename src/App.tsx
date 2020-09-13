import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useUserContext } from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import Sidebar from "./layout/Sidebar/Sidebar";
import Chat from "./layout/Chat/Chat";

const App: React.FC = () => {
  const [{ user }] = useUserContext();

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <LoginPage />
        ) : (
          <Router>
            <Switch>
              <Route path="/">
                <>
                  <Sidebar />
                  <Chat />
                </>
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
};

export default App;
