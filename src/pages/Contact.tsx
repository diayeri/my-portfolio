import React, { useContext } from 'react';

const Contact: React.FC = () => {
  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 구현 (API 호출 등)
    alert(
      'Message sent! This is a placeholder - actual submission would be implemented in a real app.'
    );
  };

  return (
    <div className='max-w-4xl px-4 py-24 mx-auto'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* 연락처 정보 */}
        <div className='p-6 rounded-lg shadow-md bg-surface-light dark:bg-surface-dark'>
          <h2 className='mb-4 text-xl font-bold'>'연락하기'</h2>

          <div className='space-y-4'>
            <div className='flex items-start'>
              <div className='p-2 mr-3 rounded-full bg-primary-light dark:bg-primary-dark'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold'>'Email'</h3>
                <p className='text-text-light dark:text-text-dark'>
                  example@email.com
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='p-2 mr-3 rounded-full bg-primary-light dark:bg-primary-dark'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold'>'Location'</h3>
                <p className='text-text-light dark:text-text-dark'>
                  Seoul, South Korea
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='p-2 mr-3 rounded-full bg-primary-light dark:bg-primary-dark'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold'>'Phone'</h3>
                <p className='text-text-light dark:text-text-dark'>
                  +82 10-1234-5678
                </p>
              </div>
            </div>
          </div>

          {/* 소셜 링크 */}
          <div className='mt-6'>
            <h3 className='mb-2 font-semibold'>'Connect with me'</h3>
            <div className='flex space-x-3'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 transition-opacity rounded-full bg-secondary-light dark:bg-surface-dark hover:opacity-80'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 transition-opacity rounded-full bg-secondary-light dark:bg-surface-dark hover:opacity-80'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 transition-opacity rounded-full bg-secondary-light dark:bg-surface-dark hover:opacity-80'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 연락 양식 */}
        <div className='p-6 rounded-lg shadow-md bg-surface-light dark:bg-surface-dark'>
          <h2 className='mb-4 text-xl font-bold'>메시지 보내기</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-1 text-sm font-medium'>
                이름
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full px-3 py-2 border rounded-md border-secondary-light dark:border-secondary-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark'
              />
            </div>

            <div>
              <label htmlFor='email' className='block mb-1 text-sm font-medium'>
                이메일
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full px-3 py-2 border rounded-md border-secondary-light dark:border-secondary-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark'
              />
            </div>

            <div>
              <label
                htmlFor='subject'
                className='block mb-1 text-sm font-medium'
              >
                제목
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                required
                className='w-full px-3 py-2 border rounded-md border-secondary-light dark:border-secondary-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block mb-1 text-sm font-medium'
              >
                메시지
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                required
                className='w-full px-3 py-2 border rounded-md resize-none border-secondary-light dark:border-secondary-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full px-4 py-2 text-white transition-opacity rounded-md bg-primary-light dark:bg-primary-dark hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark'
            >
              보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
