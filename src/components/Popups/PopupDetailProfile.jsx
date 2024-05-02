import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

const PopupDetailProfile = ({ data, isPopupProfile, handleClose, handleDeleteProfile }) => {
    return (
        <div className={`${isPopupProfile ? 'flex' : 'hidden'} fixed top-0 w-full min-h-screen bg-black bg-opacity-15 justify-center items-center`}>
            {data && (
                <div className='w-full max-w-lg bg-white p-5 rounded-lg'>
                    <div className='flex flex-col'>
                        <div className="flex flex-row justify-between pb-3">
                            <h1 className="text-xs text-gray-400">DATA ID {data.id} <span>~ {data.username}</span></h1>
                            <button onClick={handleClose} className='bg-red-500 text-white rounded p-1 text-xl hover:bg-red-600'><IoClose /></button>
                        </div>
                        <div className="flex flex-col text-xs">
                            <p className="text-center">Hi I'm {data.name}</p>
                            <p className="text-center">{data.status}</p>
                            <div className="relative flex justify-center">
                                <Image src={data.image_profil_url} width={100} height={50} alt="Profil" className="absoluet overflow-visible" />
                            </div>
                            <p className="text-center">{data.bio}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 gap-2 text-white text-xl">
                        <button onClick={() => handleDeleteProfile(data.id)} className='text-red-500 border border-red-500 rounded p-2 hover:bg-red-100'><LuTrash2 /></button>
                        <button onClick={() => console.log('Edit id :', data.id)} className='text-blue-500 border border-blue-500 rounded p-2 hover:bg-blue-100'><FaRegEdit /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupDetailProfile;
