import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ToggleSwitchProps {
  className?: string;
  small?: boolean;
}

/**
 * 다크모드 토글 스위치 컴포넌트
 * - 슬라이더 형태의 토글 스위치
 * - localStorage에 사용자 설정 저장
 * - 아이콘으로 현재 모드 시각적 표현
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ className = '', small = false }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const trackW = small ? 'w-9' : 'w-12';
  const trackH = small ? 'h-5' : 'h-6';
  const thumbW = small ? 'w-5' : 'w-6';
  const thumbH = small ? 'h-5' : 'h-6';
  return (
    <div className={`flex items-center justify-center ${className}`} style={small ? { minWidth: 0 } : {}}>
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex items-center ${trackW} ${trackH} rounded-full focus:outline-none transition-colors bg-gray-200 dark:bg-gray-700`}
        aria-pressed={isDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        type="button"
        style={small ? { minWidth: 0, padding: 0 } : {}}
      >
        <span className="sr-only">{isDarkMode ? 'Disable dark mode' : 'Enable dark mode'}</span>
        {/* Track */}
        <span
          className={`absolute left-0 top-0 ${trackW} ${trackH} rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-primary-dark/80' : 'bg-gray-300/80'}`}
        />
        {/* Thumb */}
        <span
          className={`absolute left-0 top-0 ${thumbW} ${thumbH} rounded-full bg-white dark:bg-gray-900 transition-transform duration-300 flex items-center justify-center ${isDarkMode ? (small ? 'translate-x-4' : 'translate-x-6') : 'translate-x-0'}`}
          style={{ zIndex: 1 }}
        >
          {isDarkMode && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-dark dark:text-primary-light" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
