// projects/LoftyShark/src/components/NavBar.jsx
import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-black text-white p-4 sticky top-0 z-50">
            <div className="text-2xl font-bold">MONDO</div>
            <ul className="flex space-x-8">
                <li className="cursor-pointer">WHO WE ARE</li>
                <li className="cursor-pointer">WHAT WE DO</li>
                <li className="cursor-pointer">TALENT</li>
                <li className="cursor-pointer">INSIGHTS</li>
                <li className="cursor-pointer">CONTACT US</li>
            </ul>
            <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition">
                LOGIN
            </button>
        </nav>
    );
};

export default NavBar;