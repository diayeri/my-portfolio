import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

/**
 * About 페이지 컴포넌트
 * - 개인 소개
 * - 경력 정보
 * - 기술 스택
 */
const About: React.FC = () => {
  const language = useContext(LanguageContext);

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
      description:
        'Led the development of responsive web applications using React and TypeScript. Improved performance by 40% through code optimization and modern techniques.',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2023',
      description:
        'Developed and maintained multiple client projects using React, Redux, and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect designs.',
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'StartUp Vision',
      period: '2019 - 2020',
      description:
        'Assisted in developing web applications, gained experience in modern JavaScript frameworks and responsive design principles.',
    },
  ];

  // 교육 데이터
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2017 - 2019',
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2013 - 2017',
    },
  ];

  return (
    <div className='flex flex-col w-full max-w-4xl gap-12 p-12 mx-auto my-24 shadow-md bg-surface-light dark:bg-surface-dark'>
      <h1 className='mb-6 text-3xl font-bold md:text-4xl'>About Me</h1>

      {/* 프로필 섹션 */}
      <div>
        <div className='items-center gap-8 md:flex'>
          <div className='mb-6 md:w-1/3 md:mb-0'>
            <div className='w-48 h-48 mx-auto overflow-hidden rounded-full bg-secondary-light dark:bg-secondary-dark'>
              {/* 임시로 이미지를 표시하지 않고 배경색만 보여줍니다 */}
              <div className='w-full h-full bg-secondary-light dark:bg-secondary-dark'></div>
            </div>
          </div>

          <div className='md:w-2/3'>
            <h2 className='mb-2 text-2xl font-bold'>정다영</h2>
            <p className='mb-4 font-medium text-primary-light dark:text-primary-dark'>
              {language === 'ko'
                ? '프론트엔드 · UI 개발 · 디자인'
                : 'Frontend · UI Development · Design'}
            </p>

            <p className='mb-4 text-text-light dark:text-text-dark'>
              Passionate frontend developer with over 5 years of experience
              building responsive, user-friendly web applications. Specializing
              in React, TypeScript, and modern CSS frameworks.
            </p>

            <a
              href='#'
              className='inline-block px-4 py-2 text-white transition-opacity rounded-md bg-primary-light dark:bg-primary-dark hover:opacity-90'
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* 기술 스택 */}
      <div>
        <h2 className='mb-6 text-xl font-bold'>Skills & Expertise</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className='flex justify-between mb-1'>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className='w-full h-2 rounded-full bg-secondary-light dark:bg-secondary-dark'>
                <div
                  className='h-2 rounded-full bg-primary-light dark:bg-primary-dark'
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 경력 */}
      <div>
        <h2 className='mb-6 text-xl font-bold'>Work Experience</h2>

        <div className='space-y-6'>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className='pb-2 pl-4 border-l-4 border-primary-light dark:border-primary-dark'
            >
              <div className='flex flex-col mb-2 md:flex-row md:justify-between'>
                <h3 className='text-lg font-semibold'>{exp.role}</h3>
                <span className='text-secondary-light dark:text-secondary-dark'>
                  {exp.period}
                </span>
              </div>
              <p className='mb-2 text-primary-light dark:text-primary-dark'>
                {exp.company}
              </p>
              <p className='text-text-light dark:text-text-dark'>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 교육 */}
      <div>
        <h2 className='mb-6 text-xl font-bold'>Education</h2>

        <div className='space-y-6'>
          {education.map((edu) => (
            <div
              key={edu.id}
              className='pb-2 pl-4 border-l-4 border-primary-light dark:border-primary-dark'
            >
              <div className='flex flex-col mb-2 md:flex-row md:justify-between'>
                <h3 className='text-lg font-semibold'>{edu.degree}</h3>
                <span className='text-secondary-light dark:text-secondary-dark'>
                  {edu.period}
                </span>
              </div>
              <p className='text-primary-light dark:text-primary-dark'>
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
