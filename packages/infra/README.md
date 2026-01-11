# @cartel/infra

인프라 관련 설정 패키지입니다.

## 📁 구조

```
infra/
└── nginx/              # Nginx 설정
    ├── nginx.conf      # Nginx 메인 설정
    └── docker-compose.yml
```

## 🚀 사용법

### 1. 앱 실행

먼저 각 앱을 실행합니다:

```bash
# MVP 앱 실행 (localhost:3001)
pnpm dev:mvp

# Main 앱 실행 (localhost:3000) - 나중에
# pnpm dev:main
```

### 2. Nginx 실행

#### Podman으로 실행 (권장)

```bash
# Podman 머신 시작 (최초 1회)
podman machine init
podman machine start

# Nginx 컨테이너 실행
cd packages/infra/nginx
podman run -d --name cartel-nginx \
  -p 8080:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine

# 컨테이너 중지
podman stop cartel-nginx

# 컨테이너 재시작
podman restart cartel-nginx

# 컨테이너 삭제
podman rm -f cartel-nginx
```

#### Docker Compose로 실행

```bash
cd packages/infra/nginx
docker-compose up -d

# 중지
docker-compose down
```

#### 로컬 Nginx로 실행

```bash
# macOS (Homebrew)
brew install nginx
nginx -c $(pwd)/packages/infra/nginx/nginx.conf

# 중지
nginx -s stop
```

### 3. 접속

```
http://localhost:8080/mvp     # MVP 앱
http://localhost:8080         # 자동으로 /mvp로 리다이렉트
```

## 🔧 설정 설명

### nginx.conf
- **MVP 앱**: 네트워크 IP (192.168.0.111:3001)로 프록시
- **경로 기반 라우팅**: `/mvp` 경로로 MVP 앱 접근
- **HMR 지원**: Next.js Hot Module Replacement 작동
- **Health check**: `/health` 엔드포인트

### 포트 설정
- **Nginx**: 8080 (호스트) → 80 (컨테이너)
- **MVP 앱**: 3001
- **Main 앱**: 3000 (예정)

## 🔍 트러블슈팅

### 502 Bad Gateway
MVP 앱이 실행 중인지 확인:
```bash
curl http://localhost:3001/mvp
```

nginx.conf의 IP 주소를 확인:
```bash
# 현재 네트워크 IP 확인
ifconfig | grep "inet "
```

### 포트 충돌
8080 포트 사용 중인 프로세스 확인:
```bash
lsof -i :8080
```

다른 포트로 변경:
```bash
podman run -d --name cartel-nginx -p 8081:80 ...
```

### 로그 확인
```bash
# Podman 로그
podman logs -f cartel-nginx

# Docker 로그
docker-compose logs -f nginx
```

### 설정 파일 변경 후 재시작
```bash
podman restart cartel-nginx
```
