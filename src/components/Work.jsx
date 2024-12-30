import React, { useState } from "react";
import img1 from "../images/ScrAdmin.png";
import img2 from "../images/deco.png";
import img3 from "../images/educa.png";
import img4 from "../images/food.png";
import { FaArrowLeft } from "react-icons/fa";

function Work() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState("كل العمال");

  const projects = [
    {
      id: 1,
      name: "مشروع 1",
      description: "هذا هو وصف المشروع الأول",
      image: img1,
    },
    {
      id: 2,
      name: "مشروع 2",
      description: "هذا هو وصف المشروع الثاني",
      image: img2,
    },
    {
      id: 3,
      name: "مشروع 3",
      description: "هذا هو وصف المشروع الثالث",
      image: img3,
    },
    {
      id: 4,
      name: "مشروع 4",
      description: "هذا هو وصف المشروع الرابع",
      image: img4,
    },
    {
      id: 5,
      name: "مشروع 5",
      description: "هذا هو وصف المشروع الخامس",
      image: img1,
    },
    {
      id: 6,
      name: "مشروع 6",
      description: "هذا هو وصف المشروع السادس",
      image: img2,
    },
    {
      id: 7,
      name: "مشروع 7",
      description: "هذا هو وصف المشروع السابع",
      image: img3,
    },
    {
      id: 8,
      name: "مشروع 8",
      description: "هذا هو وصف المشروع الثامن",
      image: img4,
    },
  ];

  const buttons = [
    "كل العمال",
    "المتاجر الاكترونية",
    "تصميم الهويات",
    "تصميم المواقع",
    "تطبيقات الجوال",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-auto w-full mx-auto pb-[50px] bg-gray-50 py-[100px] px-[20px] sm:px-[100px]">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-yellow-500 text-center">
          أعمالنا
        </h1>
        <p className="text-xl mt-2 text-center text-gray-400">
          تعرف على بعض من أعمالنا السابقة
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center mx-5 sm:mx-0 sm:space-x-6 sm:space-x-reverse mt-5">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full w-full sm:w-[170px] mb-2 sm:mb-0 ${
              activeButton === button
                ? "bg-yellow-500 text-white"
                : "border border-gray-500 text-gray-700 hover:bg-yellow-500 hover:text-white hover:border-none"
            }`}
            onClick={() => setActiveButton(button)}
          >
            {button}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-300 rounded-3xl shadow-md cardsHover relative p-3"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="absolute left-0 right-0 bottom-0 text-lg font-bold text-white bg-[rgba(8,4,82,0.4)] px-5 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2>{project.name}</h2>
              <button className="flex items-center space-x-3">
                <span className="font-normal">مشاهدة تفاصيل العمل</span>
                <span className="flex items-center justify-center pt-2 px-1">
                  <FaArrowLeft />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
