import React from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';
import type { ProjectData } from '@/types/ProjectData';

interface ProjectDetailProps {
  projects: ProjectData[];
}

/**
 * 프로젝트 상세 정보를 표시하는 컴포넌트
 * - 프로젝트의 상세 정보 표시
 * - 기술 스택, 이미지, 설명 등을 표시
 * - 이전/다음 프로젝트로 이동 기능
 */
const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // URL 파라미터에서 현재 프로젝트 ID를 찾음
  const projectId = parseInt(id || '0');
  const project = projects.find(p => p.id === projectId);
  
  // 프로젝트를 찾지 못한 경우 홈페이지의 프로젝트 섹션으로 리다이렉트
  if (!project) {
    return <Navigate to="/#projects" replace />;
  }
  
  // 이전/다음 프로젝트 ID 계산
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  
  // 홈페이지의 프로젝트 섹션으로 이동
  const goToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <AnimatedElement animation="fade-up" duration={800}>
        {/* 프로젝트 헤더 */}
        <div className="mb-10">
          <a 
            href="/#projects"
            className="inline-flex items-center text-primary-light dark:text-primary-dark mb-6 hover:underline"
            onClick={goToProjects}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </a>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </AnimatedElement>
      
      {/* 프로젝트 콘텐츠 */}
      <AnimatedElement animation="fade-up" duration={800} delay={200}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 이미지 */}
          <div className="lg:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          {/* 상세 정보 */}
          <div className="lg:col-span-1">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">About this project</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                Maecenas non tortor felis, vitae condimentum libero. Integer auctor
                tincidunt magna, sit amet eleifend nisl mattis id.
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <span>View Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all"
                    >
                      <span>View Source Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
      
      {/* 이전/다음 프로젝트 내비게이션 */}
      <AnimatedElement animation="fade-up" duration={800} delay={600}>
        <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-10">
          <div>
            {prevProject && (
              <Link 
                to={`/projects/${prevProject.id}`}
                className="inline-flex items-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 group-hover:text-primary-light dark:group-hover:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
                  <div className="text-primary-light dark:text-primary-dark">{prevProject.title}</div>
                </div>
              </Link>
            )}
          </div>
          
          <div className="text-right">
            {nextProject && (
              <Link 
                to={`/projects/${nextProject.id}`}
                className="inline-flex items-center group"
              >
                <div className="mr-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
                  <div className="text-primary-light dark:text-primary-dark">{nextProject.title}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-primary-light dark:group-hover:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ProjectDetail;
