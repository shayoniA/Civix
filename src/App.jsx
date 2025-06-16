import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;