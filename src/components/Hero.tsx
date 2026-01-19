import { useEffect } from 'react';
import { useOneTime } from '@/context/OneTimeContext';
import MainAnimation from '@/components/MainAnimation';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Button } from '@/components/Button';
import { Github, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export default function Hero() {
  const { flags, setFlag } = useOneTime();
  const isFirstVisit = flags['hero'] !== false; // undefined or true -> 처음

  useEffect(() => {
    if (isFirstVisit) {
      const timer = setTimeout(() => setFlag('hero', false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isFirstVisit]);

  const motionProps = (delay: number): HTMLMotionProps<'h1'> => ({
    initial: isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: isFirstVisit ? delay : 0,
      duration: isFirstVisit ? 1 : 0,
      ease: [0.2, 1, 0.4, 1],
    },
  });

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className='relative flex flex-col items-center justify-center w-full h-screen py-10 text-center bg-ani-gradient'>
      <div className='absolute left-center top-center'>
        <MainAnimation isFirstVisit={isFirstVisit} />
      </div>
      <h2 className='font-mono text-2xl'>Design to Development</h2>
      <motion.h1
        {...motionProps(3.2)}
        className='z-10 mt-5 font-medium text-white text-8xl'
      >
        <span className='ml-[-48px] text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-black drop-shadow-sm'>
          UI Developer,
        </span>
        <br />
        <span className='mr-[-244px] text-nowrap drop-shadow-xl'>
          Dayoung Jung
        </span>
      </motion.h1>
      <motion.div {...motionProps(4)}>
        <p className='mt-20 text-base'>
          디자인 이해를 바탕으로 UI 개발을 주력으로 하며 <br />
          React, TypeScript 기반 프론트엔드 환경에서 <br />
          컴포넌트 구현과 기능 개발을 수행해온 UI 개발자입니다.
        </p>
        <div className='z-10 flex justify-center gap-2 mt-8'>
          <Button
            href='https://github.com/diayeri'
            color='primary'
            variant='outline'
            iconRight={<Github />}
          >
            Github
          </Button>
          <Button onClick={handleScrollDown} iconRight={<ArrowDown />}>
            Explore
          </Button>
        </div>
      </motion.div>
      <motion.div
        {...motionProps(4)}
        className='absolute left-center bottom-10'
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
