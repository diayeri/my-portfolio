import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import SidebarProfile from '../components/SidebarProfile';
import ToggleSwitch from '../components/ToggleSwitch';

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const DefaultLayout: React.FC = () => {
  const location = useLocation();
  const isProjectDetail = /^\/projects\/[\w-]+$/.test(location.pathname);

  useEffect(() => {
    if (!isProjectDetail) {
      window.scrollTo(0, 0);
    }
  }, [location, isProjectDetail]);

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 text-xs md:text-sm lg:text-base">
      {/* Sidebar: always visible except on project detail */}
      {!isProjectDetail && (
        <aside
          className="hidden md:flex flex-col items-center justify-center fixed left-0 top-0 h-screen w-[180px] max-w-xs min-w-[180px] p-6 z-30"
          style={{ background: 'none', borderRight: 'none' }}
        >
          <div className="w-full flex flex-col items-start">
            {/* SidebarProfile: 좌상단에 고정 */}
            <SidebarProfile />
          </div>
          {/* 메뉴 묶음만 좌측 정중앙에 위치 */}
          <nav className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex flex-col items-start px-6">
            <ul className="flex flex-col gap-5 w-full">
              {navItems.map((item) => (
                <li key={item.to} className="w-full">
                  <Link
                    to={item.to}
                    className={`inline py-1 text-left pl-0 transition-colors font-medium font-mono ${location.pathname.startsWith(item.to) ? 'text-primary-light dark:text-primary-dark font-semibold' : 'hover:text-primary-light dark:hover:text-primary-dark'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-start gap-2 w-full mt-auto">
            <footer className="mt-8 text-left text-xs text-gray-400 dark:text-gray-600 w-full">
              &copy; {new Date().getFullYear()} My Portfolio
            </footer>
            <div className="mt-2 mb-1 w-full flex items-center">
              <ToggleSwitch small />
            </div>
          </div>
        </aside>
      )}
      {/* Main content area: only this scrolls */}
      <main className={`${isProjectDetail ? 'w-full' : 'w-full md:ml-[180px]'} flex-grow px-2 md:px-6 lg:px-8 py-4 md:py-8 overflow-y-auto`} style={{height: '100vh'}}>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
