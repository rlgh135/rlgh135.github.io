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
    detail: {
      overview:
        "국내 주식 시장에 특화된 AI 분석 서비스입니다. 거시경제 지표, 뉴스 감성 분석, 기술적 지표를 LLM과 결합해 개인 투자자에게 인사이트를 제공합니다. DDD 기반으로 도메인 레이어를 분리해 분석 로직의 독립성을 확보했습니다.",
      images: [],
      troubleshooting: [
        {
          problem: "LLM 응답 지연으로 사용자 경험 저하 (평균 8초)",
          solution:
            "분석 파이프라인을 병렬 체인으로 재설계하고 중간 결과를 스트리밍으로 전달해 체감 응답 시간을 1.5초로 단축.",
        },
        {
          problem: "거시경제 데이터 소스마다 포맷이 달라 전처리 복잡도 증가",
          solution:
            "각 데이터 소스를 독립 Adapter로 추상화해 도메인 모델과 분리. 새 소스 추가 시 Adapter만 구현하면 되는 구조로 개선.",
        },
      ],
    },
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
    detail: {
      overview:
        "SQL 실행 계획(EXPLAIN ANALYZE)을 파싱해 병목 노드를 시각적으로 표현하는 웹 앱입니다. AST 기반으로 쿼리를 분석하고 인덱스 누락, Seq Scan, N+1 패턴을 자동으로 감지해 개선안을 제안합니다.",
      images: [],
      troubleshooting: [
        {
          problem: "중첩 서브쿼리가 포함된 복잡한 SQL의 AST 파싱 실패",
          solution:
            "오픈소스 파서(node-sql-parser)의 엣지 케이스를 분석해 전처리 레이어를 추가. 파싱 전 쿼리를 정규화하는 단계를 삽입해 해결.",
        },
        {
          problem: "실행 계획 트리 노드 수가 많을 때 렌더링 성능 저하",
          solution:
            "D3.js 렌더링을 가상화해 뷰포트 내 노드만 그리도록 최적화. 1,000개 이상 노드에서도 60fps 유지.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Local AI Assistant",
    description:
      "로컬 파일시스템과 직접 상호작용하는 데스크탑 AI 에이전트. Agentic 아키텍처 기반으로 파일 탐색·편집·실행을 자연어로 처리합니다.",
    tags: ["Python", "LangGraph", "Electron", "Hexagonal"],
    github: "https://github.com/yourusername/local-ai-assistant",
    year: "2024",
    detail: {
      overview:
        "자연어 명령으로 로컬 파일시스템을 탐색·편집·실행할 수 있는 데스크탑 AI 에이전트입니다. LangGraph 기반의 Agentic 아키텍처로 복잡한 멀티스텝 작업을 처리하며, Hexagonal 아키텍처로 LLM 교체 비용을 최소화했습니다.",
      images: [],
      troubleshooting: [
        {
          problem: "에이전트가 파일 삭제·수정 등 위험 작업을 확인 없이 실행",
          solution:
            "도구를 read-only / write / destructive 3단계로 분류하고, destructive 작업은 사용자 확인 단계를 강제하는 Guard 레이어를 추가.",
        },
        {
          problem: "LangGraph 상태 그래프가 복잡해질수록 디버깅 어려움",
          solution:
            "각 노드 진입·퇴장 시 상태 스냅샷을 로컬 SQLite에 저장하는 옵저버를 붙여 실행 흐름을 시각적으로 추적할 수 있게 개선.",
        },
      ],
    },
  },
  {
    id: 4,
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
