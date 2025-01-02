import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link as ScrollLink } from "react-scroll";

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
        className={`navbar flex justify-between items-center sm:py-0 py-[50px] text-white sm:pt-[60px] px-[50px] md:px-[20px] transition-all duration-300 ${
          isNavbarFixed
            ? "fixed sm:top-[-30px] top- sm:pb-[20px] p-5 left-0 w-full hero shadow-lg z-50"
            : "relative"
        }`}
      >
        <div className="navbarLogo">
          <h1
            className={`text-4xl md:text-[23px] font-bold transition-all duration-300 mt-[-13px] ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            Logo
          </h1>
        </div>

        <div className="navbarMenu text-2xl md:text-[20px] hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <ScrollLink to="herosection" smooth={true} duration={500} className="line ml-[40px] md:ml-[30px] py-3 cursor-pointer">
                الرئيسيه
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="footer" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer">
                من نحن
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="articles" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer">
                المدونة
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer">
                خدماتنا
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="line ml-2 py-3 cursor-pointer">
                تواصل معنا
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="navbarContact text-2xl cursor-pointer hidden md:flex">
          <div className="navbarContactWhatsapp flex items-center bg-[#25D366] text-white p-2 rounded-full mx-3 icon-hover">
            <FaWhatsapp />
          </div>
          <div className="navbarContactPhone flex items-center bg-red-500 text-white p-2 rounded-full icon-hover">
            <FiPhoneCall />
          </div>
        </div>

        {!isMobileMenuOpen && (
          <div
            className="hamburgerMenu md:hidden cursor-pointer text-[30px] text-white"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </div>
        )}
      </div>

      <div
        className={`smallmenu hero w-[400px] h-[100vh] left-0 fixed top-0 z-40 pt-5 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-4 py-2">
            <h1 className="text-4xl font-bold pr-5">Logo</h1>
            <IoIosCloseCircleOutline
              className="text-[45px] cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <ul className="flex flex-col space-y-3 px-[30px] py-2 text-2xl">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="line ml-6 py-3">
                الرئيسيه
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="line py-3">
                من نحن
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="articles" smooth={true} duration={500} className="line py-3">
                المدونة
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="line py-3">
                خدماتنا
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="line py-3">
                تواصل معنا
              </ScrollLink>
            </li>
          </ul>
        </div>

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
