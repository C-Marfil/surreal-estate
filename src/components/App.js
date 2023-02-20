import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.id);
  };

  const handleLogOut = () => {
    window.FB.logout(() => {
      setUserID("");
    });
  };

  return (
    <div className="App">
      <div className="viewer">
        <NavBar onLogin={handleLogin} userID={userID} onLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Properties userID={userID} />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
