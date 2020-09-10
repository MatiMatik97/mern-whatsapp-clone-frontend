import React from "react";
import "./App.scss";
import Sidebar from "./layout/Sidebar/Sidebar";
import Chat from "./layout/Chat/Chat";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
