import { Hero } from '@/components/Hero';

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Hero */}
      <Hero />
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
