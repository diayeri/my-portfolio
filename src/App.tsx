import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // prefers-color-scheme 감지 및 토글 상태 관리
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // 로컬 스토리지에서 사용자 설정 확인
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // prefers-color-scheme 확인
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 다크모드 변경 감지 및 적용
  useEffect(() => {
    const html = document.documentElement;
    
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // 사용자 설정 저장
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* 헤더 - 모바일에서는 작게, 중간 화면 이상에서는 패딩 증가 */}
      <header className="p-4 md:p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
        </div>
        
        {/* 다크모드 토글 버튼 */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </header>

      {/* 메인 콘텐츠 - 모바일에서는 작게, 큰 화면에서는 패딩 증가 */}
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <section className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 
                         bg-gradient-to-r from-primary-light to-secondary-light 
                         dark:from-primary-dark dark:to-secondary-dark text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-lg">Frontend developer specializing in modern React applications.</p>
          </div>

          {/* 반응형 그리드 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <article key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a sample project description for demonstration purposes.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 rounded-md bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity"
                  aria-label={`Learn more about Project ${item}`}
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="p-4 md:p-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
