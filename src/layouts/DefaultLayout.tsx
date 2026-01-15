import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DefaultLayout: React.FC = () => {
  return (
    <div className='flex flex-col w-full min-h-screen text-xs duration-300'>
      <Header />
      <main className='flex-grow w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
