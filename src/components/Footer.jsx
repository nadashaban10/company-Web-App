import React from 'react';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Logoo from '../images/Logo.png';

function Footer() {
  return (
    <footer className="footer text-white pb-5 pt-10 mt-[70px]" id="about">
      <div className="container mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start">
        
        {/* First Section: Logo and Description */}
        <div className="w-full text-center lg:w-1/3 lg:mr-[20px] lg:text-right flex flex-col items-center lg:items-start">
         <img  src={Logoo} alt='logo' className='w-[170px] md:w-[170px]'/>
          <p className="sm:text-sm leading-loose px-4 lg:px-0 text-center lg:text-right md:text-lg lg:text-sm">
            وعي استثنائي برغبتك في الحصول على خدمة فريدة عبر فريق عمل من المحترفين. نقدم خدمات متكاملة مثل استضافة المواقع، الدعم الفني، الإدارة، تصميم المتاجر، والتسويق الإلكتروني وبالتأكيد تصميم الهوية التجارية وبرمجة تطبيقات الجوال والمواقع الإلكترونية. كل هذا بإحترافية يشهد عليها عملائنا.
          </p>
        </div>

        {/* Second Section: Contact Information */}
        <div className="w-full text-center lg:w-1/4 lg:mr-[150px] lg:text-left flex flex-col items-center lg:items-start space-y-5">
          <h3 className="text-lg md:text-2xl font-bold lg:text-sm">معلومات التواصل</h3>
          <div className="space-y-3 md:text-xl lg:text-sm">
            <a href="https://wa.me/your-number" className="flex items-center justify-center lg:justify-start">
              <FaWhatsapp className="w-5 h-5 ml-2 text-green-500 lg:w-4 lg:h-4" />
              WhatsApp
            </a>
            <p className="flex items-center justify-center lg:justify-start">
              <FaMapMarkerAlt className="w-5 h-5 ml-2 text-red-500 lg:w-4 lg:h-4" />
              العنوان: شارع الرئيسية
            </p>
            <a href="tel:+123456789" className="flex items-center justify-center lg:justify-start">
              <FaPhone className="w-5 h-5 ml-2 text-blue-500 lg:w-4 lg:h-4" />
              الهاتف: +123456789
            </a>
            <a href="mailto:info@example.com" className="flex items-center justify-center lg:justify-start">
              <FaEnvelope className="w-5 h-5 ml-2 text-white lg:w-4 lg:h-4" />
              البريد الإلكتروني: info@example.com
            </a>
          </div>
        </div>

        {/* Third Section: Social Icons */}
        <div className="w-full text-center lg:w-1/3 flex flex-col items-center">
          <h3 className="text-lg md:text-2xl font-bold mb-4 lg:text-sm">تابعنا</h3>
          <div className="flex justify-center space-x-4 space-x-reverse md:text-xl lg:text-sm">
            <a href="#" className="hover:opacity-75">
              <FaFacebook className="w-6 h-6 text-white lg:w-5 lg:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaTwitter className="w-6 h-6 text-blue-500 lg:w-5 lg:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaInstagram className="w-6 h-6 text-pink-600 lg:w-5 lg:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaLinkedin className="w-6 h-6 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-white md:text-md mt-10 bg-gray-400 bg-opacity-20 sm:w-[250px] w-[250px] flex justify-center items-center h-10 mx-auto rounded-full">
        <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
