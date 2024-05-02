import { TbSettings } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = ({ title_header, header, handleSidebar, isLightMode, setCollor }) => {
    const [isScrollBlur, setIsScrollBlur] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100;
            setIsScrollBlur(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let Header;
    switch (header) {
        case 'main':
            Header = (
                <div className={`fixed top-0 w-full h-full z-50 ${isScrollBlur ? 'bg-black backdrop-blur-md bg-opacity-10' : ''}`}>
                    <div className={`${isLightMode ? 'text-gray-700' : ' text-white'} flex flex-row justify-between items-center w-full py-8 px-6 xl:px-80 `}>
                        <h5 className='font-bold text-xl hidden md:block'>hamdunmuzadi</h5>
                        <div className={`flex flex-row gap-4 md:gap-5 text-[${setCollor}]`}>
                            <FaInstagram className="text-xl cursor-pointer" />
                            <FiGithub className="text-xl cursor-pointer" />
                            <FiLinkedin className="text-xl cursor-pointer" />
                        </div>
                        <TbSettings onClick={handleSidebar} className="text-xl cursor-pointer" />
                    </div>
                </div>
            )

            break;
        case 'to_do_list':
            Header = (
                <div className='w-full px-8 py-5 md:pt-14 md:px-24'>
                    <h1 className='text-xl md:text-2xl border-b pb-6'>{title_header}</h1>
                </div>
            )
            break;

        default:
            break;
    }

    return (
        <div>
            {Header}
        </div>
    );
}

export default Header;
