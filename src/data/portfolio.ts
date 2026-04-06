import type { Project, Skill, Experience, SocialLink } from "../types";

export const profile = {
  name: "Kiho Park",
  title: "Full Stack Developer",
  tagline: "I build things for the web.",
  bio: "경계를 탐색하는 개발자입니다. 사용자 경험을 최우선으로 생각하며, 확장 가능하고 유지보수가 쉬운 코드를 작성합니다. 새로운 기술을 배우고 복잡한 문제를 해결하는 것을 좋아합니다.",
  location: "Seoul, South Korea",
  email: "your@email.com",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "gh" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "li" },
  { label: "Blog", href: "https://yourblog.dev", icon: "bl" },
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
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "AWS", "Nginx", "Linux"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Postman", "Vim", "Notion"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Tech Company A",
    role: "Backend Engineer",
    period: "2023 — Present",
    description:
      "사내 AI 기반 서비스 개발 및 백엔드 시스템 설계. DDD·Hexagonal 아키텍처 도입으로 레거시 모놀리스를 모듈형 구조로 전환 주도.",
    projects: [
      {
        title: "사내 AI 리포트 자동화 플랫폼",
        description:
          "LLM을 활용해 수작업으로 작성하던 주간 분석 리포트를 자동 생성. 도메인 이벤트 기반으로 파이프라인 설계.",
        tags: ["Python", "FastAPI", "LangChain", "PostgreSQL", "DDD"],
        impact: "리포트 생성 시간 80% 단축 · 월 처리량 200 → 1,200건",
      },
      {
        title: "레거시 API 서버 마이그레이션",
        description:
          "Java 6 기반 모놀리스를 Spring Boot 3로 단계적 마이그레이션. Strangler Fig 패턴 적용해 무중단 전환.",
        tags: ["Java", "Spring Boot", "Hexagonal", "MySQL"],
        impact: "응답 지연 P95 기준 1.2s → 280ms",
      },
    ],
  },
  {
    company: "Startup B",
    role: "Full Stack Developer",
    period: "2022 — 2023",
    description:
      "0 → 1 제품 개발. Next.js와 Node.js로 MVP 구축, 6개월 만에 MAU 10,000명 달성.",
    projects: [
      {
        title: "B2B SaaS MVP",
        description:
          "팀 내 유일한 개발자로 기획부터 배포까지 전담. 인증·결제·대시보드를 포함한 풀스택 제품 구축.",
        tags: ["Next.js", "Node.js", "Prisma", "Stripe"],
        impact: "MAU 0 → 10,000 · 6개월",
      },
    ],
  },
  {
    company: "Agency C",
    role: "Web Developer",
    period: "2021 — 2022",
    description:
      "다양한 클라이언트를 위한 웹 솔루션 개발. 반응형 웹사이트 20개 이상 납품.",
  },
];
