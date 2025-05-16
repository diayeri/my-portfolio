import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { initializeGoogleAnalytics, trackPageView } from './utils/analytics'
import { getSiteTitle } from './utils/env'

// App.tsx에서는 더 이상 이 컴포넌트가 필요하지 않음

// App 컴포넌트와 분리된 라우팅 컴포넌트
const AppRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 페이지 변경 시 페이지 뷰 추적
    trackPageView(location.pathname);
  }, [location]);
  
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div className="text-center py-10">Page not found</div>} />
      </Route>
    </Routes>
  );
};

function App() {
  // Google Analytics 초기화
  useEffect(() => {
    initializeGoogleAnalytics();
    document.title = getSiteTitle(); // 기본 타이틀 설정
  }, []);
  
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
