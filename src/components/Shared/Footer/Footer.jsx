"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaHome, FaInfoCircle, FaUser, FaSignInAlt, FaMusic, FaVideo, FaBook, FaNewspaper, FaQuestionCircle } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { TbHelpSquareFilled } from "react-icons/tb";
import Image from "next/image";
import logo from "./logo1.svg";

const Footer = () => {
  return (
    <footer className="footer font-small pt-4 bg-gray-200 dark:bg-gray-800">
      <div className="container pt-2 mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Logo */}
          <div className="lg:flex-1 flex items-center justify-center mb-4 lg:mb-0 cursor-default">
            <figure className="text-center">
              <Image
                src={logo}
                alt="Gita Guru"
                width={100}
                height={100}
                className="mx-auto"
              />
              <figcaption className="mt-2">Gita Guru</figcaption>
            </figure>
          </div>

          {/* Middle Section: Chanakya Niti Links */}
          <div className="lg:flex-1 mb-4 lg:mb-0">
            <h3 className="text-uppercase font-bold">चाणक्य नीति</h3>
            <ul>
              <li>
                <Link href="/" className="text-decoration-none flex items-center py-2">
                  <FaHome className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-decoration-none flex items-center py-2">
                  <FaInfoCircle className="mr-1" /> About
                </Link>
              </li>
              <li>
                <Link href="/Help" className="text-decoration-none flex items-center py-2">
                  <TbHelpSquareFilled className="mr-2" /> Help
                </Link>
              </li>
              <li>
                <Link href="/contributor" className="text-decoration-none flex items-center py-2">
                  <FaUser className="mr-2" /> Contributors
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-decoration-none flex items-center py-2">
                  <FaSignInAlt className="mr-2" /> Login
                </Link>
              </li>
              <li>
                <Link href="/Feedback" className="text-decoration-none flex items-center py-2">
                  <FaInfoCircle className="mr-2" /> Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Resources Links */}
          <div className="lg:flex-1 cursor-default">
            <h3 className="text-uppercase font-bold">Resources</h3>
            <ul className="list-none">
              <li>
                <Link href="/resources/chanakyagpt" className="text-decoration-none flex items-center py-2">
                  ChanakyaGpt
                </Link>
              </li>
              <li>
                <Link href="/resources/audio" className="text-decoration-none flex items-center py-2">
                  <FaMusic className="mr-2" /> Audio
                </Link>
              </li>
              <li>
                <Link href="/resources/video" className="text-decoration-none flex items-center py-2">
                  <FaVideo className="mr-2" /> Video
                </Link>
              </li>
              <li>
                <Link href="/resources/book" className="text-decoration-none flex items-center py-2">
                  <FaBook className="mr-2" /> Books
                </Link>
              </li>
              <li>
                <Link href="/resources/news" className="text-decoration-none flex items-center py-2">
                  <FaNewspaper className="mr-2" /> News
                </Link>
              </li>
              <li>
                <Link href="/resources/quiz" className="text-decoration-none flex items-center py-2">
                  <FaQuestionCircle className="mr-2" /> Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4">
        <p>&copy; Chanakya Niti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
