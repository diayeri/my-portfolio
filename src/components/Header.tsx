import ToggleSwitch from './ToggleSwitch';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

/**
 * 헤더 컴포넌트
 * - 로고/타이틀
 * - 다크모드 토글 버튼
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`p-4 md:p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
      </div>
      
      {/* 다크모드 토글 스위치 */}
      <ToggleSwitch />
    </header>
  );
};

export default Header;
