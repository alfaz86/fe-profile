import React from 'react';
import { FaCircle } from 'react-icons/fa6';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ButtonSetCollor from '../Buttons/ButtonSetCollor';

const SidebarMain = ({ isOpen, isLightMode, setCollor, onToggleMode, onColorChange }) => {

    return (
        <div className={` ${isOpen ? 'flex' : 'hidden'} right-0 justify-end fixed w-fit h-100vh py-28 px-3 z-40`}>
            <div className={`flex flex-col gap-3 w-80 h-full ${isLightMode ? 'bg-white border shadow-xl' : 'bg-zinc-800'} rounded-md p-5`}>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-500'>Color Palette</p>
                    <ButtonSetCollor setCollor={setCollor} onColorChange={onColorChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-500'>Dark Mode</p>
                    <div className={`flex flex-row justify-between relative border border-[${setCollor}] rounded text-sm w-24 p-2`}>
                        <button className={`${isLightMode ? `bg-[${setCollor}] text-white` : "text-white"} rounded p-2 `} onClick={onToggleMode}>
                            <MdOutlineLightMode className='text-xl' />
                        </button>
                        <button className={`${isLightMode ? "text-black" : `bg-[${setCollor}] text-white`} rounded p-2 `} onClick={onToggleMode}>
                            <MdOutlineDarkMode className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-500'>Log In</p>
                    <button className={`rounded p-2 
                        ${setCollor === '#6100FF' ? 'bg-[#6100FF]' : ''}
                        ${setCollor === '#EFBF48' ? 'bg-[#EFBF48]' : ''}
                        ${setCollor === '#FFE2D4' ? 'bg-[#FFE2D4]' : ''}
                    `}>
                        Go
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SidebarMain;
