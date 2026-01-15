import Hero from '@/components/Hero';
import Intro from '@/components/Intro';

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Hero */}
      <Hero />
      {/* Core Competencies */}
      <Intro />
      {/* Projects */}
      {/* Career History */}
    </div>
  );
};

export default Home;
