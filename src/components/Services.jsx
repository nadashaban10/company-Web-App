import React from 'react';
import { FaStore, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

function Services() {
  return (
    <div className='flex flex-col items-start justify-center h-auto w-[80%] mx-auto pb-[50px]'>
      <h1 className='text-3xl font-bold text-yellow-500'>خدماتنا</h1>
      <p className='text-2xl mt-2 text-right text-gray-400'>
        باقة مميزة من الخدمات المختارة
      </p>
      <div className='cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7 justify-center mt-10 cursor-pointer'>
        {/* Card 1 */}
        <div className='card bg-blue-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl  sm:h-[300px]h-[150px] '>
          <FaPalette className='text-blue-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميمات الهوية التجارية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>عرف عن نفسك بألوان مختارة وخطوط احترافية وأفكار واعية.</p>
        </div>
        {/* Card 2 */}
        <div className='card bg-yellow-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl  h-[150px] sm:h-[300px]'>
          <FaStore className='text-yellow-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميم المتاجر الإلكترونية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>الأختيار الأمثل لمن يبحث عن الأرباح الوفيرة.</p>
        </div>
               {/* Card 3 */}
               <div className='card bg-green-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-[150px] '>
          <FaMobileAlt className='text-green-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميم تطبيقات الجوال</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>تواجد على مختلف أنظمة الجوالات وزيادة واضحة في عملائك.</p>
        </div>


        {/* Card 4 */}
        <div className='card bg-red-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl  sm:h-[300px] h-[150px] '>
          <MdComputer className='text-red-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>برمجة المواقع الإلكترونية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>أكواد مرتبة لا تتضمن ثغرات وتتوافق مع الـمعايير العالمية.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
