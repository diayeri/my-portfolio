import { useNavigate } from 'react-router-dom';
import MainAnimation from '@/components/MainAnimation';
import { Button } from '@/components/Button';
import { Github, ArrowDown } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Hero */}
      <section className='relative flex flex-col items-center justify-center w-full h-screen py-10 text-center bg-ani-gradient'>
        <div className='absolute left-center top-center'>
          <MainAnimation />
        </div>
        <h2 className='font-mono text-2xl'>from Design to Frontend</h2>
        <h1 className='z-10 mt-5 text-white text-8xl'>
          <span className='ml-[-50px]'>UI Developer,</span>
          <br />
          <span className='mr-[-220px] text-nowrap drop-shadow-xl'>
            Dayoung Jung
          </span>
        </h1>
        <p className='mt-20 text-base'>
          디자인 이해를 바탕으로 UI 개발을 주력으로 하며 <br />
          React, TypeScript 기반 프론트엔드 환경에서 <br />
          컴포넌트 구현과 기능 개발을 수행해온 UI 개발자입니다.
        </p>
        <div className='z-10 flex justify-center gap-2 mt-8'>
          <Button
            onClick={() => navigate('/projects')}
            color='primary'
            variant='outline'
            iconRight={<Github />}
          >
            Github
          </Button>
          <Button
            onClick={() => navigate('/projects')}
            iconRight={<ArrowDown />}
          >
            Projects
          </Button>
        </div>
      </section>
      {/* Core Competencies */}
      <section className='h-[400vh]'>
        <p>
          웹 기획, 디자인, 프론트엔드 개발을 주도하여 프로젝트를 원활하게 이끌고
          진행합니다.
        </p>
        <p>
          꼼꼼한 일정 관리와 반복 점검을 통해 오류를 최소화하고 프로젝트의
          흐름을 책임집니다.
        </p>
        <p>
          원활한 소통으로 팀 분위기를 긍정적으로 이끌며, 서로 성장하는 협업을
          추구합니다.
        </p>
        <p>
          자발적으로 의견을 제시하고, 주어진 범위를 넘어 다방면의 업무에 적극
          참여합니다.
        </p>
      </section>
      {/* Projects */}
      {/* Career History */}
    </div>
  );
};

export default Home;
