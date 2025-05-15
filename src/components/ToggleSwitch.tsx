import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ToggleSwitchProps {
  className?: string;
}

/**
 * 다크모드 토글 스위치 컴포넌트
 * - 슬라이더 형태의 토글 스위치
 * - localStorage에 사용자 설정 저장
 * - 아이콘으로 현재 모드 시각적 표현
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ className = '' }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex items-center ${className}`}>
      {/* 라이트 모드 아이콘 */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-yellow-400'}`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" 
        />
      </svg>

      {/* 토글 스위치 */}
      <button 
        onClick={toggleDarkMode}
        className="relative inline-flex h-6 w-12 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
        aria-pressed={isDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="sr-only">{isDarkMode ? 'Disable dark mode' : 'Enable dark mode'}</span>
        {/* 스위치 배경 */}
        <span 
          className={`${
            isDarkMode ? 'bg-primary-dark' : 'bg-gray-300'
          } absolute h-6 w-12 mx-auto rounded-full transition-colors duration-300 ease-in-out`}
        />
        {/* 스위치 써클 */}
        <span 
          className={`${
            isDarkMode ? 'translate-x-6 bg-gray-800' : 'translate-x-0 bg-white'
          } absolute left-0 inline-block h-6 w-6 transform rounded-full border border-gray-200 shadow transition-transform duration-300 ease-in-out flex items-center justify-center`}
        >
          {isDarkMode && (
            <span className="text-xs text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </span>
          )}
        </span>
      </button>

      {/* 다크 모드 아이콘 */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ml-2 ${isDarkMode ? 'text-blue-300' : 'text-gray-400'}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
        />
      </svg>
    </div>
  );
};

export default ToggleSwitch;
