import React from 'react';
import heroimage from "../../src/images/heroimage.png";

function Hero() {
  return (
    <div className=' w-full relative sm:pt-[50px] pt-[20px]'>
      {/* Content Section */}
      <div className='flex flex-col md:flex-row justify-between items-center sm:p-[50px] pt-[40px] px-5 h-[100%] text-white'>
        
        {/* Text Section (on small screens full width) */}
        <div className='right w-full md:w-[55%] text-center md:text-right mt-8 md:mt-0 '>
          <h1 className='text-4xl md:text-4xl sm:text-5xl font-bold text-[#f5b225]'>مرحبا بكم في موقعنا</h1>
          <p className='text-xl sm:text-3xl md:text-xl mt-4'>
            موقعنا يقدم لكم افضل الخدمات فنحن نضع سنوات خبراتنا بين يديك لنساعدك كشركاء نجاح.
          </p>
          <button className='text-white px-4 py-2 rounded-full sm:mt-4 text-xl font-bold mt-5 border border-[#f5b225] sm:w-[180px] w-[200px] h-[50px] hover:bg-[#f5b225] hover:text-black'>
            اعرف عنا المزيد
          </button>
        </div>

        {/* Image Section (on small screens full width) */}
        <div className='left w-full md:w-[40%] mt-8 md:mt-0'>
          <img src={heroimage} alt='hero' className='w-full' />
        </div>
      </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="#E7EEFB" fill-opacity="1" 
    d="M0,32L80,53.3C160,75,320,117,480,149.3C640,181,800,203,960,176C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
  </path>
</svg>
<div className='w-full h-5 bg-[#E7EEFB] z-20 absolute mt-[-10px]'></div>



    </div>
  );
}

export default Hero;
