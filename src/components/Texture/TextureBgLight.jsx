import React from 'react';
import Image from "next/image";


const TextureBgLight = ({ hiddenLigthMode }) => {
    return (
        <div className={`${hiddenLigthMode ? 'block' : 'hidden'} absolute w-full left-0 top-0 z-10`}>
            <div className='relative w-full h-[100vh]'>
                <Image fill className='absolute object-cover' src={"/diamond-sunset.svg"} alt='Texture'/>
            </div>
        </div>
    );
}

export default TextureBgLight;
