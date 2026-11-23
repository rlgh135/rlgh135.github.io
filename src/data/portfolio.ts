import type { Experience, Skill, SocialLink } from "../types";

export const profile = {
  name: "박기호",
  englishName: "Kiho Park",
  title: "Full-stack Developer",
  value: "좋은 아키텍처를 구성하고, 데이터가 입력되어 처리되고 전달되는 흐름을 끝까지 따라가는 개발자입니다.",
  location: "Seoul, South Korea",
  email: "rlgh135@gmail.com",
  careerPeriod: "2024.10 — Present",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rlgh135", icon: "gh" },
  { label: "Tech Blog", href: "https://velog.io/@rlgh135/posts", icon: "bl" },
];

export const skills: Skill[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Chart.js"] },
  { category: "Backend & AI", items: ["Python", "FastAPI", "Spring Boot", "LangChain", "LangGraph", "Tool Calling"] },
  { category: "Data & Infra", items: ["PostgreSQL", "Vector DB", "Docker", "AWS", "Jenkins", "Redis"] },
];

export const experiences: Experience[] = [
  {
    company: "하이아스",
    role: "SI 웹 개발 · Full-stack Developer",
    period: "2024.12.01 — Present",
    description: "RPA 솔루션 기업에서 BI 및 전사 AI 플랫폼의 웹 화면, API, 백엔드를 개발하고 운영합니다.",
    details: [
      "EY컨설팅 등 협력사와 BI·전사 AI 플랫폼 구축 및 운영",
      "웹 화면·API·백엔드 개발, 지표 정합성 검증, 사용자 권한 관리",
    ],
    note: "앨엔소프트의 경영 사정에 따른 모회사 고용승계로 재직 공백 없이 근무를 이어가고 있습니다.",
    projects: [
      {
        title: "삼성전자 DI Platform 구축",
        period: "2026.09 — Present",
        description: "판매 데이터를 세분화·정제하고 기존 Tableau 기반 BI 플랫폼을 대체하는 웹 플랫폼을 구축합니다.",
        responsibilities: [
          "기존 대시보드의 지표 산식 검증",
          "대시보드 웹 페이지 개발",
          "사용자 권한 시스템 구축",
        ],
        outcomes: ["기존 대시보드의 산식 오류와 지표 정합성 문제를 발견하고 수정"],
        tags: ["BI", "Data Validation", "Web", "Authorization"],
      },
      {
        title: "버거킹 BKR Keystone 구축",
        period: "2026.09 — 2026.10",
        description: "GitLab 저장소의 코드를 분석해 코드 리뷰와 HTML 보고서를 생성하는 플랫폼을 구축했습니다.",
        responsibilities: [
          "5개 웹 화면과 관련 비즈니스 로직 구현",
          "프롬프트 스크립트와 보고서 파일 연계",
          "Docker 환경의 구독형 Claude와 웹 화면 연동",
        ],
        outcomes: ["구독형 Claude를 활용해 토큰 단위 과금 API 방식 대비 코드 분석 비용 절감"],
        tags: ["Claude", "Docker", "GitLab", "HTML Report"],
      },
      {
        title: "다이닝브랜즈그룹 DinAi 구축",
        period: "2026.03 — 2026.08",
        description: "업무별 특화 AI 에이전트를 활용하는 전사 통합 AI 플랫폼을 구축했습니다.",
        responsibilities: [
          "사용자 권한을 반영한 RAG 및 프롬프트 설계·개선",
          "업무별 AI 에이전트와 웹 백엔드 비즈니스 로직 구현",
        ],
        outcomes: ["문서 파싱부터 Vector DB 적재까지 사내 정보의 RAG 활용을 위한 데이터 처리 파이프라인 구축"],
        tags: ["RAG", "Vector DB", "FastAPI", "AI Agent"],
      },
      {
        title: "대상 GenAI 고도화 및 운영",
        period: "2026.01 — Present · 2026.12 종료 예정",
        description: "대상정보기술과 연계해 1차 오픈된 전사 AI 플랫폼의 LLM 처리 구조를 고도화하고 서비스를 운영합니다.",
        responsibilities: [
          "LangChain·LangGraph 기반 처리 흐름을 병렬 Tool Calling 구조로 개선",
          "웹 페이지 결함 분석·수정 및 서비스 운영",
        ],
        outcomes: [
          "도구 호출 병렬 처리로 평균 응답 시간을 60초에서 10초로 약 83% 단축",
          "Python 환경에 JVM 기반 JAR를 연동해 한글 문서 파싱 기능 구현",
        ],
        tags: ["LangChain", "LangGraph", "Tool Calling", "Python", "JVM"],
      },
      {
        title: "Privoro iPhone 베타 앱 개발",
        period: "2025.11 — 2025.12",
        description: "보안 케이스와 통신하는 iPhone 베타 애플리케이션을 개발했습니다.",
        responsibilities: [
          "Swift 기반 애플리케이션 개발",
          "MQTT·USB 통신 로직 설계",
        ],
        outcomes: ["스레드 분리를 통한 백그라운드 처리 로직 구현"],
        tags: ["Swift", "MQTT", "USB", "Concurrency"],
      },
      {
        title: "삼성 Customer Voyager 구축",
        period: "2024.12 — 2025.10",
        description: "BDP에 분산된 데이터를 웹 조회용 마트로 정제하고 사내 마케터에게 마케팅 트렌드와 기록을 제공하는 플랫폼을 구축했습니다.",
        responsibilities: [
          "웹 화면 및 DB 스키마 목업 설계",
          "API 설계 및 Spring Boot 백엔드 서버 구축",
          "UI 수정 및 React 코드 고도화",
        ],
        outcomes: [
          "Chart.js 기반 시각화로 Tableau 사용 대비 비용 절감",
          "커스텀 Executor 기반 비동기 쿼리 처리로 데이터 조회 시간 단축",
        ],
        tags: ["React", "Spring Boot", "Chart.js", "Database", "Async"],
      },
    ],
  },
  {
    company: "주식회사 앨엔소프트",
    role: "Web Developer",
    period: "2024.10.10 — 2024.11.30",
    description: "웹 서비스의 QA 결과를 바탕으로 시스템 오류를 분석하고 개선했습니다.",
    projects: [
      {
        title: "넥서스앤컴퍼니 Anyapply·Refercheck 개선",
        period: "2024.10 — 2024.11",
        description: "두 베타 웹 서비스의 안정화를 위한 QA 대응 업무를 수행했습니다.",
        responsibilities: ["QA 시트를 기반으로 시스템 오류 분석 및 수정"],
        outcomes: ["담당 QA 항목을 기한 내 모두 처리"],
        tags: ["Web", "QA", "Maintenance"],
      },
    ],
  },
  {
    company: "KH정보교육원",
    role: "실무 멘토",
    period: "2025.09 — 2026.04",
    label: "External Activity",
    description: "주 1회 기술·실무 교육을 진행하고 총 6개 팀이 교육과정을 수료할 때까지 멘토링을 지원했습니다.",
    details: ["기술·실무 교육", "프로젝트 피드백", "6개 팀 수료 지원"],
    projects: [],
  },
];
