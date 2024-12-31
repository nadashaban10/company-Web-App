import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Contactimg from "../images/contact1.png";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <div className="contact h-full w-[100%] flex flex-col lg:flex-row my-5  ">
      {/* Image Section (Hidden on small screens) */}
      <div className="rightSection  items-center justify-center flex-1  bg-white rounded-br-[50%] rounded-tl-[50%] py-12 hidden lg:block">
        <motion.img
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          ref={ref}
          src={Contactimg}
          alt="اتصل بنا"
          className="rounded-xl w-[600px] pt-[90px] h-auto pr-10" 
        />
      </div>
      
      {/* Form Section */}
      <div className="leftSection flex items-center justify-center flex-1 mt-5 px-5 sm:w-[95%] md:w-[85%] mx-auto w-[100%] ">
        <div
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="w-full flex flex-col gap-5 bg-gray-50 bg-opacity-[90%] p-12 rounded-xl"
        >
          <h1 variants={listVariant} className="cTitle text-3xl font-bold text-[rgba(38,89,97,1)]">
            تواصل معنا
          </h1>
          <div variants={listVariant} className="formItem flex flex-col gap-2">
            <label className="text-sm">الاسم</label>
            <input
              type="text"
              name="user_username"
              placeholder="Nada Shaban"
              className="p-3 rounded-md border-none"
            
            />
          </div>
          <div variants={listVariant} className="formItem flex flex-col gap-2">
            <label className="text-sm">البريد الإلكتروني</label>
            <input
              type="email"
              name="user_email"
              placeholder="nadashapann@gmail.com"
              className="p-3 rounded-md border-none"
             
            />
          </div>
          <div variants={listVariant} className="formItem flex flex-col gap-2">
            <label className="text-sm">الرسالة</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="اكتب رسالتك..."
              className="p-3 rounded-md border-none"
            
            ></textarea>
          </div>
          <button variants={listVariant} className="formButton  bg-[rgba(38,89,97,1)]  text-white hover:bg-[rgba(68,116,124,1)] py-4 px-10 rounded-xl cursor-pointer" disabled>
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
