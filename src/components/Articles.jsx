import React, { useRef } from 'react';
import img1 from '../images/Web-Development.png';
import img2 from '../images/web2.jpg';
import img3 from '../images/web3.jpg';
import { BsArrowDown } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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

function Articles() {
  const ref = useRef();
  const isInView = useInView(ref);

  const articles = [
    {
      id: 1,
      img: img1,
      date: '2021-10-10',
      title: 'تعرف على أساسيات تطوير الويب',
      description: 'مقال يتحدث عن أهم الخطوات لتعلم تطوير الويب وأساسيات العمل عليه لتحقيق نتائج احترافية في مشاريعك القادمة.',
      views: 120,
      color: 'bg-green-400 bg-opacity-40'
    },
    {
      id: 2,
      img: img2,
      date: '2021-10-11',
      title: 'أدوات وتقنيات حديثة في تصميم المواقع',
      description: 'نستعرض في هذا المقال أهم الأدوات والتقنيات التي تساعدك على تصميم مواقع تفاعلية وجذابة بأحدث الأساليب.',
      views: 85,
      color: 'bg-blue-400 bg-opacity-40'
    },
    {
      id: 3,
      img: img3,
      date: '2021-10-12',
      title: 'كيفية تحسين أداء مواقع الويب',
      description: 'مقال متخصص في شرح طرق تحسين سرعة وأداء المواقع الإلكترونية للحصول على تجربة مستخدم أفضل.',
      views: 190,
      color: 'bg-red-300 bg-opacity-40'
    }
  ];

  return (
    <motion.div
      className='articles flex flex-col items-start justify-center h-full w-[80%] mx-auto pb-[50px] mb-[120px] mt-[50px]'
      id="articles"
      variants={listVariant}
      animate={isInView ? "animate" : "initial"}
      ref={ref}
      role="region"
      aria-labelledby="articles-header"
    >
      <h2 id="articles-header" className='text-3xl font-bold text-yellow-500 pt-4'>
        المقالات
      </h2>
      <p className='text-2xl mt-2 text-right text-gray-400'>
        مقالات متنوعة تهمك في عالم تطوير الويب
      </p>
      <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 justify-center mt-10 cursor-pointer space-y-4'>
        {articles.map(article => (
          <div
            key={article.id}
            className='card bg-white shadow-md rounded-3xl p-3 sm:p-3 text-right transform transition duration-300 hover:scale-105 hover:shadow-xl relative sm:h-[450px] h-[450px]'
            role="article"
            aria-labelledby={`article-title-${article.id}`}
            aria-describedby={`article-description-${article.id}`}
            aria-live="polite"
          >
            <div className='relative'>
              <img
                src={article.img}
                alt={`Image for article: ${article.title}`}
                className='w-full h-[200px] object-cover rounded-md'
              />
              <div className={`absolute inset-0 rounded-md ${article.color}`}></div>
            </div>
            <h2
              id={`article-title-${article.id}`}
              className='text-lg sm:text-xl font-bold text-slate-700 hover:text-[rgba(38,89,97,1)] mt-4'
            >
              {article.title}
            </h2>
            <div className='flex items-center justify-start gap-2 text-lg space-x-5 text-gray-400 mt-2'>
              <span className='pl-5'>{article.date}</span>
              <span className='flex items-center gap-1'>
                <IoEyeOutline className='text-gray-500 ml-2 ' />
                {article.views}
              </span>
            </div>
            <p
              id={`article-description-${article.id}`}
              className='sm:block mt-2 sm:mt-2 text-gray-500'
            >
              {article.description}
            </p>
            <div
              className='flex items-center text-[rgba(38,89,97,1)] justify-center gap-2 absolute bottom-4 font-semibold left-3 w-[180px] px-4 py-2 bg-gray-200 text-center rounded-full hover:bg-[#266157] hover:text-white'
              aria-label={`View more about ${article.title}`}
            >
              <button className=''>
                عرض المزيد
              </button>
              <BsArrowDown className='rotate-90 text-lg mt-1 ' />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Articles;
