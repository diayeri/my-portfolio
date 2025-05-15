import { NavLink } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

/**
 * 헤더 컴포넌트
 * - 로고/타이틀
 * - 네비게이션 링크
 * - 다크모드 토글 버튼
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  // 활성 링크 스타일 함수
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-primary-light dark:text-primary-dark font-medium"
      : "text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors";
  };
  
  return (
    <header className={`p-4 md:p-6 flex flex-wrap justify-between items-center border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center">
        <NavLink to="/" className="text-xl md:text-2xl font-bold">My Portfolio</NavLink>
      </div>
      
      {/* 내비게이션 메뉴 */}
      <nav className="flex-grow md:flex-grow-0 mt-4 md:mt-0 w-full md:w-auto md:mx-8 order-3 md:order-2">
        <ul className="flex justify-center space-x-8">
          <li>
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
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
