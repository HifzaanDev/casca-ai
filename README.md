# 🤖 Casca AI - Full-Stack Generative AI Chat Application

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-aicasca.click-blue?style=for-the-badge&logo=google-chrome)](https://aicasca.click)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/hifzaan-mohammad)
[![GitHub](https://img.shields.io/badge/GitHub-hifzaanDev-181717?style=for-the-badge&logo=github)](https://github.com/hifzaanDev)

> **🚀 Experience Casca AI live at [aicasca.click](https://aicasca.click)**

## 🎥 Project Walkthrough

<div align="center">

https://github.com/user-attachments/assets/demo-video.mp4

</div>

*👆 Watch me personally explain the architecture, features, and technical implementation of Casca AI in this comprehensive project walkthrough.*

<details>
<summary>📱 Can't see the video? Click here for alternative viewing options</summary>

- **Direct Download**: [📥 Download Demo Video](./demo-video.mp4)
- **File Location**: `./demo-video.mp4` in the project root
- **Duration**: Full project walkthrough and technical deep-dive

</details>

A high-performance, production-ready generative AI chat application built with modern technologies and deployed on AWS with enterprise-grade infrastructure.

## ✨ Key Achievements

- ⚡ **Optimized Performance**: Achieved API response times of 400-600ms with high Lighthouse scores (100 Best Practices, 95 Accessibility, 79 Performance)
- 🏗️ **Modern Cloud Architecture**: Fully containerized microservices deployed on AWS ECS with Application Load Balancer and custom domain management
- 🔒 **Enterprise Security**: Secure authentication system with Clerk Auth integration
- 🖼️ **Advanced Features**: Client-side image analysis capabilities for enhanced user experience

## 🎯 Live Application

**Visit the live application:** [**aicasca.click**](https://aicasca.click)

The application is fully deployed and operational, showcasing production-ready performance and scalability.

## 🏗️ Architecture Overview

### Technology Stack

**Frontend:**
- React 19 (RC) with modern hooks and concurrent features
- Vite for ultra-fast development and optimized builds
- TanStack Query for efficient data fetching and caching
- React Router DOM for client-side routing
- Clerk React for authentication UI components

**Backend:**
- Node.js with Express.js framework
- MongoDB with Mongoose ODM for data persistence
- Clerk SDK for server-side authentication
- ImageKit integration for image processing and storage
- Google Generative AI for chat completions

**Infrastructure & DevOps:**
- Docker multi-stage builds for optimized container images
- AWS Elastic Container Service (ECS) for orchestration
- AWS Elastic Container Registry (ECR) for image storage
- AWS Application Load Balancer (ALB) with HTTPS termination
- AWS Route 53 for DNS management and custom domain routing
- Nginx as reverse proxy in production containers

### Deployment Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Route 53      │───▶│  Load Balancer  │───▶│   ECS Cluster   │
│  (DNS + Domain) │    │   (ALB + HTTPS) │    │                 │
└─────────────────┘    └─────────────────┘    │  ┌───────────┐  │
                                               │  │Frontend   │  │
                                               │  │Container  │  │
                                               │  └───────────┘  │
                                               │  ┌───────────┐  │
                                               │  │Backend    │  │
                                               │  │Container  │  │
                                               │  └───────────┘  │
                                               └─────────────────┘
```

## 🐳 Containerization Strategy

### Multi-Stage Docker Builds

**Frontend Container:**
- **Stage 1**: Node.js Alpine for building React application
- **Stage 2**: Nginx Alpine for serving static files with optimized configuration
- **Result**: Lightweight production image (~25MB)

**Backend Container:**
- Node.js Alpine with optimized layer caching
- Multi-environment support with configurable environment variables
- Health check endpoints for load balancer integration

### Docker Compose Development
```yaml
services:
  react-app:
    image: react-app:dev
    ports: ["5173:5173"]
  api-server:
    image: api-server:dev
    ports: ["3000:3000"]
```

## 🚀 Key Features

### Performance Optimizations
- **Efficient API Design**: RESTful endpoints with optimized query patterns
- **Caching Strategy**: Client-side caching with TanStack Query
- **Container Optimization**: Multi-stage builds reducing image sizes by 70%
- **Load Balancing**: Intelligent traffic distribution across multiple containers

### Security Implementation
- **Authentication**: Clerk-based secure user management
- **CORS Configuration**: Strict origin control for production security
- **Environment Isolation**: Secure handling of API keys and sensitive data
- **HTTPS Termination**: SSL/TLS encryption at the load balancer level

### Scalability Features
- **Microservices Architecture**: Independently scalable frontend and backend services
- **Container Orchestration**: ECS task definitions with auto-scaling capabilities
- **Database Optimization**: MongoDB with indexed queries and connection pooling
- **CDN-Ready**: Static assets optimized for content delivery networks

## 🛠️ Local Development

### Prerequisites
- Node.js 22+
- Docker and Docker Compose
- MongoDB instance
- Environment variables configured

### Quick Start

```bash
# Clone the repository
git clone https://github.com/hifzaanDev/casca-ai
cd casca-ai

# Install dependencies
npm install --prefix backend
npm install --prefix client

# Configure environment variables
cp backend/.env.example backend/.env
# Update with your API keys and configuration

# Start with Docker Compose
docker-compose up --build

# Or start individually
npm run dev --prefix backend
npm run dev --prefix client
```

### Environment Configuration
```env
# Backend (.env)
PORT=3000
MONGO=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
CLIENT_URL=https://aicasca.click
```

## 📊 Performance Metrics

- **API Response Time**: 400-600ms average
- **Lighthouse Scores**:
  - Best Practices: 100/100
  - Accessibility: 95/100
  - Performance: 79/100
- **Container Image Sizes**:
  - Frontend: ~25MB (optimized with Nginx Alpine)
  - Backend: ~180MB (Node.js Alpine)
- **Uptime**: 99.9% availability on AWS infrastructure

## 📁 Project Structure

```
casca-ai/
├── 📁 backend/                    # Node.js/Express API Server
│   ├── 📄 index.js                 # Main server entry point
│   ├── 📄 package.json             # Backend dependencies
│   ├── 📄 Dockerfile               # Backend containerization
│   ├── 📄 .dockerignore            # Docker ignore rules
│   ├── 📄 .gitignore               # Git ignore rules
│   ├── 📄 .env                     # Environment variables
│   └── 📁 models/                  # MongoDB schemas
│       ├── 📄 chat.js              # Chat conversation model
│       └── 📄 userChats.js         # User chat history model
│
├── 📁 client/                      # React Frontend Application
│   ├── 📄 package.json             # Frontend dependencies
│   ├── 📄 vite.config.js           # Vite build configuration
│   ├── 📄 Dockerfile               # Frontend containerization (Multi-stage)
│   ├── 📄 nginx.conf               # Nginx production config
│   ├── 📄 index.html               # HTML entry point
│   ├── 📁 public/                  # Static assets
│   └── 📁 src/                     # Source code
│       ├── 📄 main.jsx             # React app entry point
│       ├── 📄 App.jsx              # Main app component
│       ├── 📄 index.css            # Global styles
│       │
│       ├── 📁 components/          # Reusable UI components
│       │   ├── 📄 ChatList.jsx     # Chat history sidebar
│       │   ├── 📄 chatList.css     # Chat list styling
│       │   ├── 📁 newPrompt/       # Chat input component
│       │   │   ├── 📄 NewPrompt.jsx
│       │   │   └── 📄 newPrompt.css
│       │   └── 📁 upload/          # File upload component
│       │       ├── 📄 Upload.jsx
│       │       └── 📄 upload.css
│       │
│       ├── 📁 layouts/             # Page layout components
│       │   ├── 📄 RootLayout.jsx   # Base application layout
│       │   ├── 📄 rootLayout.css   # Root layout styles
│       │   ├── 📁 dashboardLayout/ # Dashboard-specific layout
│       │   │   ├── 📄 DashboardLayout.jsx
│       │   │   └── 📄 dashboardLayout.css
│       │   └── 📁 lib/             # Layout utilities
│       │       └── 📄 gemini.js    # AI integration logic
│       │
│       ├── 📁 routes/              # Application pages/routes
│       │   ├── 📁 homepage/        # Landing page
│       │   │   ├── 📄 Homepage.jsx
│       │   │   └── 📄 homepage.css
│       │   ├── 📁 dashboardPage/   # Main chat interface
│       │   │   ├── 📄 DashboardPage.jsx
│       │   │   └── 📄 dashboardPage.css
│       │   ├── 📁 chatPage/        # Individual chat view
│       │   │   ├── 📄 ChatPage.jsx
│       │   │   └── 📄 chatPage.css
│       │   ├── 📁 signInPage/      # Authentication pages
│       │   │   ├── 📄 SignInPage.jsx
│       │   │   └── 📄 signInPage.css
│       │   ├── 📁 signUpPage/
│       │   │   ├── 📄 SignUpPage.jsx
│       │   │   └── 📄 signUpPage.css
│       │   ├── 📁 contactPage/     # Contact information
│       │   │   ├── 📄 ContactPage.jsx
│       │   │   └── 📄 contactPage.css
│       │   └── 📁 comingSoon/      # Feature announcements
│       │       ├── 📄 ComingSoon.jsx
│       │       └── 📄 comingSoon.css
│       │
│       └── 📁 lib/                 # Utility functions
│           └── 📄 gemini.js        # Google Generative AI integration
│
├── 📄 docker-compose.yml          # Multi-container orchestration
├── 📄 README.md                   # Project documentation
└── 📄 .gitignore                  # Git ignore rules
```

## 🔗 API Endpoints

### Core Functionality
- `GET /api/health` - Service health check
- `POST /api/chats` - Create new chat session
- `GET /api/userchats` - Retrieve user's chat history
- `GET /api/chats/:id` - Get specific chat conversation
- `PUT /api/chats/:id` - Update chat with new messages
- `GET /api/upload` - Get ImageKit authentication parameters

## 📱 Contact

**Hifzaan Mohammad**  
📧 Email: [mohammadhifzan24@gmail.com](mailto:mohammadhifzan24@gmail.com)  
💼 LinkedIn: [linkedin.com/in/hifzaan-mohammad](https://linkedin.com/in/hifzaan-mohammad)  
👨‍💻 GitHub: [@hifzaanDev](https://github.com/hifzaanDev)

---

**🌟 Experience the full application at [aicasca.click](https://aicasca.click)**
