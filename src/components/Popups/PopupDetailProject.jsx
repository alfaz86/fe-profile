import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

const PopupDetail = ({ data, isPopup, handleClose, handleDeleteProject }) => {

    return (
        <div className={`${isPopup ? 'flex' : 'hidden'} fixed top-0 w-full min-h-screen bg-black bg-opacity-40 justify-center items-end`}>
            {data && (
                <div className='w-full bg-white p-5 overflow-y-auto'>
                    <div className='flex flex-col'>
                        <div className="flex flex-row justify-between pb-3">
                            <h1 className="text-xs text-gray-400">DATA ID {data.id} ~ {data.title}</h1>
                            <button onClick={handleClose} className='bg-red-500 text-white rounded p-1 text-xl hover:bg-red-600'><IoClose /></button>
                        </div>
                        <p className="text-md font-bold text-gray-500 text-center">Description</p>
                        <p className="text-sm text-gray-500 py-2 text-center">{data.description}</p>
                        <div className=' p-2 flex justify-center items-center'>
                            {data && (
                                <div key={data.id} className='border-2 rounded hover:border-purple-300 relative w-[256px] h-[150px]'>
                                    <Image src={data.url_image} fill alt="" className="absolute object-cover rounded cursor-pointer" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 gap-2 text-white text-xl">
                        <button onClick={() => handleDeleteProject(data.id)} className='text-red-500 border border-red-500 rounded p-2 hover:bg-red-100'><LuTrash2 /></button>
                        <button onClick={() => console.log('Edit id :', data.id)} className='text-blue-500 border border-blue-500 rounded p-2 hover:bg-blue-100'><FaRegEdit /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupDetail;
