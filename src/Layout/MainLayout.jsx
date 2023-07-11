import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='text-center max-w-7xl mx-auto m-12 p-5'>
            <Link to={'/'} className='text-blue-400 text-center font-bold text-5xl'>User Management System</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;