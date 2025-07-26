
import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ userType }) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{isSignIn ? `${userType} Sign In` : `Create ${userType} Account`}</h2>
        <p>Access affordable and safe raw materials with ease.</p>

        <form className="login-form">
          {!isSignIn && <input type="text" placeholder="Full Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">
            {isSignIn ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsSignIn(!isSignIn)} className="toggle-btn">
            {isSignIn ? "Create one" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
