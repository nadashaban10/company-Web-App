import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar flex justify-between items-center text-white relative pt-[30px] sm:pt-[60px] px-[50px] md:px-[20px]">
        {/* Logo Section */}
        <div className="navbarLogo ">
          <h1 className={`text-4xl md:text-[23px] font-bold transition-all duration-300 mt-[-13px] ${isMobileMenuOpen ? 'hidden' : 'block'}`}>Logo</h1>
        </div>

        {/* Menu Section (hidden on small screens) */}
        <div className="navbarMenu text-2xl md:text-[20px] hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#home" className="line ml-[40px] md:ml-[30px] py-3">الرئيسيه</a></li>
            <li><a href="#about" className="line ml-2 py-3">من نحن</a></li>
            <li><a href="#services" className="line ml-2 py-3">المدونة</a></li>
            <li><a href="#services" className="line ml-2 py-3">خدماتنا</a></li>
            <li><a href="#contact" className="line ml-2 py-3">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact Section (hidden on small screens) */}
        <div className="navbarContact text-2xl cursor-pointer hidden md:flex">
          <div className="navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover">
            <FaWhatsapp />
          </div>
          <div className="navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover">
            <FiPhoneCall />
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        {!isMobileMenuOpen && (
          <div
            className="hamburgerMenu md:hidden cursor-pointer text-[30px] text-white"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </div>
        )}
      </div>

      {/* Small Mobile Menu (Visible only when isMobileMenuOpen is true) */}
      <div
        className={`smallmenu hero w-[400px] h-[100vh] left-0 fixed top-0 z-40 pt-5 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col">
          {/* Logo and Close Icon */}
          <div className="flex justify-between items-center px-4 py-2">
            <h1 className="text-4xl font-bold pr-5">Logo</h1>
            <IoIosCloseCircleOutline
              className="text-[45px] cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-3 px-[30px] py-2 text-2xl">
            <li><a href="#home" className=" ml-6 px-1">الرئيسيه</a></li>
            <hr />
            <li><a href="#about" className="">من نحن</a></li>
            <hr />
            <li><a href="#services" className="">المدونة</a></li>
            <hr />
            <li><a href="#services" className="">خدماتنا</a></li>
            <hr />
            <li><a href="#contact" className="">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact Section for Mobile */}
        <div className="navbarContact flex text-3xl cursor-pointer p-4">
          <div className="navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover">
            <FaWhatsapp />
          </div>
          <div className="navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover">
            <FiPhoneCall />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
