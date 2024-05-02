import React from 'react';
import { BsFire } from 'react-icons/bs';
import { FaAngleUp, FaCircle } from 'react-icons/fa6';
import Image from "next/image";
import { IoEye } from 'react-icons/io5';


const SectionProject = ({ isLightMode, setCollor, currentPage, changePage, data, dataContent }) => {

    const scrollToUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <section className={`${isLightMode ? 'bg-white' : ' bg-black'} xl:px-80 md:px-5 py-10 md:pt-40 flex flex-col`}>
            {dataContent.map((value) => (
                <div key={value.id} className="mb-16 mt-16" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} text-2xl font-bold text-center`}>{value.projectTitle}</h1>
                    <p className={`${isLightMode ? 'text-gray-500' : ' text-gray-300'} text-center px-10 md:px-20 py-2`}>{value.project}</p>
                </div>
            ))}
            <div className="">
                <div className="flex flex-row flex-wrap justify-center gap-3">
                    {data.length > 0 ?
                        data.slice((currentPage - 1) * 3, currentPage * 3).map((value, index) => (
                            <div key={index} className="flex flex-col w-64 bg-slate-500 bg-opacity-20 rounded-xl p-2" data-aos="zoom-in-up" data-aos-duration="700">
                                <div key={index} className="relative w-full h-img-xl rounded">
                                    <div className='relative w-full h-[150px]'>
                                        <Image fill className="absolute object-cover rounded-lg" src={value.url_image} alt={'Image'} />
                                        <button className={`bg-[${setCollor}] bg-opacity-40 absolute bottom-2 right-2 p-1 rounded`}>
                                            <IoEye className={`text-2xl text-[${setCollor}]`} />
                                        </button>
                                    </div>
                                </div>
                                <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} p-2 font-bold`}>{value.title}</h1>
                                <p className={`${isLightMode ? 'text-gray-700' : ' text-gray-300'} px-2 text-sm`}>{value.description}</p>
                            </div>
                        ))
                        :
                        <div className={`${isLightMode ? 'text-gray-700' : 'text-white'} text-center border w-64 py-5 rounded`}>
                            <p>204</p>
                            <p>No Content</p>
                        </div>
                    }
                </div>
                <div className="flex justify-center gap-2 py-4 mt-2">
                    {[...Array(Math.ceil(data.length / 3)).keys()].map((pageNumber) => (
                        <FaCircle
                            key={pageNumber}
                            onClick={() => changePage(pageNumber + 1)}
                            className={`text-[${setCollor}] ${data.length > 3 ? "block" : "hidden"} cursor-pointer ${pageNumber + 1 === currentPage ? 'opacity-100' : 'opacity-30'}`}
                        />
                    ))}
                </div>
            </div>
            <div className={`text-white flex flex-col md:flex-row justify-between py-28 px-10 md:px-0`}>
                <button onClick={scrollToUp} className={`bg-[${setCollor}] p-4 rounded-full flex gap-2 items-center`}><FaAngleUp /></button>
                <div className="flex flex-row gap-1 justify-center items-center mt-10 md:mt-0">
                    <span className={`${isLightMode ? 'text-gray-700' : ' text-gray-300'}`}>Coded with</span>
                    <BsFire className={` text-[${setCollor}]`} />
                    <p className={`${isLightMode ? 'text-gray-700' : ' text-gray-300'} `}>@<span className="underline">hamdunmuzadi</span></p>
                </div>
            </div>
        </section>
    );
}

export default SectionProject;
