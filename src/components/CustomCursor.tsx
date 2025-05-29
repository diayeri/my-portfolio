import React, { useEffect, useState } from 'react';
import { debounce } from '@/utils/scroll';

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

    // 마우스가 브라우저 밖으로 나갔는지 감지
    const handleMouseLeave = () => setIsHidden(true);

    // 이벤트 리스너 등록
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  // mouseover 이벤트를 별도의 useEffect로 분리하고 디바운스 적용
  useEffect(() => {
    // 요소 위에 마우스가 있는지 감지 (최적화 + 디바운스)
    const updatePointerState = (e: MouseEvent) => {
      // 타겟 요소가 유효한지 확인
      if (e.target instanceof Element) {
        const targetStyle = window.getComputedStyle(e.target);
        const cursor = targetStyle.getPropertyValue('cursor');
        setIsPointer(cursor === 'pointer');
      }
    };
    
    // 디바운스 함수로 이벤트 처리 최적화 (50ms 지연)
    const debouncedHandler = debounce(updatePointerState, 50);
    
    // 이벤트 리스너 등록
    window.addEventListener('mouseover', debouncedHandler);
    
    return () => {
      window.removeEventListener('mouseover', debouncedHandler);
    };
  }, []);

  // 모바일 기기에서는 커서 숨김
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsHidden(isMobile);
  }, []);

  // 기본 커서 숨기기
  useEffect(() => {
    if (isPointer || isClicked) {
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';
    } else {
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    }
    return () => {
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, [isPointer, isClicked]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full bg-white mix-blend-difference transition-all duration-150 ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        height: isPointer || isClicked ? '36px' : '6px',
        width: isPointer || isClicked ? '36px' : '6px',
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.15s cubic-bezier(0.4,0,0.2,1), height 0.15s cubic-bezier(0.4,0,0.2,1)',
      }}
    />
  );
};

export default CustomCursor;
