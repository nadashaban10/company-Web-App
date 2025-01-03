import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import img3 from "../images/2.png";
import img6 from "../images/mobileApp2.jpeg";
import img7 from "../images/mobileApp.jpeg";
import img8 from "../images/mobileApp3.jpeg";


const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const buttonVariant = {
  initial: {
    opacity: 0,
    y: 30,
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
    y: 60,
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

function Work() {
  const ref = useRef();
  const isInView = useInView(ref);

  const [activeButton, setActiveButton] = useState("كل العمال");

  const projects = [
    {
      id: 1,
      name: "اطياف النكهات",
      description: "هذا هو وصف المشروع الأول",
      image: img3,
      category: "تطوير الويب",
      linkproject: "https://atyaf-flavors.com.sa/",
    },
    {
      id: 2,
      name: "WiShare",
      description: "هذا هو وصف المشروع السادس",
      image: img6,
      category: "تطبيقات الجوال",
    },
    {
      id: 2,
      name: "whatsapp direct message" ,
      description: "هذا هو وصف المشروع السابع",
      image: img7,
      category: "تطبيقات الجوال",
    },
    {
      id: 3,
      name: " وصل",
      image: img8,
      category: "تطبيقات الجوال",
    },
   
  ];

  const buttons = [
    "كل العمال",
    "تطوير الويب",
    "تطبيقات الجوال",
    "تصميم الهويات",
  ];

  // Filter projects based on activeButton
  const filteredProjects =
    activeButton === "كل العمال"
      ? projects
      : projects.filter((project) => project.category === activeButton);

  return (
    <>
          <svg
  className="waves"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  shapeRendering="auto"
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    />
  </defs>
  <g className="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="1" fill="rgba(38,89,97,0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(38,89,97, 0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="10" fill="rgba(38,89,97, 0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="19" fill="#E7EEFB" />
  </g>
</svg>
      <motion.div
        className="flex flex-col items-center justify-center h-auto w-full mx-auto pb-[50px] bg-[#E7EEFB] py-[50px] px-[20px] sm:px-[100px] mb-[0px] sm:mb-[10px] mt-[50px]"
        variants={containerVariant}
        animate={isInView ? "animate" : "initial"}
        ref={ref}
      >
        {/* Header Section */}
        <div>
          <motion.h1
            className="text-3xl font-bold text-yellow-500 text-center"
            variants={buttonVariant}
          >
            أعمالنا
          </motion.h1>
          <motion.p
            className="text-xl mt-2 text-center text-gray-400"
            variants={buttonVariant}
          >
            تعرف على بعض من أعمالنا السابقة
          </motion.p>
        </div>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-wrap justify-center mx-5 sm:mx-0 sm:space-x-6 sm:space-x-reverse mt-5 md:gap-y-4"
          variants={containerVariant}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full w-[150px] sm:w-[170px] mb-2 sm:mb-0 ml-[5px]  ${
                activeButton === button
                  ? "bg-yellow-500 text-white"
                  : "border border-gray-500 text-gray-700 hover:bg-yellow-500 hover:text-white hover:border-none bg-white"
              }`}
              variants={buttonVariant}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
          variants={containerVariant}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group rounded-3xl shadow-md cardsHover relative p-3"
              variants={cardVariant}
              onClick={() => {
                if (project.linkproject) {
                  window.open(project.linkproject, "_blank");
                }
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="absolute left-0 right-0 bottom-0 text-lg font-bold text-white bg-[rgb(38,89,97,0.8)] px-5 py-3  rounded-b-3xl">
                <h2>{project.name}</h2>
                <button className="flex items-center space-x-3">
                  <span className="font-normal">مشاهدة تفاصيل العمل</span>
                  <span className="flex items-center justify-center pt-2 px-1">
                    <FaArrowLeft />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
       
      </motion.div>
      <svg
  className="waves"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  shapeRendering="auto"
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    />
  </defs>
  <g className="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="1" fill="rgba(38,89,97,0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(38,89,97, 0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="10" fill="rgba(38,89,97, 0.02)" />
    <use xlinkHref="#gentle-wave" x="48" y="19" fill="#E7EEFB" />
  </g>
</svg>

    </>
  );
}

export default Work;
