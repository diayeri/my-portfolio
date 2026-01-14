import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const DefaultLayout: React.FC = () => {
  return (
    <div className='w-full h-screen text-xs duration-300 text-text-light md:text-sm lg:text-base'>
      <Header />
      <main className='w-full flex-grow overflow-y-auto h-[100vh]'>
        <Outlet />
      </main>
      <footer className='w-full mt-8 text-xs text-left text-secondary-light'>
        &copy; {new Date().getFullYear()} UI Dev Portfolio - DY
      </footer>
    </div>
  );
};

export default DefaultLayout;
