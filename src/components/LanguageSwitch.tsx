import React from 'react';

interface LanguageSwitchProps {
  language: 'ko' | 'en';
  onToggle: () => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="ml-2 px-2 py-1 rounded text-xs font-semibold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="언어 변경"
    >
      {language === 'ko' ? 'EN' : '한글'}
    </button>
  );
};

export default LanguageSwitch;
