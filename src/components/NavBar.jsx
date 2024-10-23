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
      <div className="container mx-auto w-[90%] flex justify-between items-center px-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="return to homepage"
          className="flex items-center font-bold text-2xl"
        >
          MY SHARK
        </a>

        {/* Navigation Menu */}
        <nav className={`hidden lg:flex items-center space-x-10`}>
          <ul className="flex space-x-6">
            <li className="relative group">
              <a href="/who-we-are" className="font-[.875rem]">
                Who We Are
              </a>
              <ul className="absolute w-max px-6 py-4 left-0 hidden group-hover:block bg-white text-black p-2 space-y-2 rounded-md">
                <li>
                  <a href="/culture">Culture</a>
                </li>
                <li>
                  <a href="/leadership">Leadership</a>
                </li>
                <li>
                  <a href="/our-offices">Our Offices</a>
                </li>
                <li>
                  <a href="/join-our-team">Join Our Team</a>
                </li>
                <li>
                  <a href="/diversity-inclusion">Diversity & Inclusion</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/what-we-do" className="">
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
              <a href="/talent" className="">
                Talent
              </a>
              <ul className="absolute left-0 w-max px-6 py-4 hidden group-hover:block bg-white text-black p-2 space-y-2 rounded-md">
                <li>
                  <a href="/hire-talent">Hire Talent</a>
                </li>
                <li>
                  <a href="/get-hired">Get Hired</a>
                </li>
                <li>
                  <a href="/find-a-job">Find a Job</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/insights" className="">
                Insights
              </a>
              <ul className="absolute left-0 w-max px-4 py-4 hidden group-hover:block bg-white text-black p-2 space-y-2 rounded-md">
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/hiring-guides">Hiring Guides</a>
                </li>
                <li>
                  <a href="/salary-guide">Salary Guide</a>
                </li>
                <li>
                  <a href="/in-the-news">In The News</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact-us" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Button */}

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden flex flex-col space-y-1 focus:outline-none"
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
        <nav className="lg:hidden bg-black text-white mt-4">
          <ul className="space-y-4 px-4">
            <li>
              <a href="/who-we-are" className="block">
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
