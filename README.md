# 🚀 Developer Portfolio

React + TypeScript로 만든 개발자 포트폴리오 사이트입니다.  
GitHub Actions를 통해 `main` 브랜치에 push하면 GitHub Pages로 자동 배포됩니다.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

---

## ⚡ 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

---

## 🔧 배포 설정 (처음 한 번만)

### 1. `vite.config.ts` 수정

```ts
base: '/your-repo-name/',  // 실제 GitHub 레포 이름으로 변경
```

### 2. GitHub 레포 생성 후 push

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### 3. GitHub Pages 활성화

GitHub 레포 → **Settings** → **Pages** →  
Source: **GitHub Actions** 선택 후 저장

이후 `main` 브랜치에 push할 때마다 자동 빌드 & 배포됩니다.  
배포 URL: `https://<username>.github.io/<repo-name>/`

---

## ✏️ 콘텐츠 수정

모든 콘텐츠는 `src/data/portfolio.ts` 한 파일에서 관리합니다.

| 항목 | 변수 |
|------|------|
| 이름, 소개, 이메일 | `profile` |
| GitHub, LinkedIn 등 | `socials` |
| 프로젝트 목록 | `projects` |
| 기술 스택 | `skills` |
| 경력 사항 | `experiences` |

---

## 📁 프로젝트 구조

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD 파이프라인
├── public/
│   └── favicon.svg
├── src/
│   ├── components/           # UI 컴포넌트
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts      # ← 여기서 콘텐츠 수정
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 📜 Scripts

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사
```
