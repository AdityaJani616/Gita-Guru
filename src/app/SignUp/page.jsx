"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import Logo from "../assets/bhagavad-gita.png"; // Adjust the logo path as needed
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import './responsive.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="signup-logo">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="signup-form">
          <h2>Create your account</h2>
          <form>
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            
            <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>

            <div className="pass-input-div">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input-field"
              />
              {showConfirmPassword ? (
                <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              ) : (
                <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              )}
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
          </form>

          <p className="signup-footer">
            Already have an account? <a href="/Login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
