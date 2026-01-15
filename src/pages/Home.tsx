import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Timeline from '@/components/Timeline';

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Hero */}
      <Hero />
      {/* Core Competencies */}
      <Intro />
      {/* Projects */}
      {/* Career History */}
      <Timeline />
    </div>
  );
};

export default Home;
