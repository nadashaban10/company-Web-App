import React from 'react';
import { FaStore, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

function Services() {
  return (
    <div className='flex flex-col items-start justify-center h-auto py-20 w-[85%] mx-auto'>
      <h1 className='text-4xl font-bold text-yellow-500'>خدماتنا</h1>
      <p className='text-2xl mt-2 text-right text-gray-400'>
        باقة مميزة من الخدمات المختارة
      </p>
      <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-10 cursor-pointer'>
        {/* Card 1 */}
        <div className='card bg-yellow-100 shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl'>
          <FaStore className='text-yellow-500 text-6xl mx-auto mb-4' />
          <h2 className='text-2xl font-bold text-gray-600'>تصميم المتاجر الإلكترونية</h2>
          <p className='mt-4'>الأختيار الأمثل لمن يبحث عن الأرباح الوفيرة.</p>
          <button
            className='bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-yellow-400'
          >
            اعرف المزيد
          </button>
        </div>

        {/* Card 2 */}
        <div className='card bg-green-100 shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl'>
          <FaMobileAlt className='text-green-500 text-6xl mx-auto mb-4' />
          <h2 className='text-2xl font-bold text-gray-600'>تصميم تطبيقات الجوال</h2>
          <p className='mt-4'>تواجد على مختلف أنظمة الجوالات وزيادة واضحة في عملائك.</p>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-green-400'
          >
            اعرف المزيد
          </button>
        </div>

        {/* Card 3 */}
        <div className='card bg-blue-100 shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl'>
          <FaPalette className='text-blue-500 text-6xl mx-auto mb-4' />
          <h2 className='text-2xl font-bold text-gray-600'>تصميمات الهوية التجارية</h2>
          <p className='mt-4'>عرف عن نفسك بألوان مختارة وخطوط احترافية وأفكار واعية.</p>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-400'
          >
            اعرف المزيد
          </button>
        </div>

        {/* Card 4 */}
        <div className='card bg-red-100 shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl'>
          <MdComputer  className='text-red-500 text-6xl mx-auto mb-4' />
          <h2 className='text-2xl font-bold text-gray-600'>برمجة المواقع الإلكترونية</h2>
          <p className='mt-4'>أكواد مرتبة لا تتضمن ثغرات وتتوافق مع الـمعايير العالمية.</p>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-400'
          >
            اعرف المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
