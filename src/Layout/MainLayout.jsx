import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1 className='text-red-400 text-center font-bold text-5xl'>User Management System</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;