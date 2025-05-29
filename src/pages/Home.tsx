import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ minHeight: '100vh' }}>
      {/* 애니메이션 배경 */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="animate-spin-slow w-64 h-64 rounded-full bg-gradient-to-tr from-primary-light/30 via-pink-300/20 to-blue-300/20 blur-2xl opacity-60" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-primary-light dark:text-primary-dark drop-shadow-lg">Welcome!</h1>
      <button
        className="px-8 py-3 rounded-full bg-primary-light dark:bg-primary-dark text-white font-semibold text-lg shadow-lg hover:scale-105 hover:bg-primary-dark dark:hover:bg-primary-light hover:text-primary-dark dark:hover:text-primary-light transition-all duration-200"
        onClick={() => navigate('/projects')}
      >
        프로젝트 보러가기
      </button>
    </div>
  );
};

export default Home;
