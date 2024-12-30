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
      <div className='navbar flex justify-between items-center text-white relative  pt-[30px] sm:pt-[60px] px-[50px]  '>
        {/* Logo Section */}
        <div className='navbarLogo'>
          <h1 className={`text-4xl font-bold transition-all duration-300 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>Logo </h1>
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
        <div className='navbarContact text-2xl cursor-pointer hidden md:flex'>
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
        <div className='md:hidden flex items-center' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <div className='flex items-center justify-between w-[100%] '>
              <h1 className='text-4xl font-bold pl-[80px]'>Logo</h1> 
              <IoIosCloseCircleOutline  className='text-[45px]  ' />
            </div>
          ) : (
            <FaBars className='text-3xl' />
          )}
        </div>
      </div>

      {/* Small Mobile Menu (Visible only when isMobileMenuOpen is true) */}
      <div 
        className={`smallmenu hero w-[300px] h-[100vh] left-0 fixed z-40  text-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Mobile Menu Items */}
        <div className='navbarMenuMobile'>
          <ul className='flex flex-col space-y-3 px-[30px] py-4 text-2xl mt-[100px]'>
            <li><a href="#home" className='line ml-6'>الرئيسيه</a></li>
            <hr />
            <li><a href="#about" className='line'>من نحن</a></li>
            <hr />
            <li><a href="#services" className='line'>المدونة</a></li>
            <hr />
            <li><a href="#services" className='line'>خدماتنا</a></li>
            <hr />
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
