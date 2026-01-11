# Cartel Frontend Monorepo

pnpm을 사용한 모노레포 프로젝트입니다.

## 📁 구조

```
frontend/
├── apps/
│   ├── main/              # 메인 프로젝트
│   └── mvp/               # MVP/테스트 프로젝트
├── packages/
│   ├── shared/            # 공통 UI 컴포넌트
│   ├── config/            # 공유 설정 (TypeScript, ESLint)
│   └── infra/             # 인프라 스크립트/Docker/Nginx
└── pnpm-workspace.yaml    # pnpm 워크스페이스 설정
```

## 🚀 시작하기

### 1. pnpm 설치
```bash
npm install -g pnpm
```

### 2. 의존성 설치
```bash
pnpm install
```

### 3. 개발 서버 실행
```bash
# 모든 앱 실행
pnpm dev

# 특정 앱만 실행
pnpm dev:main    # localhost:3000
pnpm dev:mvp     # localhost:3001
```

## 📦 패키지 관리

### 의존성 추가
```bash
# 특정 앱에 패키지 추가
pnpm --filter @cartel/main add react react-dom next

# 워크스페이스 루트에 추가 (devDependencies)
pnpm add -w -D typescript eslint

# 로컬 패키지 사용
pnpm --filter @cartel/main add @cartel/shared
```

### 빌드
```bash
# 모든 패키지 빌드
pnpm build

# 특정 패키지만 빌드
pnpm --filter @cartel/main build
```

## 🐳 Docker

### 이미지 빌드
```bash
pnpm --filter @cartel/infra build:docker
```

### Docker Compose 실행
```bash
cd packages/infra/docker
docker-compose up -d
```

## 🔧 유용한 명령어

```bash
# 워크스페이스 구조 확인
pnpm list -r --depth 0

# 모든 패키지 린트
pnpm lint

# 모든 패키지 테스트
pnpm test

# node_modules 클린업
pnpm clean
```

## 📚 더 알아보기

- [pnpm 워크스페이스](https://pnpm.io/workspaces)
- [모노레포 베스트 프랙티스](https://monorepo.tools/)
