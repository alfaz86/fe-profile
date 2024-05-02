import React from 'react';
import { FaCircle } from 'react-icons/fa6';

const ButtonSetCollor = ({ setCollor, onColorChange }) => {

    const handleCollor = (color) => {
        onColorChange(color);
    };

    return (
        <div className='flex flex-row gap-2'>
            <FaCircle onClick={() => handleCollor("#6100FF")} className={`text-[#6100FF] rounded-full p-1 text-2xl cursor-pointer ${setCollor === '#6100FF' ? 'border border-[#6100FF]' : ''}`} />
            <FaCircle onClick={() => handleCollor("#EFBF48")} className={`text-[#EFBF48] rounded-full p-1 text-2xl cursor-pointer ${setCollor === '#EFBF48' ? 'border border-[#EFBF48]' : ''}`} />
            <FaCircle onClick={() => handleCollor("#FFE2D4")} className={`text-[#FFE2D4] rounded-full p-1 text-2xl cursor-pointer ${setCollor === '#FFE2D4' ? 'border border-[#FFE2D4]' : ''}`} />
        </div>
    );
}

export default ButtonSetCollor;
