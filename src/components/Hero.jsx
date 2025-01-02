import React, { useEffect } from "react";
import Typed from "typed.js";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animition from "../Animation2.json";

function Hero() {
  useEffect(() => {
    const options = {
      strings: [
        "نحن هنا لمساعدتك",
        "نحن نقدم أفضل الخدمات",
        "نقدم أفضل الحلول التقنية", 
        "خبراتنا في خدمتك",
        "حلول مبتكرة تلبي احتياجاتك",
        "شريكك المثالي في النجاح",
        "نواكب تطلعاتك دائمًا",
      ],
      typeSpeed: 50, 
      backSpeed: 50, 
      loop: true, 
    };

    const typed = new Typed(".typed", options); 

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div className="w-full relative sm:pt-[50px] pt-[20px]" id="herosection">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center sm:p-[50px] pt-[40px] px-5 h-[100%] text-white">
        {/* Text Section */}
        <div className="right w-full md:w-[55%] text-center md:text-right mt-7 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5b225] mb-2">
            مرحبا بكم في موقعنا
          </h2>
          {/* Typing Animation */}
          <h1 className="text-2xl md:text-3xl sm:text-4xl font-bold text-[#f5b225] pr-1 space-y-2 ">
            <span className="typed text-shadow-md"></span> {/* Dynamic text will appear here */}
          </h1>
          <p className="text-xl sm:text-3xl md:text-xl mt-3">
            موقعنا يقدم لكم افضل الخدمات فنحن نضع سنوات خبراتنا بين يديك لنساعدك كشركاء نجاح.
          </p>
          <button
            className="text-white px-4 py-2 rounded-full sm:mt-4 text-xl font-bold mt-5 border border-[#f5b225] sm:w-[180px] w-[200px] h-[50px] hover:bg-[#f5b225] hover:text-black"
            aria-label="Learn more about us"
          >
            اعرف عنا المزيد
          </button>
        </div>

        {/* Image Section */}
        <div className="left w-full md:w-[40%] mt-8 md:mt-0" aria-hidden="true">
          <Player
            autoplay
            loop
            src={animition}
            style={{ height: '330px', width: '330px' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
      </div>

      {/* SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#E7EEFB"
          fillOpacity="1"
          d="M0,32L80,53.3C160,75,320,117,480,149.3C640,181,800,203,960,176C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="w-full h-5 bg-[#E7EEFB] z-20 absolute mt-[-10px]"></div>
    </div>
  );
}

export default Hero;
