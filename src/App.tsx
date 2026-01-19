import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { OneTimeProvider } from './context/OneTimeContext';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import { trackPageView } from './utils/analytics';
import { getSiteTitle } from './utils/env';
import { projectsData } from './data/projectsData';

// 지연 로딩되는 컴포넌트들
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

// 로딩 Fallback 컴포넌트
const LoadingFallback = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary-light'></div>
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

    const pageName =
      pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1);
    return `${pageName} | ${baseTitle}`;
  };

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route
              path='projects/:id'
              element={<ProjectDetail projects={projectsData} />}
            />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='font-sans duration-300'>
        <OneTimeProvider>
          <AppRoutes />
        </OneTimeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
