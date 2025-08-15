import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

/**
 * 헤더 컴포넌트
 * - 로고/타이틀
 * - 네비게이션 링크 (스크롤 기반 내비게이션으로 통일)
 * - 다크모드 토글 버튼
 * - 경로에 따라 내비게이션 메뉴 동작 조정
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`p-4 md:p-6 flex flex-wrap justify-between items-center fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90'
          : 'bg-transparent'
      } ${className}`}
    >
      <div className='flex items-center'>
        <Link
          to='/'
          className='text-xl font-bold transition-colors md:text-2xl hover:text-primary-light dark:hover:text-primary-dark'
        >
          UI Dev Portfolio - DY
        </Link>
      </div>

      {/* 내비게이션 메뉴 */}
      <nav className='flex-grow order-3 w-full mt-4 md:flex-grow-0 md:mt-0 md:w-auto md:mx-8 md:order-2'>
        <ul className='flex justify-center space-x-8'>
          <li>
            <Link
              to='/projects'
              className={`transition-colors ${
                location.pathname.startsWith('/projects')
                  ? 'text-primary-light dark:text-primary-dark'
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark'
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className={`transition-colors ${
                location.pathname.startsWith('/about')
                  ? 'text-primary-light dark:text-primary-dark'
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={`transition-colors ${
                location.pathname.startsWith('/contact')
                  ? 'text-primary-light dark:text-primary-dark'
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* 다크모드 토글 스위치 */}
      <div className='order-2 md:order-3'>
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
