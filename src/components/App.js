import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <div className="viewer">
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
