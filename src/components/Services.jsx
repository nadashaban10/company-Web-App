import React from "react";
import { FaStore, FaMobileAlt, FaPalette } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
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
      ease: "",
    },
  },
};

// Circle Pattern Component
const CirclePattern = () => (
  <div className="flex flex-col items-start relative">
    {/* Circle Pattern Section */}
    <div className="flex flex-col items-start absolute right-[0px] top-[15px] sm:right-[35px] sm:top-[15px]  rotate-[-90deg] ">
      {[...Array(4)].map((_, rowIndex) => {
        const circleCount = 4 - rowIndex * 1; // Decreasing by 2 circles per row
        return (
          <div key={rowIndex} className="flex flex-row items-center space-x-2 space-x-reverse mb-4">
            {[...Array(circleCount)].map((_, circleIndex) => (
              <React.Fragment key={circleIndex}>
                <div className="sm:w-6 sm:h-6 w-3 h-3 rounded-full bg-gray-300 opacity-[15%]"></div>
                <div className="sm:w-4 sm:h-4 w-2 h-2 rounded-full bg-gray-300 opacity-[15%]"></div>
              </React.Fragment>
            ))}
          </div>
        );
      })}
    </div>
  </div>
);

function Services() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      className="flex flex-col items-start justify-center h-auto w-[80%] mx-auto pb-[50px] mt-[30px]"
      id="services"
      variants={containerVariant}
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      {/* Animate h1 */}
      <motion.h1
        className="text-3xl font-bold text-yellow-500 pt-4"
        variants={textVariant}
      >
        خدماتنا
      </motion.h1>
      {/* Animate p */}
      <motion.p
        className="text-2xl mt-2 text-right text-gray-400"
        variants={textVariant}
      >
        باقة مميزة من الخدمات المختارة
      </motion.p>

      {/* Circle Pattern Section */}
      <div
        className="flex flex-col items-start absolute bottom-[-190px] right-[-40px] "
        style={{ transform: "rotate(-90deg)" }}
      >
        {[...Array(4)].map((_, rowIndex) => {
          const circleCount = rowIndex + 1; // Start with 1 circle and increment per row
          return (
            <div
              key={rowIndex}
              className="flex flex-row items-center space-x-2 space-x-reverse mb-4"
            >
              {[...Array(circleCount)].map((_, circleIndex) => (
                <React.Fragment key={circleIndex}>
                  <div className="w-6 h-6 rounded-full bg-gray-300 opacity-[20%]"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 opacity-[20%]"></div>
                </React.Fragment>
              ))}
            </div>
          );
        })}
      </div>

      <motion.div
        className="cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 justify-center mt-10 cursor-pointer"
        variants={containerVariant}
      >
        {/* Card 1 */}
        <motion.div
          className="card bg-white shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-auto "
          variants={cardVariant}
          role="region"
          aria-labelledby="identity-design"
        >
          <CirclePattern />
          <FaPalette
            className="text-blue-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4"
            aria-label="Palette Icon"
          />
          <h2 id="identity-design" className="text-lg sm:text-2xl font-bold text-gray-600">
            تصميمات الهوية البصرية
          </h2>
          <p className="block sm:block mt-2 sm:mt-4" aria-hidden="true">
            عرف عن نفسك بألوان مختارة وخطوط احترافية وأفكار واعية.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="card bg-yellow-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl h-auto sm:h-[300px]"
          variants={cardVariant}
          role="region"
          aria-labelledby="ecommerce-design"
        >
          <CirclePattern />
          <FaStore
            className="text-yellow-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4"
            aria-label="Store Icon"
          />
          <h2 id="ecommerce-design" className="text-lg sm:text-2xl font-bold text-gray-600">
            تصميم المتاجر الإلكترونية
          </h2>
          <p className="block sm:block mt-2 sm:mt-4" aria-hidden="true">
            الأختيار الأمثل لمن يبحث عن الأرباح الوفيرة.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="card bg-gray-100 bg-opacity-[90%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-auto"
          variants={cardVariant}
          role="region"
          aria-labelledby="mobile-app-design"
        >
          <CirclePattern />
          <FaMobileAlt
            className="text-green-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4"
            aria-label="Mobile Icon"
          />
          <h2 id="mobile-app-design" className="text-lg sm:text-2xl font-bold text-gray-600">
            تصميم تطبيقات الجوال
          </h2>
          <p className="block sm:block mt-2 sm:mt-4" aria-hidden="true">
            تواجد على مختلف أنظمة الجوالات وزيادة واضحة في عملائك.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="card bg-green-100 bg-opacity-[90%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-auto"
          variants={cardVariant}
          role="region"
          aria-labelledby="tech-consulting"
        >
          <CirclePattern />
          <TbReportSearch
            className="text-black text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4"
            aria-label="Search Icon"
          />
          <h2 id="tech-consulting" className="text-lg sm:text-2xl font-bold text-gray-600">
            استشارات تقنيه
          </h2>
          <p className="block sm:block mt-2 sm:mt-4" aria-hidden="true">
            نوفر استشارات تقنية للشركات والافراد للوصول الى افضل الحلول التقنية
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="card bg-red-100 bg-opacity-[70%] shadow-md rounded-3xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl sm:h-[300px] h-auto"
          variants={cardVariant}
          role="region"
          aria-labelledby="maintenance"
        >
          <CirclePattern />
          <CiSettings
            className="text-red-500 text-4xl sm:text-6xl mx-auto mb-2 sm:mb-4"
            aria-label="Settings Icon"
          />
          <h2 id="maintenance" className="text-lg sm:text-2xl font-bold text-gray-600">
            تحديث ومتابعه
          </h2>
          <p className="block sm:block mt-2 sm:mt-4" aria-hidden="true">
            نوفر خدمات تحديث ومتابعه للمواقع والتطبيقات لضمان استمراريه العمل
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
