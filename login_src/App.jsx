// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SellerLogin from "./SellerLogin";
import VendorLogin from "./VendorLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/seller" element={<SellerLogin />} />
        <Route path="/vendor" element={<VendorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
