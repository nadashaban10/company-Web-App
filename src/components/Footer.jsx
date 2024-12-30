import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-5 pt-10 pr-[50px]">
      <div className="container mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start">
        
        {/* First Section: Logo and Description */}
        <div className="w-full text-center lg:w-1/3 lg:text-right">
          <h1 className="mb-4 w-32 mx-auto lg:ml-auto lg:mr-0" > Logo</h1>
          <p className="text-sm leading-loose px-4 lg:px-0">
            وعي استثنائي برغبتك في الحصول على خدمة فريدة عبر فريق عمل من المحترفين. نقدم خدمات متكاملة مثل استضافة المواقع، الدعم الفني، الإدارة، تصميم المتاجر، والتسويق الإلكتروني وبالتأكيد تصميم الهوية التجارية وبرمجة تطبيقات الجوال والمواقع الإلكترونية. كل هذا بإحترافية يشهد عليها عملائنا.
          </p>
        </div>

        {/* Second Section: Contact Information */}
        <div className="w-full text-center lg:w-1/3 lg:text-left flex flex-col justify-center items-center space-y-5 pr-[50px]">
          <h3 className="text-lg font-bold ml-[150px]">معلومات التواصل</h3>
          <div className="space-y-3">
            <a href="https://wa.me/your-number" className="flex items-center justify-center lg:justify-start">
              <FaWhatsapp className="w-5 h-5 ml-2" />
              WhatsApp
            </a>
            <p className="flex items-center justify-center lg:justify-start">
              <FaMapMarkerAlt className="w-5 h-5 ml-2" />
              العنوان: شارع الرئيسية
            </p>
            <a href="tel:+123456789" className="flex items-center justify-center lg:justify-start">
              <FaPhone className="w-5 h-5 ml-2" />
              الهاتف: +123456789
            </a>
            <a href="mailto:info@example.com" className="flex items-center justify-center lg:justify-start">
              <FaEnvelope className="w-5 h-5 ml-2" />
              البريد الإلكتروني: info@example.com
            </a>
          </div>
        </div>

        {/* Third Section: Social Icons */}
        <div className="w-full text-center lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">تابعنا</h3>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <a href="#" className="hover:opacity-75">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;