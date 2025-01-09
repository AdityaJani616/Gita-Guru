"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import logo from "./logo1.svg";
import Link from "next/link";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/" },
  { id: 3, title: "About Us", path: "/About" },
  { id: 4, title: "Contact Us", path: "/Help" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-20">
      <div className="container lg:py-5 py-10 px-3 flex justify-between items-center ">
        {/* Logo section */}
        <div className="text-2xl flex items-center lg:px-10 gap-2 font-bold">
          <div className="text-3xl text-secondary" />
          <p>Gita Guru</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3 justify-start">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.path}
                  className="inline-block py-2 px-3 text-primary hover:underline underline-offset-4 relative group cursor-pointer"
                >
                  {menu.title}
                  <div className="w-full h-[2px] bg-primary absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                </Link>
              </li>
            ))}
            <Link href="/SignUp">
              <button className="primary-btn">Sign In</button>
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden z-10">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu and Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Blur Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on clicking outside
          ></div>

          {/* Mobile Menu */}
          <div className="lg:hidden bg-[#ebc934] shadow-md p-4 mx-auto my-auto relative top-full w-2/3 h-4/5 z-40">
            <ul className="flex flex-col gap-3 text-center">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className="block py-2 px-3 hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              {/* <button className="primary-btn">Sign In</button> */}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
