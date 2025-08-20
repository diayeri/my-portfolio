import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainAnimation from '@/components/MainAnimation';

const Home = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000); // 3초 후에 애니메이션 종료

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full min-h-[80vh] relative'>
      {showAnimation ? (
        <MainAnimation />
      ) : (
        <>
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none -z-10'>
            <div className='w-64 h-64 rounded-full animate-spin-slow bg-gradient-to-tr from-primary-light/30 via-pink-300/20 to-blue-300/20 blur-2xl opacity-60' />
          </div>
          <h1 className='mb-8 text-3xl font-bold md:text-5xl text-primary-light dark:text-primary-dark drop-shadow-lg'>
            Welcome!
          </h1>
          <button
            className='px-8 py-3 text-lg font-semibold text-white transition-all duration-200 rounded-full shadow-lg bg-primary-light dark:bg-primary-dark hover:scale-105 hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light dark:hover:text-primary-dark'
            onClick={() => navigate('/projects')}
          >
            프로젝트 보러가기
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
