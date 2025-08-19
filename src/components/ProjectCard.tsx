import React from 'react';
import type { ProjectData } from '../types/ProjectData';

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

/**
 * 프로젝트 카드 컴포넌트
 * - 프로젝트 정보 표시
 * - 반응형 디자인
 * - 호버 효과
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
}) => {
  return (
    <article
      className={`
        relative flex bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md
        hover:shadow-xl transition-all duration-300 group
        ${className}
      `}
    >
      {/* 프로젝트 이미지 */}
      <div className='relative flex-none overflow-hidden w-60'>
        {Array.isArray(project.images) && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
            loading='lazy'
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
            loading='lazy'
          />
        )}
        <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100'>
          <span className='px-4 py-2 font-medium text-white transition-transform duration-300 transform translate-y-4 rounded-lg bg-primary-light dark:bg-primary-dark group-hover:translate-y-0'>
            View Details
          </span>
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div className='p-5'>
        <h3 className='mb-2 text-xl font-semibold group-hover:text-primary-light dark:group-hover:text-primary-dark'>
          {project.title}
        </h3>

        <p className='mb-4 text-gray-600 dark:text-gray-300 line-clamp-3'>
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className='px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 외부 링크 아이콘 (GitHub 있는 경우만 표시) - 링크 대신 버튼 사용 */}
        {project.github && (
          <div className='absolute p-2 bg-white rounded-full shadow-md top-3 right-3 dark:bg-gray-800'>
            <button
              type='button'
              className='block text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark'
              aria-label='View source code on GitHub'
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(project.github, '_blank', 'noopener,noreferrer');
              }}
            >
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z'></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* 하단 그라디언트 효과와 "View Project" 텍스트 */}
      <div className='absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-white dark:from-gray-800 to-transparent' />
    </article>
  );
};

export default ProjectCard;
