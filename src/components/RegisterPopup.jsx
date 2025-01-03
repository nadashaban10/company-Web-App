import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const ContactUsPopup = ({ isOpen, onClose }) => {

    return (
        <Popup 
            open={isOpen} 
            onClose={onClose} 
            contentStyle={{ width: '400px', height: '400px', border: 'none', background: 'transparent' }} // Custom styles for the popup content
        >
            <motion.div 
                className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <div className='absolute top-[50px] text-yellow-500  text-[150px] font-bold'>
                    <IoCheckmarkDoneCircleOutline />
                </div>
                <div className='h-[200px] w-[390px]'></div>
                <h2 className='text-[rgba(68,116,124,1)]  font-bold text-2xl pb-3'>تم إرسال رسالتك بنجاح</h2>
                <p className=' text-[rgba(68,116,124,1)]  mb-5 text-center'>
                    شكراً لتواصلك مع شركة هايمز. لقد تم استلام رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت ممكن.
                </p>
                
            </motion.div>
        </Popup>
    );
};

export default ContactUsPopup;
