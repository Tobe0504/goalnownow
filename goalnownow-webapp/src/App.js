import React from "react";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import ScorePageLayout from "./Components/ScorePageLayout/ScorePageLayout";

function App() {
  return (
    <Routes>
      <Route path="/scores" element={<ScorePageLayout />} />
      <Route path="/scores/matches" element={<ScorePageLayout />} />
      <Route path="/scores/tables" element={<ScorePageLayout />} />
      <Route path="/favourites" element={<Layout />} />
      <Route path="/news" element={<Layout />} />
      <Route path="/get-the-app" element={<Layout />} />
    </Routes>
  );
}

export default App;
