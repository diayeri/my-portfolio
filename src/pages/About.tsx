import React from 'react';
import PageTitle from '../components/PageTitle';

/**
 * About 페이지 컴포넌트
 * - 개인 소개
 * - 경력 정보
 * - 기술 스택
 */
const About: React.FC = () => {
  // 기술 스택 데이터
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'GraphQL', level: 60 },
  ];

  // 경력 데이터
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Led the development of responsive web applications using React and TypeScript. Improved performance by 40% through code optimization and modern techniques.'
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2023',
      description: 'Developed and maintained multiple client projects using React, Redux, and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect designs.'
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'StartUp Vision',
      period: '2019 - 2020',
      description: 'Assisted in developing web applications, gained experience in modern JavaScript frameworks and responsive design principles.'
    }
  ];

  // 교육 데이터
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2017 - 2019'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2013 - 2017'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle title="About Me" />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
      
      {/* 프로필 섹션 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://via.placeholder.com/300x300?text=Profile" 
                alt="Profile avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-primary-light dark:text-primary-dark font-medium mb-4">Frontend Developer</p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate frontend developer with over 5 years of experience building 
              responsive, user-friendly web applications. Specializing in React, 
              TypeScript, and modern CSS frameworks.
            </p>
            
            <a 
              href="#"
              className="inline-block px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* 기술 스택 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-bold mb-6">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary-light dark:bg-primary-dark h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 경력 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-bold mb-6">Work Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-primary-light dark:border-primary-dark pl-4 pb-2">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-primary-light dark:text-primary-dark mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 교육 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-4 border-primary-light dark:border-primary-dark pl-4 pb-2">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-primary-light dark:text-primary-dark">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
