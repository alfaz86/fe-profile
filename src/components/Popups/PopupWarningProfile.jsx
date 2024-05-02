import React from 'react';

const PopupWarningProfile = ({ isAlready }) => {
    return (
        <div className={`${isAlready ? 'flex' : 'hidden'} w-full h-100vh fixed flex justify-center p-5`}>
            <div className='bg-red-300 w-fit h-[50px] flex justify-center items-center p-3 rounded'>
                <h1 className='text-sm text-red-700'>Profile Sudah Ada</h1>
            </div>
        </div>
    );
}

export default PopupWarningProfile;
