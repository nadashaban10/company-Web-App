import React from 'react';
import { FaStore, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const textVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const cardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      className='flex flex-col items-start justify-center h-auto w-[80%] mx-auto pb-[50px]'
      variants={containerVariant}
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      {/* Animate h1 */}
      <motion.h1
        className='text-3xl font-bold text-yellow-500 pt-4'
        variants={textVariant}
      >
        خدماتنا
      </motion.h1>
      {/* Animate p */}
      <motion.p
        className='text-2xl mt-2 text-right text-gray-400'
        variants={textVariant}
      >
        باقة مميزة من الخدمات المختارة
      </motion.p>
      <motion.div
        className='cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7 justify-center mt-10 cursor-pointer'
        variants={containerVariant}
      >
        {/* Card 1 */}
        <motion.div
          className='card bg-white shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-[150px]'
          variants={cardVariant}
        >
          <FaPalette className='text-blue-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميمات الهوية التجارية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>عرف عن نفسك بألوان مختارة وخطوط احترافية وأفكار واعية.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='card bg-yellow-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl h-[150px] sm:h-[300px]'
          variants={cardVariant}
        >
          <FaStore className='text-yellow-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميم المتاجر الإلكترونية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>الأختيار الأمثل لمن يبحث عن الأرباح الوفيرة.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='card bg-green-100 bg-opacity-[90%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-[150px]'
          variants={cardVariant}
        >
          <FaMobileAlt className='text-green-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>تصميم تطبيقات الجوال</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>تواجد على مختلف أنظمة الجوالات وزيادة واضحة في عملائك.</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className='card bg-red-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-[150px]'
          variants={cardVariant}
        >
          <MdComputer className='text-red-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4' />
          <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>برمجة المواقع الإلكترونية</h2>
          <p className='hidden sm:block mt-2 sm:mt-4'>أكواد مرتبة لا تتضمن ثغرات وتتوافق مع الـمعايير العالمية.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
