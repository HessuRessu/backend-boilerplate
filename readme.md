# REST Boilerplate

🚀 A modern TypeScript boilerplate for building REST APIs.  
Includes out-of-the-box setup for **Express**, **TSOA**, **Swagger UI**, **Jest**, **ESLint**, **Docker**, **Compose**, **Typedoc**, and a **logger**.  

  ![Build Status](https://github.com/HessuRessu/rest-boilerplate/actions/workflows/build-test.yml/badge.svg)
  ![SAST Scan](https://github.com/HessuRessu/rest-boilerplate/actions/workflows/sast-scan.yml/badge.svg)
  ![Docker publish](https://github.com/HessuRessu/rest-boilerplate/actions/workflows/docker-publish.yml/badge.svg)


---

## ✨ Features

- ⚡ **Express + TSOA** – automatic route generation and OpenAPI/Swagger spec  
- 📑 **Swagger UI** – API documentation available at `/docs/{version}`  
- 🧪 **Jest** – testing preconfigured  
- 🧹 **ESLint** – modern lint configuration (flat config)  
- 🐳 **Docker & Compose** – run easily in containers  
- 📝 **Typedoc** – automatic code documentation  
- 🪵 **Logger (Pino)** – JSON-friendly logger ready for monitoring integration  
- 🔄 **Versioned API** – basePath controlled via environment variable (`APP_VERSION`)  

---

## 📦 Installation

``` bash
git clone https://github.com/HessuRessu/rest-boilerplate.git
cd rest-boilerplate
npm install
```

---

## ⚙️ Environment variables

This project uses a `.env` file. Example:  

``` ini
PORT=8080
NODE_ENV=dev
LOG_LEVEL=debug
SERVICE_NAME=service-name
APP_VERSION=v1
```

---

## ▶️ Usage

### Development mode

``` bash
npm run dev
```

API will be available at:  
- ✅ Health check: http://localhost:3000/api/v1/health  
- 📖 Swagger UI: http://localhost:3000/docs/v1  

### Production mode

``` bash
npm run build
npm start
```

---

## 🧪 Tests

``` bash
npm test
```

---

## 📑 Documentation

### Swagger / OpenAPI

Generate swagger.json and routes:  

``` bash
npm run swagger
npm run routes
```

Swagger UI is available at:  

`/docs/{APP_VERSION}`

### Typedoc

Generate Typedoc documentation:  

``` bash
npm run docs
```

Output will be available in the `docs/` folder.

---

## 🐳 Docker

### Build & run

``` bash
docker build -t rest-api .
docker run -p 3000:3000 --env-file .env rest-api
```

### Docker Compose

``` bash
docker-compose up --build
```

---

## 📂 Project structure

``` text
.
├── src/
│   ├── controllers/      # TSOA controllers
│   ├── middleware/       # Middleware handlers
│   ├── routes/           # Generated routes
│   ├── utils/            # Utility modules
│   ├── app.ts            # Express app initialization
│   └── index.ts          # Entry point
├── scripts/              # Helper scripts (e.g., TSOA basePath)
├── swagger/              # Generated swagger specs
├── tests/                # Tests
├── Dockerfile
├── docker-compose.yml
├── tsoa.json             # TSOA configuration
├── typedoc.json          # TypeDoc configuration
├── tsconfig.json
└── README.md
```

---

## 🚧 Roadmap / suggestions

- [ ] Add CI/CD workflow (GitHub Actions: lint + test + build)  
- [ ] Add request validation (e.g. Zod / class-validator)  
- [ ] Add production-grade security middleware (helmet, rate limiter)  
- [ ] Add examples for multiple API versions side by side  

---

## 📜 License

MIT