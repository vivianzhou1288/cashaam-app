import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Verify from "./components/Verify";
import Ads from "./components/Ads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="create" element={<Create />}></Route>
      <Route path="create/verify" element={<Verify />}></Route>
      <Route path="create/ads" element={<Ads />}></Route>
    </Routes>
  );
}

export default App;
