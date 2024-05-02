import React from 'react';

const Loading = () => {
    return (
        <div className='fixed z-50 h-100vh w-full flex justify-center items-center bg-black'>
            <div className="loading ml-10">
                <svg width="178px" height="146px">
                    <polyline points="0.314 47.908, 28 47.908, 43.686 96, 86 0, 100 48, 128 48" id="back"></polyline>
                    <polyline points="0.314 47.908, 28 47.908, 43.686 96, 86 0, 100 48, 128 48" id="front"></polyline>
                </svg>
            </div>
        </div>
    );
}

export default Loading;
