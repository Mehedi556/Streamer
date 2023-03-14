import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='min-h-screen w-screen bg-gradient-to-r from-slate-600 to-slate-800'>
            <div className='max-w-screen-2xl m-auto'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;