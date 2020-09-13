import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import RoomPage from "./pages/RoomPage/RoomPage";

const App: React.FC = () => {
  const [{ user }] = useAppContext();

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <LoginPage />
        ) : (
          <Router>
            <Switch>
              <Route path="/rooms/:room_id">
                <RoomPage />
              </Route>
              <Route path="/">
                <RoomPage />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
};

export default App;
