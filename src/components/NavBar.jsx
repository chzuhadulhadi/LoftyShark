import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="menubar--section">
      <a className="menubar--skip" href="#welcome">
        Skip to main content
      </a>
      <div className="container menubar--container flex justify-between items-center">
        {/* Logo */}
        <a
          className="menubar--logo-wrap"
          href="https://mondo.com"
          aria-label="return to homepage"
        >
          <img
            className="menubar--logo"
            src="https://mondo.com/wp-content/themes/mondo-2023/images/mondo-logo-w.svg"
            width="180"
            height="64"
            loading="eager"
            alt="Mondo an Addison Group Company"
          />
        </a>

        {/* Menu */}
        <nav
          className={`menubar--menu-wrap ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <ul
            id="menubar--menu"
            className="menubar--menu space-x-4 md:flex"
            aria-labelledby="menubar--button"
          >
            {/* Example menu items */}
            <li className="menu-item">
              <Link to="/who-we-are" className="sf-with-ul">
                Who We Are
              </Link>
              <ul className="sub-menu hidden md:block">
                <li>
                  <Link to="/who-we-are/culture">Culture</Link>
                </li>
                <li>
                  <Link to="/who-we-are/leadership">Leadership</Link>
                </li>
                <li>
                  <Link to="/our-offices">Our Offices</Link>
                </li>
                <li>
                  <Link to="/careers">Join Our Team</Link>
                </li>
                <li>
                  <Link to="/who-we-are/dei">Diversity & Inclusion</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/services" className="sf-with-ul">
                What We Do
              </Link>
              <ul className="sub-menu hidden md:block">
                <li>
                  <Link to="/services/digital-marketing-staffing">
                    Digital Marketing Staffing
                  </Link>
                </li>
                <li>
                  <Link to="/services/creative-staffing">Creative Staffing</Link>
                </li>
                <li>
                  <Link to="/services/it-tech-staffing">IT & Tech Staffing</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/hire-talent" className="sf-with-ul">
                Talent
              </Link>
              <ul className="sub-menu hidden md:block">
                <li>
                  <Link to="/hire-talent">Hire Talent</Link>
                </li>
                <li>
                  <Link to="/get-hired">Get Hired</Link>
                </li>
                <li>
                  <Link to="/jobs">Find a Job</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/insights" className="sf-with-ul">
                Insights
              </Link>
              <ul className="sub-menu hidden md:block">
                <li>
                  <Link to="/insights">Blog</Link>
                </li>
                <li>
                  <Link to="/resources">Hiring Guides</Link>
                </li>
                <li>
                  <Link to="/salary-guide">Salary Guide</Link>
                </li>
                <li>
                  <Link to="/news">In The News</Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="menubar--login-wrap hidden md:block">
          <a
            className="menubar--login-button"
            href="https://mondo.com/vault/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="menubar--hamburger md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="toggle menu"
          aria-haspopup="true"
          aria-controls="menubar--menu"
        >
          <span className="menubar--hamburger-box">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div className="header--shadow-effect"></div>
    </header>
  );
};

export default Navbar;
