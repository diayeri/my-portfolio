import { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from './Button';
// import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

const Portfolio = () => {
  const featuredProjects = useMemo(() => {
    return projectsData
      .filter((p) => p.featured !== undefined)
      .sort((a, b) => a.featured!.order! - b.featured!.order!);
  }, []);

  const [activeProject, setActiveProject] = useState(featuredProjects[0]);
  // const navigate = useNavigate();

  useEffect(() => {
    featuredProjects.forEach((project) => {
      const img = new Image();
      img.src = project.featured!.cover;
    });
  }, [featuredProjects]);

  return (
    <section className='bg-black wrapper-content'>
      <div className='content'>
        <div className='flex justify-between w-full'>
          <h2 className='mr-auto text-white title'>Featured Projects</h2>
          {/* <Button
            size='sm'
            variant='outline'
            className='hover:text-white hover:border-white'
            iconRight={<ArrowRight />}
            onClick={() => navigate('/projects')}
          >
            All Projects
          </Button> */}
        </div>
        <div className='flex items-center mt-10'>
          {/* 미리보기 영역 */}
          <div className='w-1/2 h-[520px] pr-8 rounded overflow-hidden flex items-center justify-center'>
            <img
              src={activeProject.featured!.cover}
              alt={activeProject.title}
              className='object-contain object-center w-full h-full transition-all duration-300'
            />
          </div>
          {/* 프로젝트 리스트 */}
          <ul className='flex flex-col w-1/2 gap-0 pl-12'>
            {featuredProjects.map((project) => (
              <li
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
              >
                {/* <a
                  href={`/projects/${project.id}`}
                  className='flex items-center py-6 border-b border-gray-500 cursor-pointer'
                > */}
                <div className='flex items-center py-6 border-b border-gray-500'>
                  <h3
                    className={`text-3xl font-semibold transition-colors duration-200 ${
                      activeProject.id === project.id
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 ml-5 text-sm font-normal rounded bg-white/20${
                      activeProject.id === project.id
                        ? ' text-white'
                        : ' text-gray-500'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                {/* </a> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
