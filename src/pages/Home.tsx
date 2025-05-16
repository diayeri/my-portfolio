import React from 'react';
import PageTitle from '../components/PageTitle';

/**
 * 홈페이지 컴포넌트
 * - 인트로 섹션
 * - 프로젝트 목록
 * - 소개 정보
 */
const Home: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle title="Home" />
      {/* 인트로 섹션 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 
                   bg-gradient-to-r from-primary-light to-secondary-light 
                   dark:from-primary-dark dark:to-secondary-dark text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg">Frontend developer specializing in modern React applications.</p>
      </div>

      {/* 프로젝트 섹션 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

      {/* 소개 섹션 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
          nibh vel ultricies lacinia, nunc est ultricies nunc, vitae aliquam 
          nunc nisl vel nunc. Sed euismod, nibh vel ultricies lacinia, nunc est 
          ultricies nunc, vitae aliquam nunc nisl vel nunc.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
