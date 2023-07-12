import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import Verify from "./components/Verify";

function App() {
  // const [color, changeColor] = useState("#C3B1E1");

  return (
    // <body style={{ background: color }}>
    <Routes>
      <Route
        path="/"
        // onClick={() => changeColor("#C3B1E1")}
        element={<Home />}
      ></Route>
      <Route
        path="create"
        // onClick={() => changeColor("#FFFFFF")}
        element={<Create />}
      ></Route>
      <Route
        path="verify"
        // onClick={() => changeColor("#FFFFFF")}
        element={<Verify />}
      ></Route>
    </Routes>
    // </body>
  );
}

export default App;
