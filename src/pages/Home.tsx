import { useNavigate } from 'react-router-dom';
import MainAnimation from '@/components/MainAnimation';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Hero */}
      <section className='relative flex flex-col items-center justify-center w-full h-screen py-10 text-center bg-ani-gradient'>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center my-10'>
          <MainAnimation />
        </div>
        <h2 className='font-mono text-2xl'>from Design to Frontend</h2>
        <h1 className='mt-2 text-white text-8xl drop-shadow-lg'>
          UI Developer, <br />
          Dayoung
        </h1>
        <p className='mt-20 text-lg'>
          디자인 이해를 바탕으로 UI 개발을 주력으로 하며 <br />
          React, TypeScript 기반 프론트엔드 환경에서 <br />
          컴포넌트 구현과 기능 개발을 수행해온 UI 개발자입니다.
        </p>
        <div className='flex justify-center gap-2 mt-8'>
          <button
            className='px-6 py-2 text-lg text-white transition-all duration-200 rounded-full shadow-lg bg-primary-light hover:scale-105 hover:bg-primary-dark hover:text-white'
            onClick={() => navigate('/projects')}
          >
            Github
          </button>
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
