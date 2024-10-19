import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#093046] *: text-white py-10">
      <div className="container justify-center w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div>
        <a
          href="https://mondo.com"
          aria-label="return to homepage"
          className="flex items-center font-bold text-2xl"
        >
          MY SHARK
        </a>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        </div>
        <div>
          
          <ul>
            <li><a href="/who-we-are" className="text-white hover:text-gray-400">WHO WE ARE</a></li>
            <li><a href="/culture" className="text-white hover:text-gray-400">CULTURE</a></li>
            <li><a href="/leadership" className="text-white hover:text-gray-400">LEADERSHIP</a></li>
            <li><a href="/our-offices" className="text-white hover:text-gray-400">OUR OFFICES</a></li>
            <li><a href="/join-our-team" className="text-white hover:text-gray-400">JOIN OUR TEAM</a></li>
            <li><a href="/diversity-inclusion" className="text-white hover:text-gray-400">DIVERSITY & INCLUSION</a></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">WHAT WE DO</h3>
          <ul>
            <li><a href="/digital-marketing-staffing" className="text-white hover:text-gray-400">DIGITAL MARKETING STAFFING</a></li>
            <li><a href="/creative-staffing" className="text-white hover:text-gray-400">CREATIVE STAFFING</a></li>
            <li><a href="/it-tech" className="text-white hover:text-gray-400">IT & TECH STAFFING</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2 ">INSIGHTS</h3>
          <ul>
            <li><a href="/blogs" className="text-white hover:text-gray-400">BLOG</a></li>
            <li><a href="/hiring-guides" className="text-white hover:text-gray-400">HIRING GUIDES</a></li>
            <li><a href="/salary-guide" className="text-white hover:text-gray-400">SALARY GUIDE</a></li>
            <li><a href="/in-the-news" className="text-white hover:text-gray-400">IN THE NEWS</a></li>
            
          </ul>
        </div>
       
       
      </div>
      <div className="border-b-2 mt-5 w-[90%] mx-auto"></div>
      <div className="flex w-[90%] mx-auto justify-between text-center text-sm py-2">
       <div> &copy; 2022 Lofty Logix. All rights reserved. </div>
       <div>
        <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a> | <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>

       </div>
      </div>  
    </footer>
  );
};

export default Footer;
