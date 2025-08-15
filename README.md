# UI Dev Portfolio - DY Website

현대적인 웹 기술을 활용한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 다크 모드 지원으로 다양한 환경에서 최적의 사용자 경험을 제공합니다.

## 📋 개요

이 프로젝트는 개인 포트폴리오 웹사이트로, 다음과 같은 핵심 기능들을 제공합니다:

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 🌙 다크 모드 지원 (사용자 설정 저장)
- 🚀 최적화된, 빠른 로딩 속도
- 📊 프로젝트 갤러리 및 필터링 기능
- 📝 연락처 폼
- 📈 Google Analytics 통합 (선택적)

## 🛠️ 기술 스택

- **프론트엔드**:

  - [React](https://reactjs.org/) - UI 라이브러리
  - [TypeScript](https://www.typescriptlang.org/) - 정적 타입 지원
  - [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 기반 CSS 프레임워크
  - [React Router](https://reactrouter.com/) - 라우팅 라이브러리

- **빌드 도구**:

  - [Vite](https://vitejs.dev/) - 빠른 개발 서버 및 빌드 도구

- **분석 및 추적**:
  - [Google Analytics](https://analytics.google.com/) (선택적)

## 📁 폴더 구조

```
my-portfolio/
├── public/                  # 정적 파일 (파비콘, 이미지 등)
├── src/                     # 소스 코드
│   ├── assets/              # 이미지, 글꼴 등의 에셋
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── hooks/               # 커스텀 React 훅
│   ├── layouts/             # 레이아웃 컴포넌트
│   ├── pages/               # 페이지 컴포넌트 (Home, About, Projects, Contact)
│   ├── types/               # TypeScript 타입 정의
│   ├── utils/               # 유틸리티 함수 (analytics.ts, env.ts 등)
│   ├── App.tsx              # 앱의 메인 컴포넌트
│   ├── main.tsx             # 앱 진입점
│   └── index.css            # 전역 CSS
├── .env                     # 환경 변수 (비공개)
├── .env.example             # 환경 변수 예시 (공개)
├── eslint.config.js         # ESLint 설정
├── index.html               # HTML 템플릿
├── postcss.config.js        # PostCSS 설정
├── tailwind.config.js       # Tailwind CSS 설정
├── tsconfig.json            # TypeScript 설정
└── vite.config.ts           # Vite 설정
```

## 🚀 시작하기

### 사전 요구사항

- [Node.js](https://nodejs.org/) (v18.0.0 이상)
- [npm](https://www.npmjs.com/) (v9.0.0 이상) 또는 [Yarn](https://yarnpkg.com/) (v1.22.0 이상)

### 설치 방법

1. 레포지토리를 클론합니다:

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. 의존성 패키지를 설치합니다:

```bash
npm install
# 또는
yarn install
```

3. 환경 변수를 설정합니다:

```bash
cp .env.example .env
# .env 파일을 열어 필요한 값을 수정하세요
```

4. 개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
```

5. 브라우저에서 `http://localhost:5173`로 접속하여 포트폴리오 웹사이트를 확인합니다.

### 빌드 및 배포

프로덕션 빌드를 생성하려면:

```bash
npm run build
# 또는
yarn build
```

생성된 `dist` 폴더를 웹 서버에 배포하거나, Netlify, Vercel, GitHub Pages 등의 서비스를 이용하여 배포할 수 있습니다.

## 🔧 커스터마이징

1. **개인 정보 수정**:

   - `src/pages` 폴더의 각 페이지를 수정하여 개인 정보를 업데이트하세요.
   - `public` 폴더에 자신의 이미지를 추가하세요.

2. **색상 테마 변경**:

   - `tailwind.config.js` 파일에서 색상을 수정하세요.

3. **Google Analytics 설정**:
   - `.env` 파일에서 `VITE_APP_GA_ID` 값을 설정하세요.

## 📄 라이센스

[MIT](./LICENSE)

## 👨‍💻 개발자 정보

이름: 정다영  
웹사이트: [johndoe.com](https://johndoe.com)  
GitHub: [@johndoe](https://github.com/johndoe)

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
````
