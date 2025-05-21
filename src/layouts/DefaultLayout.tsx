import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

/**
 * 기본 레이아웃 컴포넌트
 * - Header, Main Content, Footer 포함
 * - 공통 레이아웃 구조 제공
 * - React Router Outlet 사용
 */
const DefaultLayout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // 페이지 이동 시 최상단으로 스크롤 (홈페이지 제외)
  useEffect(() => {
    if (!isHomePage) {
      window.scrollTo(0, 0);
    }
  }, [location, isHomePage]);
  
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 - React Router Outlet 사용 */}
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20 md:pt-24 p-4 md:p-6 lg:p-8'}`}>
        <Outlet />
      </main>
      
      {/* 푸터 - 홈페이지에서는 컴포넌트 내부에 푸터가 있음 */}
      {!isHomePage && (
        <footer className="p-4 md:p-6 text-center border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </footer>
      )}
    </div>
  );
};

export default DefaultLayout;
