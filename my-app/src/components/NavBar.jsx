import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';  // Importing icons for the menu toggle

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // State to toggle mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='navbar flex justify-between items-center text-white mt-5 py-[20px] px-[50px] fixed w-full z-50'>
        {/* Logo Section */}
        <div className='navbarLogo'>
          <h1 className='text-4xl font-bold'>Logo</h1>
        </div>

        {/* Menu Section (hidden on small screens) */}
        <div className='navbarMenu text-2xl hidden md:flex'>
          <ul className='flex space-x-8'>
            <li><a href="#home" className='line ml-6'>الرئيسيه</a></li>
            <li><a href="#about" className='line'>من نحن</a></li>
            <li><a href="#services" className='line'>المدونة</a></li>
            <li><a href="#services" className='line'>خدماتنا</a></li>
            <li><a href="#contact" className='line'>تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact Section (hidden on small screens) */}
        <div className='navbarContact flex text-2xl cursor-pointer hidden md:flex'>
          <div className='navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover'>
            <FaWhatsapp />
            <a href="https://wa.me/01111111111" target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'></a>
          </div>
          <div className='navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover'>
            <FiPhoneCall />
            <a href="tel:01111111111" className='hover:text-gray-400'></a>
          </div>
        </div>

        {/* Mobile Menu Toggle (Visible on small screens) */}
        <div className='md:hidden' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className='text-3xl' />
          ) : (
            <FaBars className='text-3xl' />
          )}
        </div>
      </div>

      {/* Small Mobile Menu (Visible only when isMobileMenuOpen is true) */}
      <div className={`smallmenu hero w-[200px] h-[100vh] left-0 fixed z-40 bg-black text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Mobile Menu Items */}
        <div className='navbarMenuMobile  '>
          <ul className='flex flex-col space-y-4 px-[30px] py-5 text-2xl mt-[80px] '>
            <li><a href="#home" className='line ml-6'>الرئيسيه</a></li>
            <li><a href="#about" className='line'>من نحن</a></li>
            <li><a href="#services" className='line'>المدونة</a></li>
            <li><a href="#services" className='line'>خدماتنا</a></li>
            <li><a href="#contact" className='line'>تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact Section for Mobile */}
        <div className='navbarContact flex text-3xl cursor-pointer p-4'>
          <div className='navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover'>
            <FaWhatsapp />
            <a href="https://wa.me/01111111111" target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'></a>
          </div>
          <div className='navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover'>
            <FiPhoneCall />
            <a href="tel:01111111111" className='hover:text-gray-400'></a>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default NavBar;
