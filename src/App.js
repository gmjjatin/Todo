import React from "react";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Home />} />
        <Route path="/" element={<Authentication />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
