// 1. 단순 문단
export type TextSection = {
  type: 'text';
  content: string;
};

// 2. 리스트 섹션
export type ListSection = {
  type: 'list';
  heading?: string; // optional 가능
  items: string[];
};

// 3. 단일 이미지 섹션
export type ImageSection = {
  type: 'image';
  src: string;
  layout: 'full' | 'small';
  caption?: string;
};

// 4. 이미지 + 텍스트 조합
export type ImageTextSection = {
  type: 'image-text';
  layout: 'side' | 'top';
  image: string;
  content: string;
};

// 5. 갤러리 섹션
export type GallerySection = {
  type: 'gallery';
  layout: 'grid' | 'carousel';
  images: string[];
};

export type ProjectSection =
  | TextSection
  | ListSection
  | ImageSection
  | ImageTextSection
  | GallerySection;

export interface ProjectsData {
  id: string;
  title: string;
  startDate: string;
  endDate?: string | null; // 없으면 진행중
  category: string;
  tech: string[];
  client: string;

  featured?: {
    order: number;
    cover: string;
  };

  links?: string[];
  github?: string;

  description?: string;
  images?: string[];

  section?: ProjectSection[];
}

export const projectsData: ProjectsData[] = [
  {
    id: 'chromatic',
    title: 'Chromatic Protocol',
    startDate: '2023.03',
    endDate: '2024.04',
    category: 'UI Dev',
    tech: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    client: 'Quarkonix',
    featured: {
      order: 1,
      cover:
        'https://github.com/user-attachments/assets/b3ce149f-f78d-4324-b917-00e35797fc05',
    },
    links: [
      'https://app.chromatic.finance/',
      'https://www.chromatic.finance/',
      // 'https://chromatic.gitbook.io/docs',
    ],
    github: 'https://github.com/chromatic-protocol/frontend-archive',
    description: 'Blockchain-Based Futures Trading Protocol',
  },
  {
    id: 'rounz',
    title: 'Rounz E-Commerce, Admin',
    startDate: '2024.12',
    endDate: '2025.05',
    category: 'Frontend',
    tech: ['React', 'TypeScript', 'Recoil', 'SCSS', 'MUI', 'jQuery'],
    client: '이스트소프트',
    featured: {
      order: 2,
      cover:
        'https://github.com/user-attachments/assets/4c6203cf-8d83-447b-bd11-ad937a251677',
    },
  },
  {
    id: 'muna',
    title: 'Muna',
    startDate: '2024.09',
    endDate: '2024.10',
    category: 'Frontend',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Firebase', 'SCSS', 'Figma'],
    client: '이스트소프트 프론트엔드 부트캠프 1기',
    featured: {
      order: 3,
      cover:
        'https://github.com/user-attachments/assets/82f209a0-a197-4778-b3de-aca04c43e6dc',
    },
  },
  {
    id: 'klaybay',
    title: 'Klaybay, Admin',
    startDate: '2022.03',
    endDate: '2023.02',
    category: 'UI Dev',
    tech: ['React', 'MUI', 'SCSS', 'Storybook'],
    client: 'Krust Universe',
    featured: {
      order: 4,
      cover:
        'https://github.com/user-attachments/assets/d705c180-cf71-4328-a2e4-d439d5495eae',
    },
  },
  {
    id: 'stichy',
    title: 'Stichy',
    startDate: '2020.10',
    endDate: '2021.04',
    category: 'UI Dev',
    tech: ['SCSS', 'Bootstrap'],
    client: 'Cocone',
    featured: {
      order: 5,
      cover:
        'https://github.com/user-attachments/assets/5e3ee3e1-c200-4f9f-8f35-776ef946170a',
    },
  },
  {
    id: 'miral-payment',
    title: 'Miral Payment Renewal',
    startDate: '2019.03',
    endDate: '2020.01',
    category: 'Design',
    tech: ['Photoshop'],
    client: '밀알복지재단',
    featured: {
      order: 6,
      cover:
        'https://github.com/user-attachments/assets/c103437e-adc3-4e14-9c1b-f29e8fc215ba',
    },
  },
];
