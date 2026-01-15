import styles from './TechMarquee.module.css';

export function TechMarquee() {
  const logos = [
    { src: '/images/logos/html.svg', alt: 'HTML' },
    { src: '/images/logos/css.svg', alt: 'CSS' },
    { src: '/images/logos/js.svg', alt: 'JavaScript' },
    { src: '/images/logos/ts.svg', alt: 'TypeScript' },
    { src: '/images/logos/react.svg', alt: 'React' },
    { src: '/images/logos/jquery.svg', alt: 'jQuery' },
    { src: '/images/logos/tailwind.svg', alt: 'Tailwind' },
    { src: '/images/logos/mui.svg', alt: 'MUI' },
    { src: '/images/logos/bootstrap.svg', alt: 'Bootstrap' },
    { src: '/images/logos/figma.svg', alt: 'Figma' },
    { src: '/images/logos/photoshop.svg', alt: 'Photoshop' },
    { src: '/images/logos/illustrator.svg', alt: 'Illustrator' },
    { src: '/images/logos/framer.svg', alt: 'Framer' },
    { src: '/images/logos/git.svg', alt: 'Git' },
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <div className='relative w-[800px] overflow-hidden'>
      <div className={`flex w-max ${styles['animate-marquee']}`}>
        {repeatedLogos.map((logo, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center mx-6 ${styles.group}`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className='w-auto h-10 transition duration-200 opacity-70 grayscale hover:opacity-100 hover:grayscale-0'
            />
            {/* hover 시 alt 텍스트 */}
            <span
              className={`absolute bottom-0 px-1 py-[2px] mb-2 text-xs font-semibold text-white bg-black/70 rounded pointer-events-none ${styles.alt}`}
            >
              {logo.alt}
            </span>
          </div>
        ))}
      </div>

      <div className='absolute top-0 left-0 z-10 w-20 h-full pointer-events-none bg-gradient-to-r from-white to-transparent' />
      <div className='absolute top-0 right-0 z-10 w-20 h-full pointer-events-none bg-gradient-to-l from-white to-transparent' />
    </div>
  );
}
