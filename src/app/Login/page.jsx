"use client";
import Image from "next/image";
import Link from 'next/link';
import React, { useState } from "react";
import Logo from "../assets/bhagavad-gita.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useGoogleLogin } from "@react-oauth/google";
import './responsive.css';
// import Navbar from ".../components/Navbar.jsx";
{/* <Navbar>/ */}



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Google login setup
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login Successful:", tokenResponse);
      // Perform actions with the token response, like fetching user info
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  return (
    <div className="login-main">
      <div className="login-left">
        <Image src={Logo} alt="App Logo" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <Image src={Logo} alt="App Logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button onClick={() => login()} type="button">
                  <Image src={GoogleSvg} alt="Google Icon" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="/SignUp">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
