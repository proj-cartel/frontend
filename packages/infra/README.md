# @cartel/infra

인프라 관련 스크립트 및 설정 패키지입니다.

## 구조

```
infra/
├── scripts/          # 빌드/배포 스크립트
│   ├── build-docker.ts
│   ├── generate-nginx.ts
│   └── deploy.ts
├── docker/           # Docker 설정
│   ├── Dockerfile.main
│   ├── Dockerfile.mvp
│   └── docker-compose.yml
└── nginx/            # Nginx 설정
    └── nginx.conf (자동 생성)
```

## 사용법

### Docker 이미지 빌드
```bash
pnpm --filter @cartel/infra build:docker
```

### Nginx 설정 생성
```bash
pnpm --filter @cartel/infra nginx:generate
```

### Docker Compose 실행
```bash
cd packages/infra/docker
docker-compose up -d
```
