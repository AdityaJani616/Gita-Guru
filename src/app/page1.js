// import Image from "next/image";
// import Login from "./Login/page";
// export default function Home() {
//   return (
//   <div>    
//     <Login/>

//   </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Shared/Navbar/Navbar1.jsx";
// import Footer from "@/components/shared/Footer";
import AnimatedCursor from "react-animated-cursor";
import './forPage.css';
import './globals.css'
import { FaAngleDoubleUp } from "react-icons/fa";
// import Main from "@/components/Main Page/page";
const Home= ({ Component, pageProps }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Replace with context or state if needed

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to check the scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`d-flex flex-column ${isDarkMode ? "dark" : ""}`}>
      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color="111, 158, 111"
        outerAlpha={0.8}
        innerScale={1.0}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      {/* <main className="container flex-grow-1 mt-4">
        <Component {...pageProps} />
      </main> */}
      {/* <Footer /> */}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            backgroundColor: isDarkMode ? "#6f9e6f" : "#DFDFB0",
            color: isDarkMode ? "#F5FBFA" : "#333",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FaAngleDoubleUp />
        </button>
      )}
    {/* <Main/> */}
    </div>
    
  );
};

export default Home;
