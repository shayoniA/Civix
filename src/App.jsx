import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
