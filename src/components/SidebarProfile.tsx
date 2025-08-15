import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const SidebarProfile: React.FC = () => {
  const language = useContext(LanguageContext);

  return (
    <div className='w-full mb-4 text-left'>
      <p className='mb-1 text-base font-bold tracking-tight md:text-lg'>
        <a
          href='/'
          className='transition-colors hover:text-primary-light dark:hover:text-primary-dark'
        >
          {language === 'ko' ? '정다영' : 'Dayoung Jung'}
        </a>
      </p>
      <p className='mb-1 text-xs text-primary whitespace-nowrap'>
        {language === 'ko'
          ? '프론트엔드 · UI 개발 · 디자인'
          : 'Frontend · UI Development · Design'}
      </p>
      <div className='flex mt-1 space-x-2'>
        <a
          href='mailto:example@email.com'
          className='flex items-center transition-colors hover:text-primary-light dark:hover:text-primary-dark'
          aria-label={language === 'ko' ? '이메일' : 'Email'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 align-middle'
          >
            <path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm0 2.012v8.488c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.762l-8.03 5.624a.75.75 0 0 1-.84 0L3.75 8.762z' />
          </svg>
        </a>
        <a
          href='https://github.com/username'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors hover:text-primary-light dark:hover:text-primary-dark'
          aria-label='GitHub'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='inline w-4 h-4 align-text-bottom'
          >
            <path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z' />
          </svg>
        </a>
        <a
          href='https://linkedin.com/in/username'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors hover:text-primary-light dark:hover:text-primary-dark'
          aria-label='LinkedIn'
        >
          in
        </a>
      </div>
    </div>
  );
};

export default SidebarProfile;
