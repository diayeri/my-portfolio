import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import { scrollToElement } from '@/utils/scroll';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

/**
 * 헤더 컴포넌트
 * - 로고/타이틀
 * - 네비게이션 링크 (스크롤 기반 내비게이션으로 통일)
 * - 다크모드 토글 버튼
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 모든 내비게이션을 홈페이지로 이동 후 스크롤 처리
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // 현재 홈페이지가 아니면 먼저 홈으로 이동
    if (location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 DOM이 업데이트될 시간을 주기 위해 약간의 지연 추가
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      scrollToElement(sectionId);
    }
  };
  
  return (
    <header 
      className={`p-4 md:p-6 flex flex-wrap justify-between items-center fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="flex items-center">
        <a 
          href="/"
          className="text-xl md:text-2xl font-bold transition-colors hover:text-primary-light dark:hover:text-primary-dark"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          My Portfolio
        </a>
      </div>
      
      {/* 내비게이션 메뉴 - 모두 스크롤 방식으로 통일 */}
      <nav className="flex-grow md:flex-grow-0 mt-4 md:mt-0 w-full md:w-auto md:mx-8 order-3 md:order-2">
        <ul className="flex justify-center space-x-8">
          <li>
            <a 
              href="/#hero"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/#about"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/#projects"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="/#contact"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      {/* 다크모드 토글 스위치 */}
      <div className="order-2 md:order-3">
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
