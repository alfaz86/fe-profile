import React from 'react';

const Layout = ({ children }) => {
    return <div className={`flex flex-col relative w-full`}>{children}</div>
}

export default Layout;
