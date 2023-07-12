import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import Verify from "./components/Verify";
import Ads from "./components/Ads";

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
        path="create/verify"
        // onClick={() => changeColor("#FFFFFF")}
        element={<Verify />}
      ></Route>
      <Route path="create/ads" element={<Ads />}></Route>
    </Routes>
    // </body>
  );
}

export default App;
