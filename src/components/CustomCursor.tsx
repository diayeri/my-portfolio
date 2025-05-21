import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  className?: string;
}

/**
 * 커스텀 커서 컴포넌트
 * - 마우스 포인터를 따라다니는 커스텀 커서 구현
 * - 호버 시 애니메이션 효과 적용
 */
const CustomCursor: React.FC<CustomCursorProps> = ({ className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // 마우스 이동 감지
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    // 클릭 감지
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // 요소 위에 마우스가 있는지 감지
    const handleMouseOver = (e: MouseEvent) => {
      // @ts-ignore - 실제로는 EventTarget에 style 속성이 없을 수 있음
      const targetStyle = window.getComputedStyle(e.target);
      const cursor = targetStyle.getPropertyValue('cursor');
      setIsPointer(cursor === 'pointer');
    };

    // 마우스가 브라우저 밖으로 나갔는지 감지
    const handleMouseLeave = () => setIsHidden(true);

    // 이벤트 리스너 등록
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 모바일 기기에서는 커서 숨김
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsHidden(isMobile);
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <>
      {/* 커서 외부 원 */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ${
          isPointer || isClicked ? 'scale-150' : 'scale-100'
        } ${className}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          height: '30px',
          width: '30px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : isPointer ? 1.2 : 1})`,
          transition: 'transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out',
        }}
      />
      {/* 커서 내부 점 */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full bg-white transition-all duration-200 ease-out ${
          isPointer || isClicked ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          height: '5px',
          width: '5px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
