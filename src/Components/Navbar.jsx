import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronDown } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setopenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setopenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 relative">
      {/* top Bar */}
      <div className="bg-black text-white text-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
    <div className="flex flex-col sm:flex-row sm:items-center">
      <span className="font-bold">DantalClink@gmail.com</span>
      <span className="font-bold sm:pl-6">8958592785</span>
    </div>
    <button
      type="button"
      className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
    >
      Make Appointment
    </button>
  </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="p-2">
            <img src="\logo nnnn.svg" alt="Logo" className=" h-20 w-30" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>

            <li className="relative">
              <button onClick={() => toggleDropdown('about')} className="text-gray-700 hover:text-blue-600 flex">About<FiChevronDown className="mt-2 w-4 h-4 " /></button>
              {openDropdown === 'about' && (
                <ul className="absolute top-full mt-2 bg-white border rounded shadow-lg w-48 p-2 space-y-1 z-50">
                  <li><Link to="/ourmission" className="block hover:text-blue-600">Our Mission</Link></li>
                  <li><Link to="/team" className="block hover:text-blue-600">Team</Link></li>
                 
                </ul>
              )}
            </li>

            <li className="relative">
              <button onClick={() => toggleDropdown('treatment')} className="text-gray-700 hover:text-blue-600 flex">Treatment<FiChevronDown className="mt-2 w-4 h-4 " /></button>
              {openDropdown === 'treatment' && (
                <ul className="absolute top-full mt-2 bg-white border rounded shadow-lg w-48 p-2 space-y-1 z-50">
                  <li><Link to="/DentalCare" className="block hover:text-blue-600">DentalCare</Link></li>
                  <li><Link to="/therapy" className="block hover:text-blue-600">Therapy</Link></li>
                  <li><Link to="/Checkup" className="block hover:text-blue-600">Checkup</Link></li>
                  <li><Link to="/Surgery" className="block hover:text-blue-600">Surgery</Link></li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button onClick={() => toggleDropdown('gallery')} className="text-gray-700 hover:text-blue-600 flex">Gallery<FiChevronDown className="mt-2 w-4 h-4 " /></button>
              {openDropdown === 'gallery' && (
                <ul className="absolute top-full mt-2 bg-white border rounded shadow-lg w-48 p-2 space-y-1 z-50">
                  <li><Link to="/Photos" className="block hover:text-blue-600">Photos/videos</Link></li>
          
                
                </ul>
              )}
            </li>

            <li><Link to="/Servies" className="text-gray-700 hover:text-blue-600">Services</Link></li>
            <li><Link to="/Contactus" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          </ul>

          {/* Mobile Menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <li><Link to="#home" className="block text-gray-700 hover:text-blue-600">Home</Link></li>

          <li>
            <button onClick={() => toggleDropdown('about')} className="w-full text-left text-gray-700 hover:text-blue-600">About <FiChevronDown className="ml-2 w-4 h-4" /></button>
            {openDropdown === 'about' && (
              <ul className="pl-4 space-y-1">
                <li><Link to="/Ourmission" className="block hover:text-blue-600">Our Mission</Link></li>
                <li><Link to="/Team" className="block hover:text-blue-600">Team</Link></li>
               
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => toggleDropdown('treatment')} className="w-full text-left text-gray-700 hover:text-blue-600">Treatment</button>
            {openDropdown === 'treatment' && (
              <ul className="pl-4 space-y-1">
                <li><Link to="/DentalCare" className="block hover:text-blue-600">Dental Care</Link></li>
                <li><Link to="/Therapy" className="block hover:text-blue-600">Therapy</Link></li>
                <li><Link to="/Checkup" className="block hover:text-blue-600">Checkup</Link></li>
                <li><Link to="/Surgery" className="block hover:text-blue-600">Surgery</Link></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => toggleDropdown('gallery')} className="w-full text-left text-gray-700 hover:text-blue-600">Gallery</button>
            {openDropdown === 'gallery' && (
              <ul className="pl-4 space-y-1">
                <li><Link to="/Photos" className="block hover:text-blue-600">Photos</Link></li>
               
              
              </ul>
            )}
          </li>

          <li><Link to="/Servies" className="block text-gray-700 hover:text-blue-600">Services</Link></li>
          <li><Link to="/Contactus" className="block text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
