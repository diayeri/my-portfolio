import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import { initializeGoogleAnalytics, trackPageView } from './utils/analytics';
import { getSiteTitle } from './utils/env';

// 지연 로딩되는 컴포넌트들
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

// 로딩 Fallback 컴포넌트
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-light dark:border-primary-dark"></div>
  </div>
);

// App 컴포넌트와 분리된 라우팅 컴포넌트
const AppRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 페이지 변경 시 페이지 뷰 추적
    trackPageView(location.pathname);
    
    // 페이지 타이틀 업데이트
    document.title = getPageTitle(location.pathname);
  }, [location]);
  
  // 경로에 따른 페이지 타이틀 설정
  const getPageTitle = (path: string) => {
    const baseTitle = getSiteTitle() || 'Portfolio';
    const pathSegments = path.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return baseTitle;
    
    const pageName = pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1);
    return `${pageName} | ${baseTitle}`;
  };
  
  return (
    <>
      <CustomCursor />
      
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail projects={[
              {
                id: 1,
                title: 'E-commerce Platform',
                description: 'A modern e-commerce platform built with React, TypeScript and Node.js',
                tech: ['React', 'Node.js', 'MongoDB', 'Express'],
                image: 'https://placehold.co/1200x600/svg?text=E-Commerce+Project',
                link: 'https://example-ecommerce.com',
                github: 'https://github.com/username/ecommerce',
              },
              {
                id: 2,
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates',
                tech: ['React', 'Firebase', 'Redux', 'Material UI'],
                image: 'https://placehold.co/1200x600/svg?text=Task+Manager',
                link: 'https://example-taskapp.com',
              },
              {
                id: 3,
                title: 'Portfolio Website',
                description: 'A responsive personal portfolio website with dark mode support',
                tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
                image: 'https://placehold.co/1200x600/svg?text=Portfolio',
                link: 'https://example-portfolio.com',
                github: 'https://github.com/username/portfolio',
              }
            ]} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8">Page not found</p>
                <a 
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity"
                >
                  Go Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </a>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

function App() {
  // 애플리케이션 초기화
  useEffect(() => {
    // Google Analytics 초기화
    initializeGoogleAnalytics();
    
    // 페이지 타이틀 기본값 설정
    document.title = getSiteTitle() || 'Portfolio';
    
    // 테마 변경 감지
    const handleThemeChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    
    // 사용자 테마 기본 설정
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkModeMediaQuery.matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <div className="font-sans transition-colors duration-300">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
