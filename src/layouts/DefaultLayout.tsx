import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import SidebarProfile from '../components/SidebarProfile';
import ToggleSwitch from '../components/ToggleSwitch';
import LanguageSwitch from '../components/LanguageSwitch';
import LanguageContext from '../context/LanguageContext';

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const DefaultLayout: React.FC = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const isProjectDetail = /^\/projects\/[\w-]+$/.test(location.pathname);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  // 다국어 텍스트 매핑
  const t = (ko: string, en: string) => (language === 'ko' ? ko : en);

  // 언어를 context로 하위 컴포넌트에 전달
  return (
    <LanguageContext.Provider value={language}>
      <div className='h-screen text-xs duration-300 text-text-light dark:text-text-dark md:text-sm lg:text-base'>
        <header
          className='fixed top-0 z-50 flex items-center justify-between w-full px-6 py-5'
          style={{ background: 'none', borderRight: 'none' }}
        >
          <a href='/' className='inline-block w-20'>
            LOGO
          </a>
          <nav>
            <ul className='flex w-full gap-10'>
              {navItems.map((item) => (
                <li key={item.to} className='w-full'>
                  <Link
                    to={item.to}
                    className={`font-medium text-nowrap ${
                      location.pathname.startsWith(item.to)
                        ? 'text-primary dark:text-primary-dark font-semibold'
                        : 'hover:text-primary-light dark:hover:text-primary-dark'
                    }`}
                  >
                    {item.label === 'Projects'
                      ? t('프로젝트', 'Projects')
                      : item.label === 'About'
                        ? t('소개', 'About')
                        : t('연락처', 'Contact')}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center w-20'>
            <ToggleSwitch small />
            <LanguageSwitch
              language={language}
              onToggle={handleLanguageToggle}
            />
          </div>
        </header>

        {/* Main content area: only this scrolls */}
        <main className='w-full flex-grow p-4 md:p-6 overflow-y-auto h-[100vh]'>
          <div className='fixed border top-2 bottom-2 left-2 right-2'></div>
          <Outlet />
        </main>
        <footer className='w-full mt-8 text-xs text-left text-secondary-light dark:text-secondary-dark'>
          &copy; {new Date().getFullYear()} UI Dev Portfolio - DY
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default DefaultLayout;
