import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link as ScrollLink } from "react-scroll";
import Logoo from '../images/Logo.png';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar flex justify-between items-center sm:py-0 py-[10px] text-white sm:pt-[60px] px-[20px] md:px-[20px] transition-all duration-300 ${isNavbarFixed ? "fixed sm:top-[-30px] top-0 sm:pb-[20px] p-2 z-30 left-0 w-full hero shadow-lg " : "relative"}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="navbarLogo w-[170px] md:w-[170px] cursor-pointer mt-1" >
          <img  src={Logoo} alt='logo' loading='lazy'
          width={170} height={170}
            className={`text-4xl md:text-[23px] font-bold transition-all duration-300 my-[1px] mx-1 ${isMobileMenuOpen ? "hidden" : "block"}`}
            aria-hidden={isMobileMenuOpen ? "true" : "false"}
          />
         
        </div>

        <div className="navbarMenu text-2xl md:text-[20px] hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <ScrollLink to="herosection" smooth={true} duration={500} className="line ml-[40px] md:ml-[30px] py-3 cursor-pointer" role="link" aria-label="Go to Home Section">
                الرئيسيه
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="footer" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer" role="link" aria-label="Go to About Us">
                من نحن
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="articles" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer" role="link" aria-label="Go to Articles Section">
                المدونة
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer" role="link" aria-label="Go to Services Section">
                خدماتنا
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer" role="link" aria-label="Go to Contact Section">
                تواصل معنا
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="navbarContact text-2xl cursor-pointer hidden md:flex" role="region" aria-labelledby="contact-us-section">
          <div className="navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover" aria-label="Contact us via WhatsApp">
            <FaWhatsapp />
          </div>
          <div className="navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover" aria-label="Call us">
            <FiPhoneCall />
          </div>
        </div>

        {!isMobileMenuOpen && (
          <div
            className="hamburgerMenu md:hidden cursor-pointer text-[30px] text-white z-50"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
          >
            <FaBars />
          </div>
        )}
      </div>

      <div
        className={`smallmenu hero w-full z-50 h-[100vh] left-0 fixed top-0 pt-8 text-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="region"
        aria-labelledby="mobile-menu-section"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 ">
          <img 
          width={170} height={170}
          loading='lazy'
          src={Logoo} alt='logo' className='w-[170px] mx-5 '
             
            />
            <IoIosCloseCircleOutline
              className="text-[45px] cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            />
          </div>
          <ul className="flex flex-col space-y-3 px-[30px] py-2 text-2xl">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="line ml-6 py-3" role="link" aria-label="Go to Home Section">
                الرئيسيه
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="line py-3" role="link" aria-label="Go to About Us">
                من نحن
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="articles" smooth={true} duration={500} className="line py-3" role="link" aria-label="Go to Articles Section">
                المدونة
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="line py-3" role="link" aria-label="Go to Services Section">
                خدماتنا
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="line py-3" role="link" aria-label="Go to Contact Section">
                تواصل معنا
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="navbarContact flex text-3xl cursor-pointer p-4" aria-labelledby="contact-us-section">
          <div className="navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover" aria-label="Contact us via WhatsApp">
            <FaWhatsapp />
          </div>
          <div className="navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover" aria-label="Call us">
            <FiPhoneCall />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
