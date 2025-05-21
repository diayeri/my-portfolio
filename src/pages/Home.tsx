import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useIntersectionObserver, useActiveSection } from '@/hooks/useScroll';
import { scrollToElement } from '@/utils/scroll';
import { Link } from 'react-router-dom';
import AnimatedElement from '@/components/AnimatedElement';
import AnimatedBackground from '@/components/AnimatedBackground';
import type { ProjectData } from '@/types/ProjectData';

// 샘플 프로젝트 데이터
const sampleProjects: ProjectData[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React, TypeScript and Node.js',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://placehold.co/600x400/svg?text=E-Commerce+Project',
    link: '/projects/1',
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    tech: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: 'https://placehold.co/600x400/svg?text=Task+Manager',
    link: '/projects/2',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website with dark mode support',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://placehold.co/600x400/svg?text=Portfolio',
    link: '/projects/3',
    github: 'https://github.com/username/portfolio',
  }
];

/**
 * 모던한 홈페이지 컴포넌트
 * - 히어로 섹션
 * - 프로젝트 섹션
 * - 소개 섹션
 * - 연락처 섹션
 */
const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = ['hero', 'projects', 'about', 'contact'];
  const activeSection = useActiveSection(sections, 200);
  
  // 스크롤 애니메이션을 위한 refs
  const [heroVisible, heroRef] = useIntersectionObserver(0.1);
  const [projectsVisible, projectsRef] = useIntersectionObserver(0.1);
  const [aboutVisible, aboutRef] = useIntersectionObserver(0.1);
  const [contactVisible, contactRef] = useIntersectionObserver(0.1);
  
  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="w-full">
      <PageTitle title="Home" />
      
      {/* 고정된 페이지 내비게이션 */}
      <nav className={`fixed right-10 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="flex flex-col gap-4">
          {sections.map((section) => (
            <li key={section}>
              <button 
                onClick={() => scrollToElement(section)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSection === section 
                    ? 'bg-primary-light dark:bg-primary-dark scale-150' 
                    : 'bg-gray-400 dark:bg-gray-600 hover:scale-125'
                }`}
                aria-label={`Navigate to ${section} section`}
              />
            </li>
          ))}
        </ul>
      </nav>
      
      {/* 히어로 섹션 */}
      <section 
        id="hero" 
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900 transition-opacity duration-1000 relative ${
          heroVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* 애니메이션 배경 */}
        <AnimatedBackground />
        
        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <AnimatedElement animation="fade-up" duration={800} delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark mb-6">
              Frontend Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Building beautiful, responsive, and accessible web applications
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={800} delay={600}>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => scrollToElement('projects')}
                className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToElement('contact')}
                className="px-6 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </AnimatedElement>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToElement('projects')} 
              className="text-gray-500 dark:text-gray-400"
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section 
        id="projects" 
        ref={projectsRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen py-24 px-4 bg-background-light dark:bg-background-dark transition-opacity duration-1000 ${
          projectsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Featured Projects
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <AnimatedElement 
                key={project.id}
                animation="fade-up" 
                duration={800} 
                delay={300 + (index * 150)}
                className="h-full"
              >
                <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center px-4 py-2 rounded-md bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        View details 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
          
          <AnimatedElement animation="fade-up" duration={800} delay={800}>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity"
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section 
        id="about" 
        ref={aboutRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen py-24 px-4 bg-background-light dark:bg-background-dark transition-opacity duration-1000 ${
          aboutVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                About Me
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
          </AnimatedElement>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <AnimatedElement animation="fade-right" duration={800} delay={300} className="md:w-1/3 flex-shrink-0">
                <div className="rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-lg transform transition-transform hover:scale-105 group">
                  <img 
                    src="https://placehold.co/300x300/svg"
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-left" duration={800} delay={500} className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-primary-light dark:text-primary-dark">Frontend Developer & UI/UX Enthusiast</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Hello! I'm a passionate frontend developer with 5+ years of experience creating modern web applications. 
                  I specialize in building responsive, accessible, and performant user interfaces that provide excellent user experiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  My approach combines clean code practices with creative problem solving. I'm constantly learning and exploring new technologies
                  to stay up-to-date with the ever-evolving web development landscape.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity hover:shadow-lg hover:-translate-y-1"
                  >
                    More About Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center px-4 py-2 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-md hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all hover:shadow-lg hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement animation="fade-up" duration={800} delay={700}>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-center">My Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Next.js', 
                    'Tailwind CSS', 'Node.js', 'GraphQL', 'Redux',
                    'React Query', 'Webpack', 'Vite', 'Git',
                    'Jest', 'Testing Library', 'Storybook', 'Figma'
                  ].map((skill, index) => (
                    <AnimatedElement 
                      key={skill}
                      animation="fade-up"
                      duration={400}
                      delay={800 + (index * 50)}
                    >
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors transform hover:scale-105 hover:shadow-md">
                        {skill}
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section 
        id="contact" 
        ref={contactRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen py-24 px-4 bg-background-light dark:bg-background-dark transition-opacity duration-1000 ${
          contactVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Get In Touch
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedElement animation="fade-right" duration={800} delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-light/20 dark:bg-primary-dark/20 mr-4 group-hover:bg-primary-light group-hover:text-white dark:group-hover:bg-primary-dark transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:example@example.com" className="text-primary-light dark:text-primary-dark hover:underline">
                        example@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-light/20 dark:bg-primary-dark/20 mr-4 group-hover:bg-primary-light group-hover:text-white dark:group-hover:bg-primary-dark transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+123456789" className="text-primary-light dark:text-primary-dark hover:underline">
                        +1 (234) 567-89
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-light/20 dark:bg-primary-dark/20 mr-4 group-hover:bg-primary-light group-hover:text-white dark:group-hover:bg-primary-dark transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-primary-light dark:text-primary-dark">
                        Seoul, South Korea
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/username" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/username" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.618v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-left" duration={800} delay={500}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-primary-light dark:text-primary-dark">Send Me a Message</h3>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-up" duration={800} delay={800}>
            <footer className="mt-20 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
              </p>
            </footer>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Home;
