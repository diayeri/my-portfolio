import React from 'react';
import PageTitle from '../components/PageTitle';

/**
 * Projects 페이지 컴포넌트
 * - 프로젝트 목록 및 상세 정보
 */
const Projects: React.FC = () => {
  // 프로젝트 목록 데이터
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React, TypeScript and Tailwind CSS.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250?text=Portfolio',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'An online shopping platform with product listings, cart functionality, and checkout process.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250?text=E-commerce',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines.',
      tech: ['React', 'Firebase', 'Material UI'],
      image: 'https://via.placeholder.com/400x250?text=Task+App',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard with location-based forecasts.',
      tech: ['JavaScript', 'Weather API', 'Chart.js'],
      image: 'https://via.placeholder.com/400x250?text=Weather+App',
      link: '#'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <PageTitle title="Projects" />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>
      
      {/* 프로젝트 필터링/정렬 옵션 */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md">All</button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">React</button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">TypeScript</button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Backend</button>
      </div>
      
      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* 프로젝트 썸네일 이미지 */}
            <img 
              src={project.image} 
              alt={`${project.title} thumbnail`}
              className="w-full h-48 object-cover"
            />
            
            {/* 프로젝트 정보 */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              {/* 기술 스택 태그 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* 프로젝트 링크 버튼 */}
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
