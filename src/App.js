import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import { TextProvider } from "./Component/TextContext";

function App() {
  return (
    <Router>
      <TextProvider>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path={"/resultPage/:action"} element={<ResultPage />} />
        </Routes>
      </TextProvider>
    </Router>
  );
}

export default App;
