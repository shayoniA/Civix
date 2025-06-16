import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CommunityVotingPage from "./CommunityVotingPage"; // Add this import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community-voting" element={<CommunityVotingPage />} /> {/* Add this line */}
    </Routes>
  );
}

export default App;