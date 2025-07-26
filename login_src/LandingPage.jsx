// src/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">StreetFood Access Portal</div>
        <h1>Empowering Street Food Sellers & Vendors</h1>
      </header>

      <main className="portal-section">
        <img
          src="https://img.icons8.com/ios-filled/100/food-bar.png"
          alt="Food icon"
          className="portal-logo"
        />

        <p>Click below to access your portal</p>

        <div className="portal-buttons">
          <button onClick={() => navigate("/seller")} className="portal-btn pink">
            🍜 Seller Portal
          </button>

          <button onClick={() => navigate("/vendor")} className="portal-btn blue">
            🧺 Vendor Portal
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>
          Powered by <a href="#">SafeFood Network</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
