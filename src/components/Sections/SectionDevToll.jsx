import React from 'react';
import { SiExpress, SiMysql } from 'react-icons/si';
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from 'react-icons/tb';

const SectionDevToll = ({ isLightMode, data }) => {
    return (
        <section className={`${isLightMode ? 'bg-white' : ' bg-black'} xl:px-80 md:px-5 py-10 md:pt-40 pt- flex flex-col`}>
            {data.map((value) => (

                <div key={value.id} className="mb-16" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} text-2xl font-bold text-center`}>{value.devTitle}</h1>
                    <p className={`${isLightMode ? 'text-gray-500' : ' text-gray-300'} text-center px-10 md:px-20 py-2`}>{value.devtools}</p>
                </div>
            ))
            }
            <div className="flex flex-row flex-wrap justify-center gap-6">
                <div className={`flex flex-col justify-center gap-3`} data-aos="zoom-in-up" data-aos-duration="700">
                    <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} text-xl font-bold text-center mb-2`}>Frontend</h1>
                    <div className="flex flex-row gap-3">
                        <div className={`${isLightMode ? 'text-gray-500' : ' text-white'} px-3 py-4 bg-slate-500 bg-opacity-20 rounded-xl w-32 h-36 flex flex-col gap-3`}>
                            <TbBrandNextjs className="text-center w-full text-7xl" />
                            <p className="text-center">Next Js</p>
                        </div>
                        <div className={`${isLightMode ? 'text-gray-500' : ' text-white'} px-3 py-4 bg-slate-500 bg-opacity-20 rounded-xl w-32 h-36 flex flex-col gap-3`}>
                            <BiLogoTailwindCss className="text-center w-full text-7xl" />
                            <p className="text-center">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col justify-center gap-3`} data-aos="zoom-in-up" data-aos-duration="700">
                    <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} text-xl font-bold text-center mb-2`}>Backend</h1>
                    <div className="flex flex-row gap-3">
                        <div className={`${isLightMode ? 'text-gray-500' : ' text-white'} px-3 py-4 bg-slate-500 bg-opacity-20 rounded-xl w-32 h-36 flex flex-col gap-3`}>
                            <SiExpress className="text-center w-full text-7xl" />
                            <p className="text-center">Express Js</p>
                        </div>
                        <div className={`${isLightMode ? 'text-gray-500' : ' text-white'} px-3 py-4 bg-slate-500 bg-opacity-20 rounded-xl w-32 h-36 flex flex-col gap-3`}>
                            <SiMysql className="text-center w-full text-7xl" />
                            <p className="text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionDevToll;
