/**
 * 프로젝트 데이터 타입 정의
 * 프로젝트 정보를 저장하는 인터페이스
 */
export interface ProjectData {
  /** 프로젝트의 고유 식별자 */
  id: number;
  
  /** 프로젝트 제목 */
  title: string;
  
  /** 프로젝트 설명 */
  description: string;
  
  /** 사용된 기술 스택 */
  tech: string[];
  
  /** 프로젝트 이미지 URL */
  image: string;
  
  /** 프로젝트 상세 페이지 링크 */
  link: string;
  
  /** 프로젝트 GitHub 저장소 링크 (선택적) */
  github?: string;
}