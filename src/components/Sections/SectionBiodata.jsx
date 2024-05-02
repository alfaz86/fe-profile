import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import TextureBg from "../Texture/TextureBg";
import TextureBgLight from "../Texture/TextureBgLight";

const Section = ({ isLightMode, setCollor, data }) => {

    return (
        <div className={`${isLightMode ? 'bg-white' : ' bg-black'} flex flex-col relative w-full`}>
            <section className="xl:px-80 md:px-22 px-10 h-100vh flex flex-col justify-center">
                <TextureBg hiddenLigthMode={isLightMode} />
                <TextureBgLight hiddenLigthMode={isLightMode} />
                <div className="flex flex-col md:flex-row justify-between items-center z-10">
                    {data?.map((value, index) => (
                        <div key={index} className="mt-10 md:mt-0 md:w-1/2 w-full">
                            <h1 className={`${isLightMode ? 'text-gray-700' : ' text-white'} text-center md:text-start text-lg md:text-4xl mb-2`}>Hi, I'm {value.name}</h1>
                            <p className={`${isLightMode ? 'text-gray-400' : ' text-gray-600'} text-center md:text-start text-sm md:text-xl mb-2`}>{value.status}</p>
                            <p className={`${isLightMode ? 'text-gray-500' : ' text-gray-300'} text-center md:text-start text-xs md:text-md xl:text-lg `}>{value.bio}</p>
                        </div>
                    ))}
                    <div className="w-[250px] relative">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mt-16">
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stopColor={`${setCollor}`} offset="0%"></stop>
                                    <stop id="stop2" stopColor={`${setCollor}`} offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path fill={`url(#sw-gradient)`}
                                d="M27.6,-32.5C34.7,-26.9,38.7,-17.2,39.2,-7.9C39.6,1.4,36.5,10.3,31.9,18.6C27.4,27,21.4,34.7,13.3,38.5C5.2,42.3,-5.1,42.2,-14,38.8C-22.8,35.4,-30.3,28.6,-35.1,20.3C-39.9,12,-42,2.1,-40.1,-6.8C-38.3,-15.8,-32.5,-23.8,-25.2,-29.4C-17.8,-35,-8.9,-38.1,0.7,-38.9C10.2,-39.7,20.4,-38.1,27.6,-32.5Z"
                                width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
                        </svg>
                        {data.map((value, index) => (
                            <div key={index} className="absolute bottom-0 top-1 left-7 z-30">
                                <Image src={value.image_profil_url} width={200} height={70} alt="Profil" className=" object-cover overflow-visible" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${isLightMode ? 'text-gray-500' : ' text-white'} z-10 flex flex-row w-fit gap-3 justify-center items-center  rounded px-3 py-2 mt-10 animate-bounce`}>
                    <LuMouse className="text-3xl" />
                    <p>Scroll Down</p>
                    <FaChevronDown className="text-xl" />
                </div>
            </section>
        </div>
    );
}

export default Section;
