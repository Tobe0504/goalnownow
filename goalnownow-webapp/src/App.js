import React from "react";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/scores" element={<Layout />} />
      <Route path="/favourites" element={<Layout />} />
      <Route path="/news" element={<Layout />} />
      <Route path="/get-the-app" element={<Layout />} />
    </Routes>
  );
}

export default App;
