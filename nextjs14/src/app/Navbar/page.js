"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setActivePage(page);
    setIsOpen(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case "/about":
        return <h1>About Page</h1>;
      case "/docs":
        return <h1>Docs Page</h1>;
      case "/blogs":
        return <h1>Blogs Page</h1>;
      case "/analytics":
        return <h1>Analytics Page</h1>;
      case "/contact":
        return <h1>Contact Us Page</h1>;
      default:
        return <h1>Home Page</h1>;
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-500 text-white">
        {/* Logo */}
        <div className="text-2xl">AEON</div>

        {/* Links */}
        <div
          className={`flex items-center ml-8 ${
            isOpen ? "flex-col space-y-4" : "hidden"
          } md:flex md:space-x-6`}
        >
          <div className="flex space-x-6">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className={`px-2 ${
                activePage === "/" ? "font-bold underline" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "/about")}
              className={`px-2 ${
                activePage === "/about" ? "font-bold underline" : ""
              }`}
            >
              About
            </a>
            <a
              href="/docs"
              onClick={(e) => handleNavClick(e, "/docs")}
              className={`px-2 ${
                activePage === "/docs" ? "font-bold underline" : ""
              }`}
            >
              Docs
            </a>
            <a
              href="/blogs"
              onClick={(e) => handleNavClick(e, "/blogs")}
              className={`px-2 ${
                activePage === "/blogs" ? "font-bold underline" : ""
              }`}
            >
              Blogs
            </a>
            <a
              href="/analytics"
              onClick={(e) => handleNavClick(e, "/analytics")}
              className={`px-2 ${
                activePage === "/analytics" ? "font-bold underline" : ""
              }`}
            >
              Analytics
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className={`px-2 ${
                activePage === "/contact" ? "font-bold underline" : ""
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Search Input Section */}
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-black"
          />
        </div>

        {/* Hamburger Menu Button for Mobile */}
        {/* <button className="text-3xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? "X" : "☰"}
        </button> */}
      </nav>

      {/* Dynamic Page Content */}
      <div className="p-4">{renderContent()}</div>
    </>
  );
};

export default Navbar;
