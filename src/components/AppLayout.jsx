import React from 'react';
import Navbar from '../header/navbar';
import Footer from '../footer/footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function AppLayout() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/' || location.pathname.startsWith('/auth');

    return (
        <div className="text-white bg-background">
            <Navbar />

            <div className={`${isAuthPage ? 'min-h-screen' : 'mt-16 pt-5'} w-full`}>
                <Outlet />
            </div>

            {!isAuthPage && <Footer />}
        </div>
    );
}
