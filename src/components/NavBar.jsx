import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#093046]  text-white py-4">
      {/* <a className="sr-only focus:not-sr-only" href="#welcome">
        Skip to main content
      </a> */}
      <div className="container mx-auto w-[90%] text-white flex justify-between items-center px-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="return to homepage"
          className="flex items-center font-bold text-2xl text-white "
        >
          MY SHARK
        </a>

        {/* Navigation Menu */}
        <nav className={`hidden lg:flex items-center space-x-10`}>
          <ul className="flex space-x-6">
            <li className="relative group">
              <a className="font-[.875rem] text-white ">
                Who We Are
              </a>
              <ul className="absolute w-max px-6 py-4 left-0 hidden group-hover:block bg-white text-black p-2 space-y-2 rounded-md">
                <li>
                  <a href="/culture">Culture</a>
                </li>
                <li>
                  <a href="/join-our-team">Join Our Team</a>
                </li>
               </ul>
            </li>
            <li className="relative group">
              <a href="/what-we-do" className="text-white ">
                What We Do
              </a>
              <ul className="absolute w-max px-6 py-4 left-0 hidden group-hover:block bg-white text-black  p-2 space-y-2 rounded-md">
                <li>
                  <a href="/digital-marketing-staffing">
                    Digital Marketing Staffing
                  </a>
                </li>
                <li>
                  <a href="/creative-staffing">Creative Staffing</a>
                </li>
                <li>
                  <a href="/it-tech">IT & Tech Staffing</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/talent" className="text-white ">
                Talent
              </a>
            </li>
            <li className="relative group">
              <a href="/insights" className="text-white ">
                Insights
              </a>
             
            </li>
            <li>
              <a href="/contact-us" className="text-white ">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Button */}

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden bg-transparent flex flex-col space-y-1 focus:outline-none"
          aria-label="toggle menu"
          onClick={toggleMenu}
        >
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-black text-center text-white mt-4">
          <ul className=" space-y-4 px-4">
            <li>
              <a  className="block">
                Who We Are
              </a>
            </li>
            <li>
              <a href="/what-we-do" className="block">
                What We Do
              </a>
            </li>
            <li>
              <a href="/talent" className="block">
                Talent
              </a>
            </li>
            <li>
              <a href="/insights" className="block">
                Insights
              </a>
            </li>
            <li>
              <a href="/contact" className="block">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
