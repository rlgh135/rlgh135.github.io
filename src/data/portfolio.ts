import type { Experience, Project, Skill, SocialLink } from "../types";

export const profile = {
  name: "Kiho Park",
  koreanName: "박기호",
  title: "Full-stack Engineer · AI Platform",
  statement: "복잡한 AI 흐름을\n단단한 제품으로 만듭니다.",
  bio: "프론트엔드부터 백엔드, LLM 오케스트레이션까지 제품의 전체 흐름을 설계합니다. 독립적인 모듈과 명확한 경계를 바탕으로 빠르게 확장하고 오래 유지되는 시스템을 지향합니다.",
  location: "Seoul, South Korea",
  email: "rlgh135@gmail.com",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rlgh135", icon: "gh" },
  { label: "Tech Blog", href: "https://velog.io/@rlgh135/posts", icon: "bl" },
];

export const highlights = [
  { value: "5×", label: "LLM 처리 속도 개선" },
  { value: "80%", label: "쿼리 대기 시간 단축" },
  { value: "4h", label: "고용량 통신 안정성 검증" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "saga-agent",
    description: "AI 에이전트의 도구 실행 중 실패가 발생하면 완료된 작업을 역순으로 보상하는 트랜잭션 안전 레이어입니다.",
    tags: ["Python", "Saga Pattern", "Async", "AI Agent"],
    github: "https://github.com/rlgh135/saga-agent",
    year: "2026",
  },
  {
    id: 2,
    title: "my-ai-agent",
    description: "파일 작업, 웹 검색, 이메일 발송을 수행하는 MCP 기반 로컬 AI 어시스턴트입니다. 위험 작업에는 사용자 승인 흐름을 적용했습니다.",
    tags: ["FastAPI", "React", "MCP", "PostgreSQL"],
    github: "https://github.com/rlgh135/my-ai-agent",
    year: "2026",
  },
  {
    id: 3,
    title: "sideboard",
    description: "업무 흐름을 시각적으로 관리하는 칸반 보드 프로젝트입니다. React 클라이언트와 Java 서버를 분리해 구축했습니다.",
    tags: ["TypeScript", "React", "Java", "REST API"],
    github: "https://github.com/rlgh135/sideboard_client",
    year: "2025",
  },
];

export const skills: Skill[] = [
  { category: "Build", items: ["React", "TypeScript", "Python", "Spring Boot", "Swift"] },
  { category: "AI & Data", items: ["FastAPI", "LangGraph", "Tool Calling", "PostgreSQL", "AWS Bedrock"] },
  { category: "Operate", items: ["Docker", "Jenkins", "AWS", "Redis", "Git"] },
];

export const experiences: Experience[] = [
  {
    company: "(주) 하이아스",
    role: "Full-stack Engineer",
    period: "2025 — Present",
    description: "기업용 AI 플랫폼과 데이터 기반 제품을 설계하고 구현합니다.",
    projects: [
      {
        title: "다이닝브랜즈그룹 AI Platform",
        description: "전사 통합 LLM Wrapper와 역할별 특화 에이전트를 구축했습니다.",
        tags: ["Python", "FastAPI", "Tool Calling", "PostgreSQL"],
        impact: "권한별 접근 범위를 분리하고 에이전트 배정 구조를 모듈화",
      },
      {
        title: "대상그룹 AI Platform",
        description: "기존 LangGraph 기반 LLM 로직을 Tool Calling 중심 구조로 전환했습니다.",
        tags: ["Python", "FastAPI", "LangGraph", "PostgreSQL"],
        impact: "처리 속도 최대 5배 개선 · 토큰 사용량 최대 5배 절감",
      },
      {
        title: "Samsung Customer Voyager",
        description: "대용량 데이터 마트와 AI 기반 마케팅 추천 화면을 구축하고 고도화했습니다.",
        tags: ["React", "Spring Boot", "FastAPI", "MySQL", "Bedrock"],
        impact: "비동기 쿼리 실행 구조 개선으로 최장 15분 → 2분 단축",
      },
      {
        title: "Privoro iOS Hub",
        description: "USB·MQTT 통신 기반 서버 허브 역할의 iPhone 앱을 구축했습니다.",
        tags: ["Swift", "MQTT", "Concurrency"],
        impact: "1,024KB 데이터를 0.1초 간격으로 4시간 연속 송수신 검증",
      },
    ],
  },
  {
    company: "KH정보교육원",
    role: "Development Mentor",
    period: "2025.08 — 2026.04",
    description: "주 1회 개발 멘토링을 진행하고 세미·파이널 프로젝트를 심사했습니다.",
    projects: [],
  },
  {
    company: "(주) 엘앤소프트",
    role: "Web Developer",
    period: "2025",
    description: "구인·구직 플랫폼 anyApply의 베타 QA 대응과 제품 구축에 참여했습니다.",
    projects: [],
  },
];
