import type { Project, Skill, Experience, SocialLink } from "../types";

export const profile = {
  name: "Kiho Park",
  title: "Full Stack Developer",
  tagline: "I build things for the web.",
  bio: "깔끔한 구조의 아키텍처를 중시하는 개발자입니다. 각 영역들을 독립적인 모듈로 구성하는 것을 최우선으로 생각하며, 확장 가능하고 유지보수가 쉬운 코드를 지향합니다. 독립적인 모듈로 이루어진 클린 아키텍처는 AI에게 업무를 지시할 때에도 효과적입니다.",
  location: "Seoul, South Korea",
  email: "rlgh135@email.com",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rlgh135", icon: "gh" },
  // { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "li" },
  { label: "Blog", href: "https://velog.io/@rlgh135/posts", icon: "bl" },
];

// 사이드 프로젝트만 포함 (회사 프로젝트는 experiences 내 projects 필드에 작성)
export const projects: Project[] = [
  {
    id: 1,
    title: "AI Stock Analyzer",
    description:
      "국내 주식 시장 특화 AI 분석 서비스. 거시경제 데이터와 LLM을 결합해 개인 투자자가 겪는 정보 비대칭 문제를 해결합니다.",
    tags: ["Python", "LangChain", "FastAPI", "React", "DDD"],
    github: "https://github.com/yourusername/ai-stock-analyzer",
    live: "https://ai-stock-analyzer.vercel.app",
    year: "2024",
  },
  {
    id: 2,
    title: "Query Optimizer",
    description:
      "복잡한 DB 쿼리를 시각적으로 분석·최적화하는 웹 앱. 실행 계획을 파싱해 병목 지점을 자동으로 탐지합니다.",
    tags: ["TypeScript", "React", "PostgreSQL", "AST"],
    github: "https://github.com/yourusername/query-optimizer",
    live: "https://query-optimizer.vercel.app",
    year: "2024",
  },
  {
    id: 3,
    title: "Local AI Assistant",
    description:
      "로컬 파일시스템과 직접 상호작용하는 데스크탑 AI 에이전트. Agentic 아키텍처 기반으로 파일 탐색·편집·실행을 자연어로 처리합니다.",
    tags: ["Python", "LangGraph", "Electron", "Hexagonal"],
    github: "https://github.com/yourusername/local-ai-assistant",
    year: "2024",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Python", "PostgreSQL", "Spring Boot", "Swift"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Jenkins", "AWS", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Jira", "Postman", "Confluence"],
  },
];

export const experiences: Experience[] = [
  {
    company: "(주) 하이아스",
    role: "FullStack Engineer",
    period: "2025 — Present",
    description:
      "SI 개발자.",
    projects: [
      {
        title: "다이닝브랜즈그룹 AI platform 구축",
        description:
          "전사 통합 AI 플랫폼(LLM Wrapper) 구축",
        tags: ["Python", "FastAPI", "Tool Calling", "PostgreSQL"],
        impact: "각 기능에 특화된 특화 agent의 추가 및 배정으로 권한에 따라 효율적으로 접근 범위를 제한시킴.",
      },
      {
        title: "대상그룹 AI platform 유지보수 및 고도화",
        description:
          "AI 플랫폼 유지보수 및 고도화",
        tags: ["Python", "FastAPI", "LangGraph", "PostgreSQL"],
        impact: "기존 LangGraph로 진행되는 LLM 로직을 Tool Calling으로 바꾸어 속도 최대 5배 개선, 토큰 사용량 최대 5배 개선",
      },
      {
        title: "privoro",
        description:
          "usb, mqtt 통신 기반 서버 사이의 허브 역할의 아이폰 앱 구축",
        tags: ["Swift", "mqtt"],
        impact: "쓰레드 분리를 통한 비동기 통신 구현. 0.1s interval 1024KB 4시간 송, 수신 무리 없도록 구축.",
      },
      {
        title: "삼성전자 Customer Voyager",
        description:
          "대용량 데이터 정제 후 마트 구축 및 마트 데이터와 AI를 활용한 마케팅 추천 페이지 구축 및 고도화",
        tags: ["React", "Spring Boot", "FASTAPI", "MySQL", "Bedrock"],
        impact: "tableau 대신 오픈소스인 chart.js를 채택 후 커스텀 컴포넌트로 만들어 비용 절감, 비동기 쿼리 조회에 커스텀 Executor를 사용해 쿼리 조회 시간 최장 15분 -> 2분으로 단축.",
      },
    ],
  },
  {
    company: "KH정보교육원",
    role: "Mentor",
    period: "2025.08 — 2026.04",
    description:
      "주 1회 멘토링 세션을 통한 재학생 교육 및 semi final, final 프로젝트 심사.",
    projects:[]
  },
  {
    company: "(주) 엘앤소프트",
    role: "Web Developer",
    period: "2025",
    description:
      "SI 개발자.",
    projects: [
      {
        title: "anyApply",
        description:
          "구인 구직 플랫폼 anyApply beta QA 대응 처리 및 구축",
        tags: ["React", "Spring Boot"],
        impact: "",
      },
    ],
  },
];
